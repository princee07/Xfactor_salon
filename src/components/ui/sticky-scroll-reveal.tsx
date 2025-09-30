"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/components/lib/utils";

interface ContentItem {
  title: string;
  description: string;
  content?: React.ReactNode;
  actionButton?: React.ReactNode;
}

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: ContentItem[];
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<number>(0);
  const pausedRef = useRef(false);
  const len = content.length || 1;

  useEffect(() => {
    if (active < 0) setActive((s) => (s + len) % len);
    if (active >= len) setActive(0);
  }, [active, len]);

  // Auto advance the active index every few seconds. Pause while hovering or when focused.
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pausedRef.current) {
        setActive((s) => (s + 1) % len);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [len]);

  const prevIndex = (active - 1 + len) % len;
  const nextIndex = (active + 1) % len;

  return (
    <div
      className={cn("w-full bg-black text-white rounded-md py-12 px-6", contentClassName)}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onFocus={() => (pausedRef.current = true)}
      onBlur={() => (pausedRef.current = false)}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: heading + description */}
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-2">
              {content[active]?.title}
            </h3>

            {/* Image moved more left by reducing padding */}
            <div className="flex justify-start -ml-4 md:-ml-6 lg:-ml-10">
              <img
                src="/royal/4.png"
                alt="Service visual"
                className="w-40 md:w-56 lg:w-64 h-auto object-contain rounded-md mb-4"
              />
            </div>

            <p
              className="text-gray-300 max-w-lg leading-relaxed mb-6"
              aria-live="polite"
            >
              {content[active]?.description}
            </p>
            <div className="flex items-center gap-4">
              {content[active]?.actionButton ?? null}
            </div>
          </div>

          {/* Right: three-oval image layout */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative flex items-center gap-6">
              {/* left small oval */}
              <motion.div
                layout
                initial={{ opacity: 0.7, scale: 0.94 }}
                animate={{ opacity: 0.85, scale: 0.96 }}
                className="w-44 h-64 rounded-[40px] overflow-hidden bg-gray-800 ring-1 ring-gray-700"
              >
                {content[prevIndex]?.content}
              </motion.div>

              {/* center large oval */}
              <motion.div
                layout
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1.03 }}
                className="w-56 h-80 rounded-[48px] overflow-hidden border-4 border-[#d4af37] shadow-2xl bg-gray-900"
              >
                {content[active]?.content}
              </motion.div>

              {/* right small oval */}
              <motion.div
                layout
                initial={{ opacity: 0.7, scale: 0.94 }}
                animate={{ opacity: 0.85, scale: 0.96 }}
                className="w-44 h-64 rounded-[40px] overflow-hidden bg-gray-800 ring-1 ring-gray-700"
              >
                {content[nextIndex]?.content}
              </motion.div>

              {/* decorative gold sparkle */}
              <div className="absolute -right-6 -top-6 hidden lg:block">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L13.5 8L20 9.5L13.5 11L12 18L10.5 11L4 9.5L10.5 8L12 2Z"
                    fill="#d4af37"
                  />
                </svg>
              </div>

              {/* dots centered under the middle image */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
                {content.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-3 h-3 rounded-full border-2 ${i === active
                        ? "bg-[#d4af37] border-[#d4af37]"
                        : "bg-transparent border-[#777]"
                      } transition-all`}
                    aria-label={`Go to ${i}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
