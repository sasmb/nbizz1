import { NextResponse, type NextRequest } from 'next/server'

// Option C: Single POST handler that validates the richer payload and
// forwards to n8n when configured; otherwise logs locally.
// Includes simple in-memory rate limiting and CORS support.

type RateRecord = { count: number; firstRequestMs: number }
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000 // 15 minutes
const RATE_LIMIT_MAX = 5
const rateMap = new Map<string, RateRecord>()

function getClientIp(request: NextRequest): string {
  const xff = request.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0].trim()
  return request.ip ?? 'unknown'
}

function isRateLimited(request: NextRequest): boolean {
  // Disable rate limiting in non-production environments for easier testing
  if (process.env.NODE_ENV !== 'production') return false
  const ip = getClientIp(request)
  const now = Date.now()
  const existing = rateMap.get(ip)
  if (!existing) {
    rateMap.set(ip, { count: 1, firstRequestMs: now })
    return false
  }
  if (now - existing.firstRequestMs > RATE_LIMIT_WINDOW_MS) {
    rateMap.set(ip, { count: 1, firstRequestMs: now })
    return false
  }
  if (existing.count >= RATE_LIMIT_MAX) return true
  existing.count += 1
  return false
}

function cors(response: NextResponse, request: NextRequest): NextResponse {
  const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:3000')
    .split(',')
    .map((s) => s.trim())
  const origin = request.headers.get('origin') || ''
  const isAllowed = allowedOrigins.includes(origin)

  if (isAllowed) {
    response.headers.set('Access-Control-Allow-Origin', origin)
    response.headers.set('Vary', 'Origin')
  }
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, x-api-key')
  response.headers.set('Access-Control-Max-Age', '86400')
  return response
}

type WaitlistPayload = {
  fullName: string
  email: string
  phone: string
  website?: string | null
  issue: string
  willingness: number | string
}

function validatePayload(data: Partial<WaitlistPayload>) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data?.email || !emailRegex.test(data.email)) throw new Error('Valid email is required')
  if (!data.fullName) throw new Error('Full name is required')
  if (!data.phone) throw new Error('Phone is required')
  if (!data.issue) throw new Error('Issue is required')
  if (data.willingness === undefined || data.willingness === null || data.willingness === '') {
    throw new Error('Willingness to pay is required')
  }
  const normalized = {
    fullName: String(data.fullName).trim(),
    email: data.email.toLowerCase().trim(),
    phone: String(data.phone).trim(),
    website: data.website ? String(data.website).trim() : null,
    issue: String(data.issue).trim(),
    willingness: typeof data.willingness === 'string' ? Number(data.willingness) : data.willingness,
    timestamp: new Date().toISOString(),
    source: 'website_waitlist',
  }
  return normalized
}

export async function OPTIONS(request: NextRequest) {
  const response = new NextResponse(null, { status: 204 })
  return cors(response, request)
}

export async function POST(request: NextRequest) {
  try {
    if (isRateLimited(request)) {
      const resp = NextResponse.json(
        { success: false, message: 'Too many submissions, please try again later.' },
        { status: 429 }
      )
      return cors(resp, request)
    }

    const body = (await request.json()) as Partial<WaitlistPayload>
    const clean = validatePayload(body)

    const webhookUrl = process.env.N8N_WEBHOOK_URL
    // TEMP LOGGING
    console.log('[waitlist] Using N8N_WEBHOOK_URL:', webhookUrl)
    const apiKey = process.env.N8N_API_KEY

    if (webhookUrl) {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 10000)
      const resp = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(apiKey ? { 'getreechwaitlist': apiKey } : {}),
        },
        body: JSON.stringify(clean),
        signal: controller.signal,
      }).finally(() => clearTimeout(timeout))
      if (!resp.ok) {
        const text = await resp.text().catch(() => '')
        throw new Error(`Webhook error: ${resp.status} ${text}`)
      }
    } else {
      // Fallback: log locally if no webhook configured
      console.log('Waitlist submission (no webhook configured):', clean)
    }

    const ok = NextResponse.json({ success: true, message: 'Successfully joined waitlist!' })
    return cors(ok, request)
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    console.error('Waitlist POST error:', msg)
    const resp = NextResponse.json({ success: false, message: 'Failed to join waitlist.' }, { status: 400 })
    return cors(resp, request)
  }
}


