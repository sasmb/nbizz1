import { Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="w-full bg-background/80 backdrop-blur-md border-t border-border">
            <div className="mx-auto max-w-6xl px-6 py-12 md:py-16 lg:px-8 relative">
                <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
                <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

                <div className="grid gap-8 xl:grid-cols-3 xl:gap-12">
                    {/* Logo and Description Section */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center gap-2">
                            <Image 
                                src="/assets/logos.png"
                                alt="NBizz Logo"
                                width={28}
                                height={28}
                                className="w-7 h-7"
                            />
                            <span className="text-lg font-medium">NBizz</span>
                        </div>
                        <p className="text-muted-foreground text-sm max-w-[200px]">
                            Empowering sales teams with intelligent automation and engagement
                        </p>
                        <span className="text-muted-foreground text-sm flex items-center">
                            Nbizz in partnership with 
                            <Heart className="w-3.5 h-3.5 ml-1 fill-primary text-primary" />
                        </span>
                    </div>

                    {/* Links Sections */}
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        {/* Platforms Section */}
                        <div className="flex flex-col space-y-4">
                            <h3 className="text-base font-medium text-foreground">
                                Platforms
                            </h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li>
                                    <Link href="https://www.facebook.com/profile.php?id=61556311485728" className="hover:text-foreground transition-all duration-300">
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://x.com/dreamswerver" className="hover:text-foreground transition-all duration-300">
                                        X
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/nexusbizzdotcom/" className="hover:text-foreground transition-all duration-300">
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.linkedin.com/in/samuel-ogbonna-sohae/" className="hover:text-foreground transition-all duration-300">
                                        LinkedIn
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.youtube.com/@samogb" className="hover:text-foreground transition-all duration-300">
                                        Youtube
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Company Section */}
                        <div className="flex flex-col space-y-4">
                            <h3 className="text-base font-medium text-foreground">
                                Company
                            </h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li>
                                    <Link href="/about" className="hover:text-foreground transition-all duration-300">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/support" className="hover:text-foreground transition-all duration-300">
                                        Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        &copy; {new Date().getFullYear()} Nexusbizz LLC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
