"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  heading,
  contentClassName,
}: {
  content: {
    title: React.ReactNode;
    description: React.ReactNode;
    content?: React.ReactNode;
  }[];
  heading?: React.ReactNode;
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const outerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setActiveCard(
      Math.min(content.length - 1, Math.floor(latest * content.length)),
    );
  });

  return (
    // Outer wrapper: creates N × 100vh of scroll space
    <div ref={outerRef} style={{ height: `${(content.length + 1) * 100}vh` }}>
      {/* Sticky inner: stays pinned to top while scrolling through outer */}
      <div className="sticky top-16 h-[calc(100vh-3.5rem)] sm:top-0 sm:h-screen flex flex-col border-t border-white/5 bg-[#09090b]">
        {heading && (
          <div className="max-w-6xl mx-auto w-full px-6 pt-4 pb-4 sm:pt-8 sm:pb-12 shrink-0">
            {heading}
          </div>
        )}

        {/* Active experience - animates when card changes */}
        <div className="sm:flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 min-h-0 pb-4">
          <div className="sm:h-full rounded-2xl border border-white/8 bg-white/2 overflow-hidden">
            <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={cn("sm:h-full flex gap-0", contentClassName)}
            >
              {/* Left: role + features */}
              <div className="flex-1 min-w-0 flex flex-col justify-center px-4 py-5 sm:px-8 sm:py-8 overflow-y-auto">
                {content[activeCard].title}
                <div className="mt-4 sm:mt-5">{content[activeCard].description}</div>
              </div>

              {/* Right: company card */}
              {content[activeCard].content && (
                <div className="hidden lg:flex w-72 shrink-0 border-l border-white/8 flex-col justify-center px-6 py-8">
                  {content[activeCard].content}
                </div>
              )}
            </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer: dots + counter */}
        <div className="max-w-6xl mx-auto w-full px-6 pb-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            {content.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-1 rounded-full transition-all duration-300",
                  activeCard === index
                    ? "w-5 bg-white/50"
                    : "w-1.5 bg-white/15",
                )}
              />
            ))}
          </div>
          <p className="text-xs text-neutral-600 tabular-nums">
            {activeCard + 1} / {content.length}
          </p>
        </div>
      </div>
    </div>
  );
};
