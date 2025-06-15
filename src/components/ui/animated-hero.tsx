"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["powerful", "intelligent", "automated", "efficient", "scalable"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full max-w-full overflow-hidden bg-gradient-to-b from-background to-muted/20 pt-28 lg:pt-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex gap-6 py-12 sm:py-16 lg:py-24 items-center justify-center flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button 
              variant="secondary" 
              size="sm" 
              className="gap-2 sm:gap-4 text-sm sm:text-base hover:scale-105 transition-transform" 
              asChild
            >
              <Link href="/solutions">
                Discover NBizz Solutions <MoveRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </Button>
          </motion.div>
          <div className="flex gap-4 sm:gap-6 flex-col items-center">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-5xl tracking-tight text-center font-bold leading-[1.15]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-foreground dark:text-white">Business growth made</span>
              <br />
              <span className="relative flex w-full justify-center overflow-hidden text-center h-14 sm:h-16 md:h-20 lg:h-24">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p 
              className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-3xl text-center px-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Transform your business with NBizz&apos;s comprehensive suite of AI-powered tools. 
              From website creation to sales automation, content management to marketing campaigns - 
              we&apos;ve got everything you need to scale your business efficiently.
            </motion.p>
          </div>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto max-w-md mx-auto sm:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="gap-2 sm:gap-4 text-base font-medium w-full sm:w-auto hover:scale-105 transition-transform shadow-lg" 
              variant="outline" 
              asChild
            >
              <Link href="https://cal.com/samogb/30min">
                Book a consultation <PhoneCall className="w-4 h-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              className="gap-2 sm:gap-4 text-base font-medium w-full sm:w-auto hover:scale-105 transition-transform shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
              asChild
            >
              <Link href="/pricing">
                Get started now <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { Hero }; 