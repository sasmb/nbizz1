'use client'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Bot, Brain, Zap, BarChart3, MessageSquare, Workflow, Clock, Users } from 'lucide-react'
import { ReactNode, useState } from 'react'

export function AIAutomationFeatures() {
    const [activeTab, setActiveTab] = useState('chatbots')

    return (
        <section className="py-16 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Automation for Businesses</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Implement AI-driven automation solutions to streamline processes, enhance customer experience, and optimize workflows.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 mb-12">
                    <AutomationCard
                        icon={Bot}
                        title="AI Chatbots"
                        description="Intelligent customer service automation"
                        features={['24/7 Customer Support', 'Natural Language Processing', 'Multi-language Support', 'CRM Integration']}
                        color="from-blue-500 to-cyan-500"
                    />
                    
                    <AutomationCard
                        icon={Brain}
                        title="Data Analysis"
                        description="Automated insights and reporting"
                        features={['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization']}
                        color="from-purple-500 to-pink-500"
                    />
                    
                    <AutomationCard
                        icon={Workflow}
                        title="Workflow Automation"
                        description="Streamline business processes"
                        features={['Task Automation', 'Process Optimization', 'Integration APIs', 'Custom Workflows']}
                        color="from-green-500 to-emerald-500"
                    />
                    
                    <AutomationCard
                        icon={BarChart3}
                        title="Performance Monitoring"
                        description="AI-powered business intelligence"
                        features={['KPI Tracking', 'Anomaly Detection', 'Trend Analysis', 'Alert Systems']}
                        color="from-orange-500 to-red-500"
                    />
                </div>

                <Card className="p-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-4">Interactive AI Solutions</h3>
                        <div className="flex justify-center gap-2 mb-6">
                            {[
                                { id: 'chatbots', label: 'Chatbots', icon: MessageSquare },
                                { id: 'analytics', label: 'Analytics', icon: BarChart3 },
                                { id: 'automation', label: 'Automation', icon: Zap },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={cn(
                                        'flex items-center gap-2 px-4 py-2 rounded-lg transition-colors',
                                        activeTab === tab.id
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-muted hover:bg-muted/80'
                                    )}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            {activeTab === 'chatbots' && <ChatbotDemo />}
                            {activeTab === 'analytics' && <AnalyticsDemo />}
                            {activeTab === 'automation' && <AutomationDemo />}
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold">Key Benefits</h4>
                            {activeTab === 'chatbots' && (
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-green-500" />
                                        Reduce response time by 90%
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-blue-500" />
                                        Handle 1000+ inquiries simultaneously
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-purple-500" />
                                        85% customer satisfaction rate
                                    </li>
                                </ul>
                            )}
                            {activeTab === 'analytics' && (
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <BarChart3 className="w-4 h-4 text-green-500" />
                                        70% faster decision making
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Brain className="w-4 h-4 text-blue-500" />
                                        Predict trends with 95% accuracy
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-purple-500" />
                                        Real-time data processing
                                    </li>
                                </ul>
                            )}
                            {activeTab === 'automation' && (
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-green-500" />
                                        Save 40+ hours per week
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Workflow className="w-4 h-4 text-blue-500" />
                                        99.9% process accuracy
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-purple-500" />
                                        Reduce operational costs by 60%
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}

interface AutomationCardProps {
    icon: React.ComponentType<{ className?: string }>
    title: string
    description: string
    features: string[]
    color: string
}

const AutomationCard = ({ icon: Icon, title, description, features, color }: AutomationCardProps) => (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
        <CardHeader>
            <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${color} text-white`}>
                    <Icon className="w-8 h-8" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <ul className="space-y-2">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`} />
                        {feature}
                    </li>
                ))}
            </ul>
        </CardContent>
    </Card>
)

const ChatbotDemo = () => (
    <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
        <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                AI
            </div>
            <div className="flex-1 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                <p className="text-sm">Hello! How can I help you today?</p>
            </div>
        </div>
        <div className="flex items-start gap-3 justify-end">
            <div className="flex-1 bg-blue-500 text-white p-3 rounded-lg shadow-sm max-w-xs">
                <p className="text-sm">I need help with my order</p>
            </div>
            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm">
                U
            </div>
        </div>
        <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                AI
            </div>
            <div className="flex-1 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                <p className="text-sm">I&apos;d be happy to help! Could you provide your order number?</p>
            </div>
        </div>
    </div>
)

const AnalyticsDemo = () => (
    <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
        <div className="grid grid-cols-2 gap-4">
            {[
                { label: 'Revenue', value: '$125.4K', change: '+15%', positive: true },
                { label: 'Conversion', value: '12.8%', change: '+3.2%', positive: true },
                { label: 'Traffic', value: '89.2K', change: '-2.1%', positive: false },
                { label: 'Engagement', value: '94.7%', change: '+8.5%', positive: true },
            ].map((metric, i) => (
                <div key={i} className="p-3 bg-white dark:bg-slate-800 rounded-lg">
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                    <div className="font-semibold">{metric.value}</div>
                    <div className={`text-xs ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                        {metric.change}
                    </div>
                </div>
            ))}
        </div>
        <div className="h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-end justify-around p-3">
            {[40, 65, 45, 78, 92, 85, 95].map((height, i) => (
                <div
                    key={i}
                    className="bg-gradient-to-t from-blue-500 to-purple-500 w-6 rounded-t"
                    style={{ height: `${height}%` }}
                />
            ))}
        </div>
    </div>
)

const AutomationDemo = () => (
    <div className="space-y-3 p-4 bg-muted/30 rounded-lg">
        {[
            { step: 1, action: 'Lead captured from website', status: 'completed', time: '2 min ago' },
            { step: 2, action: 'Email sequence triggered', status: 'completed', time: '1 min ago' },
            { step: 3, action: 'CRM contact created', status: 'in-progress', time: 'Now' },
            { step: 4, action: 'Follow-up task assigned', status: 'pending', time: 'Queued' },
        ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    item.status === 'completed' ? 'bg-green-500 text-white' :
                    item.status === 'in-progress' ? 'bg-blue-500 text-white animate-pulse' :
                    'bg-gray-300 text-gray-600'
                }`}>
                    {item.step}
                </div>
                <div className="flex-1">
                    <div className="text-sm font-medium">{item.action}</div>
                    <div className="text-xs text-muted-foreground">{item.time}</div>
                </div>
                <div className={`w-2 h-2 rounded-full ${
                    item.status === 'completed' ? 'bg-green-500' :
                    item.status === 'in-progress' ? 'bg-blue-500 animate-pulse' :
                    'bg-gray-300'
                }`} />
            </div>
        ))}
    </div>
) 