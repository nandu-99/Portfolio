"use client";

import { useState, useLayoutEffect } from "react";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";

const loadingStates = [
  { text: "Initializing..." },
  { text: "Loading experience..." },
  { text: "Preparing projects..." },
  { text: "Rendering portfolio..." },
  { text: "Finalizing..." },
  { text: "Welcome." },
];

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean | null>(null);
  // Mask covers SSR content during the pre-hydration gap (before JS runs)
  const [maskVisible, setMaskVisible] = useState(true);

  useLayoutEffect(() => {
    // Both updates batch into one re-render before the browser paints
    setMaskVisible(false);
    setLoading(!sessionStorage.getItem("preloader_seen"));
  }, []);

  const handleComplete = () => {
    setTimeout(() => {
      sessionStorage.setItem("preloader_seen", "1");
      setLoading(false);
    }, 800);
  };

  return (
    <>
      {maskVisible && (
        <div style={{ position: "fixed", inset: 0, zIndex: 50, background: "#09090b" }} />
      )}
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={loading === true}
        duration={900}
        loop={false}
        onComplete={handleComplete}
      />
      {children}
    </>
  );
}
