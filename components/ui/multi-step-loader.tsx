"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";

type LoadingState = {
  text: string;
};

const LoaderCore = ({
  loadingStates,
  value = 0,
}: {
  loadingStates: LoadingState[];
  value?: number;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <AnimatePresence mode="popLayout">
        {loadingStates.map((loadingState, index) => {
          const diff = index - value;

          // Only render: active + up to 2 completed above. Hide everything else.
          if (diff > 0 || diff < -2) return null;

          const isActive = diff === 0;
          const opacity = diff === 0 ? 1 : diff === -1 ? 0.4 : 0.15;

          return (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-baseline gap-3 font-mono text-xl tracking-wide"
            >
              <span className={cn("select-none w-5 shrink-0", isActive ? "text-white" : "text-neutral-500")}>
                {isActive ? ">" : "✓"}
              </span>
              <span className={cn(isActive ? "text-white" : "text-neutral-500")}>
                {loadingState.text}
                {isActive && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                    className="inline-block ml-1 text-white"
                  >
                    █
                  </motion.span>
                )}
              </span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export const MultiStepLoader = ({
  loadingStates,
  loading,
  duration = 400,
  loop = false,
  onComplete,
}: {
  loadingStates: LoadingState[];
  loading?: boolean;
  duration?: number;
  loop?: boolean;
  onComplete?: () => void;
}) => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    if (!loading) {
      setCurrentState(0);
      return;
    }
    if (currentState === loadingStates.length - 1) {
      onComplete?.();
      return;
    }
    const timeout = setTimeout(() => {
      setCurrentState((prev) =>
        loop
          ? prev === loadingStates.length - 1 ? 0 : prev + 1
          : Math.min(prev + 1, loadingStates.length - 1)
      );
    }, duration);

    return () => clearTimeout(timeout);
  }, [currentState, loading, loop, loadingStates.length, duration, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 1 }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-100 flex items-center justify-center backdrop-blur-2xl bg-black/50"
        >
          <div className="w-full max-w-xl px-10 md:px-16">
            <LoaderCore value={currentState} loadingStates={loadingStates} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
