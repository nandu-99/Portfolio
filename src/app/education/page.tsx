"use client";
import React from "react";
import BackgroundBeams from "@/components/Beams";
import InternshipExperienceCard from "@/components/Experience";
import EducationPage from "@/components/Education";

function Page() {
  return (
    <div
      className="min-h-screen bg-black py-12 pt-36"
      suppressHydrationWarning={true}
    >
      <div>
        <BackgroundBeams />
      </div>
      <div className="relative">
        <div className="px-10 md:px-60 relative z-10">
          <EducationPage />
        </div>
      </div>
    </div>
  );
}

export default Page;
