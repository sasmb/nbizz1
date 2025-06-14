import { Container } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import { NBizzNavbar } from "@/components/ui/nbizz-navbar";
import Link from "next/link";
import Image from "next/image";

const Navbar = async () => {
  return (
    <>
      {/* Main Header */}
      <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
        <Container reverse>
          <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
            <div className="flex items-start">
              <Link href="/" className="flex items-center gap-2">
                <Image 
                  src="/assets/logos.png"
                  alt="NBizz Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-lg font-medium">NBizz</span>
              </Link>
            </div>
            
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <ul className="flex items-center justify-center gap-8">
                <li>
                  <Link href="/services" className="hover:text-foreground/80 text-sm font-medium">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="hover:text-foreground/80 text-sm font-medium">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-foreground/80 text-sm font-medium">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-foreground/80 text-sm font-medium">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="flex items-center gap-4">
              <Link 
                href="/contact" 
                className={buttonVariants({ size: "sm", variant: "ghost", className: "hidden md:flex" })}
              >
                Contact
              </Link>
              <Link 
                href="https://cal.com/samogb/30min" 
                className={buttonVariants({ size: "sm", className: "hidden md:flex" })}
              >
                Book a call
              </Link>
            </div>
          </div>
        </Container>
      </header>
      
      {/* Floating Navigation Menu */}
      <NBizzNavbar />
    </>
  );
};

export default Navbar;
