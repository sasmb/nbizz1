"use client";

import { Button } from "@/components/ui/button";
import { 
    AlertTriangle, 
    DollarSign, 
    MessageSquare, 
    Percent,
    CheckCircle,
    ArrowRight 
} from "lucide-react";

export function ReechProblemsSolved() {
    return (
        <section className="py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-6">
                {/* Problems Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        The Problems{" "}
                        <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                            You're Facing
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Business owners are struggling with platform dependency, account risks, and limited revenue options. 
                        Reech solves these critical issues.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="text-center p-6 rounded-2xl border border-red-100 dark:border-red-900/20 bg-red-50/50 dark:bg-red-900/10">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                            <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-red-900 dark:text-red-100">
                            Platform Dependency Risk
                        </h3>
                        <p className="text-red-700 dark:text-red-300">
                            Relying solely on social media means losing everything if your account gets suspended or algorithms change.
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-2xl border border-orange-100 dark:border-orange-900/20 bg-orange-50/50 dark:bg-orange-900/10">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                            <DollarSign className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-orange-900 dark:text-orange-100">
                            Limited Revenue Options
                        </h3>
                        <p className="text-orange-700 dark:text-orange-300">
                            Traditional payment methods are complex and don't integrate well with social media business models.
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 bg-amber-50/50 dark:bg-amber-900/10">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                            <CheckCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-amber-900 dark:text-amber-100">
                            No Professional Presence
                        </h3>
                        <p className="text-amber-700 dark:text-amber-300">
                            Social media profiles look amateur and don't give customers confidence in your business legitimacy.
                        </p>
                    </div>
                </div>

                {/* Revenue Models Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Flexible{" "}
                        <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                            Revenue Models
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Choose the payment model that works best for your business. We offer two options to fit different needs and preferences.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="relative p-8 rounded-2xl border-2 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10 overflow-hidden">
                        <div className="absolute top-4 right-4">
                            <span className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                Subscription
                            </span>
                        </div>
                        
                        <div className="w-12 h-12 mb-6 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                            <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4 text-green-900 dark:text-green-100">
                            WhatsApp Direct Payments
                        </h3>
                        <p className="text-green-700 dark:text-green-300 mb-6">
                            Perfect for businesses that want to receive payments directly through WhatsApp. 
                            Simple monthly subscription with full feature access.
                        </p>
                        
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-green-700 dark:text-green-300">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                                Direct WhatsApp integration
                            </li>
                            <li className="flex items-center text-green-700 dark:text-green-300">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                                Predictable monthly cost
                            </li>
                            <li className="flex items-center text-green-700 dark:text-green-300">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                                Keep 100% of your sales
                            </li>
                        </ul>
                        
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                            Choose Subscription
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>

                    <div className="relative p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10 overflow-hidden">
                        <div className="absolute top-4 right-4">
                            <span className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                Revenue Share
                            </span>
                        </div>
                        
                        <div className="w-12 h-12 mb-6 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <Percent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-100">
                            Platform Commission
                        </h3>
                        <p className="text-blue-700 dark:text-blue-300 mb-6">
                            Great for new businesses or those who prefer performance-based pricing. 
                            We only earn when you earn with a 10% commission on sales.
                        </p>
                        
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-blue-700 dark:text-blue-300">
                                <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                                No upfront costs
                            </li>
                            <li className="flex items-center text-blue-700 dark:text-blue-300">
                                <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                                10% commission on sales
                            </li>
                            <li className="flex items-center text-blue-700 dark:text-blue-300">
                                <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                                Full platform access
                            </li>
                        </ul>
                        
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            Choose Commission
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                        Not sure which model is right for you?
                    </p>
                    <Button variant="outline" size="lg">
                        Schedule a Free Consultation
                    </Button>
                </div>
            </div>
        </section>
    );
} 