import { Container } from "@/components";
import { buttonVariants } from "@/components/ui/button";
// Remove Clerk imports
// import { UserButton } from "@clerk/nextjs";
// import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import Image from "next/image";

const Navbar = async () => {
  // Remove Clerk user fetching
  // const user = await currentUser(); 

  return (
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
          <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* <ul className="flex items-center justify-center gap-8">

<Link href="/pages/webdev" className="hover:text-foreground/80 text-sm">web Developement</Link>

<Link href="/pages/about" className="hover:text-foreground/80 text-sm">About </Link>

</ul> */}
          </nav>
          <div className="flex items-center gap-4">
            {/* Replace Clerk UserButton with your own login/signup logic */}
            {/* 
            {user ? (
              <UserButton /> 
            ) : (
              <>
                <Link href="/sign-in" className={buttonVariants({ size: "sm", variant: "ghost" })}>
                  Login
                </Link>
                <Link href="/sign-up" className={buttonVariants({ size: "sm", className: "hidden md:flex" })}>
                  Start free trial
                </Link>
              </>
            )}
            */}
            {/* Example: Replace with simple login/signup links */}
            <Link href="https://cal.com/samogb/30min" className={buttonVariants({ size: "sm", className: "hidden md:flex" })}>
              Book a call
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
