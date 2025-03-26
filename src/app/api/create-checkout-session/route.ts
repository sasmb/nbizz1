import { stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: Request) {
  try {
    const { plan } = await request.json();
    console.log('Received plan:', plan);
    
    if (!plan) {
      return NextResponse.json(
        { error: 'No plan provided' },
        { status: 400 }
      );
    }

    // Determine mode based on the plan ID
    const mode = plan.includes('RwvANxOdCyRqgo4Ebr') ? 'payment' : 'subscription';
    console.log('Using mode:', mode);

    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: plan,
            quantity: 1,
          },
        ],
        mode,
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        billing_address_collection: 'required',
        allow_promotion_codes: true,
      });

      return NextResponse.json({ sessionId: session.id });
    } catch (stripeError) {
      console.error('Stripe API Error:', stripeError);
      return NextResponse.json(
        { error: stripeError instanceof Error ? stripeError.message : 'Failed to create checkout session' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
} 