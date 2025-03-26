"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { TESTIMONIALS_CARD } from "@/config/testimonials";
import { Card, CardContent } from "@/components/ui/card";

interface InfiniteMovingCardsProps {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const [start, setStart] = React.useState(false);
  const animationRef = React.useRef<any>(null);

  const addAnimation = React.useCallback(() => {
    if (!scrollerRef.current) return;
    const scrollerContent = Array.from(scrollerRef.current.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem);
      }
    });

    getDirection();
    start && addHoverEvents();
    animationRef.current = startAnimation();
  }, [start]);

  React.useEffect(() => {
    const animation = addAnimation();
    
    return () => {
      const current = animationRef.current;
      if (current) {
        current.kill();
      }
    };
  }, [addAnimation]);

  function getDirection() {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  }

  function getSpeed() {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }

  function addHoverEvents() {
    if (containerRef.current) {
      containerRef.current.addEventListener("mouseenter", () => {
        if (pauseOnHover) {
          animationRef.current.pause();
        }
      });
      containerRef.current.addEventListener("mouseleave", () => {
        if (pauseOnHover) {
          animationRef.current.play();
        }
      });
    }
  }

  function startAnimation() {
    if (containerRef.current && scrollerRef.current) {
      getSpeed();
      return containerRef.current.animate(
        {
          transform: [
            `translateX(0)`,
            `translateX(-${scrollerRef.current.scrollWidth}px)`
          ],
        },
        {
          duration: containerRef.current.style.getPropertyValue("--animation-duration"),
          iterations: Infinity,
          fill: "forwards",
        }
      );
    }
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {TESTIMONIALS_CARD.map((item, idx) => (
          <Card
            key={item.name}
            className="w-[350px] max-w-full pt-6 relative rounded-2xl border border-b-0 flex-shrink-0 md:w-[450px]"
          >
            <CardContent>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm font-medium leading-[1.6]">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-muted-foreground">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-muted-foreground">
                    {item.title}
                  </span>
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
