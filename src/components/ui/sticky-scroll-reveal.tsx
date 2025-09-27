"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/components/lib/utils";

const backgroundColors: string[] = [
  "#f8fafc", // slate-50
  "#ffffff", // white
  "#f1f5f9", // slate-100
];

const linearGradients: string[] = [
  "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
  "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
  "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
];

// Define the type for the content prop
interface ContentItem {
  title: string;
  description: string;
  content?: React.ReactNode;
  actionButton?: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
}

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: ContentItem[];
  contentClassName?: string;
}) => {
  // Explicitly type the state variable
  const [activeCard, setActiveCard] = useState<number>(0);
  // Use a more specific type for the ref
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const [backgroundGradient, setBackgroundGradient] = useState<string>(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[36rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 hide-scrollbar"
      ref={ref}
    >
      {/* Main Content */}
      <div className="div relative flex items-start px-4 pl-16">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-black font-playfair"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.95 }}
                className="text-lg mt-10 max-w-sm text-black font-lato"
              >
                {item.description}
              </motion.p>
              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.95 }}
                className="mt-6"
              >
                {item.actionButton}
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="sticky top-1/2 -translate-y-1/2 flex flex-col space-y-4 self-start pl-8">
        {content.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${activeCard === index
              ? "bg-gold border-gold shadow-lg scale-125"
              : "bg-transparent border-gold/50 hover:border-gold"
              }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              const element = ref.current;
              if (element) {
                const targetScroll =
                  (index / (cardLength - 1)) *
                  (element.scrollHeight - element.clientHeight);
                element.scrollTo({
                  top: targetScroll,
                  behavior: "smooth",
                });
              }
            }}
          />
        ))}
      </div>

      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-80 w-96 rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};