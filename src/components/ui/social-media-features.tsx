'use client'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Instagram, Twitter, Linkedin, Calendar, TrendingUp, Users } from 'lucide-react'
import { ReactNode } from 'react'

export function SocialMediaFeatures() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Social Media Content Creation</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Platform-specific content optimization with high-quality visuals, copywriting, and analytics integration.
                    </p>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <SocialCard
                        platform="Instagram"
                        icon={Instagram}
                        color="from-purple-500 to-pink-500"
                        metric="300% Engagement"
                        description="High-quality visuals and stories that convert"
                        imageUrl="https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop"
                    />
                    
                    <SocialCard
                        platform="LinkedIn"
                        icon={Linkedin}
                        color="from-blue-600 to-blue-700"
                        metric="150% Reach"
                        description="Professional content for B2B engagement"
                        imageUrl="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
                    />
                    
                    <SocialCard
                        platform="Twitter"
                        icon={Twitter}
                        color="from-sky-400 to-blue-500"
                        metric="200% Followers"
                        description="Viral content strategies and real-time engagement"
                        imageUrl="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
                    />
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    <FeatureCard className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                                <Calendar className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Content Scheduling</h3>
                                <p className="text-muted-foreground">Automated posting across all platforms</p>
                            </div>
                        </div>
                        <ContentScheduleDemo />
                    </FeatureCard>

                    <FeatureCard className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                                <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Analytics & Insights</h3>
                                <p className="text-muted-foreground">Real-time performance tracking</p>
                            </div>
                        </div>
                        <AnalyticsDemo />
                    </FeatureCard>
                </div>
            </div>
        </section>
    )
}

interface SocialCardProps {
    platform: string
    icon: React.ComponentType<{ className?: string }>
    color: string
    metric: string
    description: string
    imageUrl: string
}

const SocialCard = ({ platform, icon: Icon, color, metric, description, imageUrl }: SocialCardProps) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className={`h-2 bg-gradient-to-r ${color}`} />
        <CardHeader className="pb-3">
            <div className="flex items-center gap-3 mb-3">
                <Icon className="w-6 h-6" />
                <span className="font-semibold">{platform}</span>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img
                    src={imageUrl}
                    alt={`${platform} content example`}
                    className="w-full h-full object-cover"
                />
            </div>
        </CardHeader>
        <CardContent>
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Growth</span>
                    <span className="font-semibold text-green-600">{metric}</span>
                </div>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </CardContent>
    </Card>
)

const FeatureCard = ({ children, className }: { children: ReactNode; className?: string }) => (
    <Card className={cn('border-2 border-dashed border-muted hover:border-primary/50 transition-colors', className)}>
        {children}
    </Card>
)

const ContentScheduleDemo = () => (
    <div className="space-y-3">
        {[
            { time: '9:00 AM', platform: 'Instagram', content: 'Morning motivation post', status: 'posted' },
            { time: '12:00 PM', platform: 'LinkedIn', content: 'Industry insights article', status: 'scheduled' },
            { time: '3:00 PM', platform: 'Twitter', content: 'Trending topic engagement', status: 'scheduled' },
        ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className={`w-2 h-2 rounded-full ${item.status === 'posted' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">{item.time}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{item.platform}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.content}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                    item.status === 'posted' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                    {item.status}
                </span>
            </div>
        ))}
    </div>
)

const AnalyticsDemo = () => (
    <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
            {[
                { label: 'Reach', value: '45.2K', change: '+12%' },
                { label: 'Engagement', value: '8.9K', change: '+24%' },
                { label: 'Followers', value: '12.3K', change: '+8%' },
                { label: 'Clicks', value: '2.1K', change: '+18%' },
            ].map((stat, i) => (
                <div key={i} className="p-3 bg-muted/30 rounded-lg">
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                    <div className="font-semibold">{stat.value}</div>
                    <div className="text-xs text-green-600">{stat.change}</div>
                </div>
            ))}
        </div>
        <div className="h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-end justify-around p-2">
            {[65, 78, 92, 85, 95, 88, 100].map((height, i) => (
                <div
                    key={i}
                    className="bg-gradient-to-t from-blue-500 to-purple-500 w-4 rounded-t"
                    style={{ height: `${height}%` }}
                />
            ))}
        </div>
    </div>
) 