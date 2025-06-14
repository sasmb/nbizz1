"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="w-full max-w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Discover NBizz Solutions <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-6 flex-col items-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl max-w-5xl tracking-tighter text-center font-bold leading-tight">
              <span className="text-foreground dark:text-white">Business growth made</span>
              <br />
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-2 h-14 md:h-18 lg:h-20">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl"
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
            </h1>

            <p className="text-base md:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-3xl text-center px-4">
              Transform your business with NBizz's comprehensive suite of AI-powered tools. 
              From website creation to sales automation, content management to marketing campaigns - 
              we've got everything you need to scale your business efficiently.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="gap-4" variant="outline" asChild>
              <a href="https://cal.com/samogb/30min">
                Book a consultation <PhoneCall className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" className="gap-4" asChild>
              <a href="/pricing">
                Get started now <MoveRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero }; 