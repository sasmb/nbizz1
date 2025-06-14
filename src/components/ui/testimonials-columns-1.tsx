"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          y: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

// NBizz testimonials data
export const testimonials = [
  {
    text: "NBizz transformed our e-commerce operations completely. The AI automation and seamless integrations boosted our sales by 300% in just 3 months.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    name: "Sarah Chen",
    role: "E-commerce Director",
  },
  {
    text: "The website creation process was incredibly smooth. NBizz delivered a professional site with payment integration in just 2 days. Outstanding service!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Michael Rodriguez",
    role: "Small Business Owner",
  },
  {
    text: "NBizz's AI sales automation has revolutionized our lead generation. We're now capturing 5x more qualified leads with minimal manual effort.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Emily Johnson",
    role: "Marketing Manager",
  },
  {
    text: "The content creation and social media automation from NBizz saved us 20 hours per week. Our engagement rates have never been higher.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "David Kim",
    role: "Digital Marketing Lead",
  },
  {
    text: "NBizz's comprehensive business solutions helped us scale from startup to 7-figures. The support team is exceptional and always available.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Lisa Thompson",
    role: "CEO, TechStart Inc",
  },
  {
    text: "The lifetime access deal was incredible value. NBizz continues to add new features and improvements that keep our business ahead of competitors.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "James Wilson",
    role: "Operations Manager",
  },
  {
    text: "NBizz's white-label solution allowed us to offer premium services to our clients. It's been a game-changer for our agency's growth.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    name: "Maria Garcia",
    role: "Agency Founder",
  },
  {
    text: "The analytics and reporting features give us insights we never had before. NBizz helped us optimize our entire sales funnel effectively.",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    name: "Alex Turner",
    role: "Growth Strategist",
  },
  {
    text: "From website to payment processing to customer management - NBizz is truly an all-in-one solution. Best investment we've made for our business.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Rachel Adams",
    role: "Business Development",
  },
]; 