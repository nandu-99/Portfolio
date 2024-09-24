"use client";
import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const InternshipExperienceCard = () => {
  return (
    <CardSpotlight radius={200} color="#262627">
      <div className="text-white relative z-20">
        <h1 className="text-sm md:text-3xl text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          Frontend Developer Intern at MoveInSync (Jun 2024 - Aug 2024)
        </h1>
        <br />
        <div>
          <p className="text-neutral-500 my-2 text-sm text-left">
            During my two-month internship at MoveInSync, I had the opportunity
            to work on various projects, gaining hands-on experience in frontend
            development with Angular. My key contributions included:
          </p>
          <div className="pl-4 mt-2 text-neutral-500">
            - Angular Development: Designed and implemented dynamic, responsive components and forms with Angular,
             utilizing advanced techniques like async data handling, complex validations, and real-time UI updates.
            <br />
            - API Integration for Real-Time Features: Integrated APIs to develop real-time meeting management,
             streamlining the display of upcoming events and improving user engagement.
            <br />
            - Full Profile Redesign: Led a comprehensive redesign of employee profiles, enhancing UX with new 
            edit/view modes and optimizing multiple sections (personal info, settings, history).
            <br />
            - Efficient Form Data Processing: Managed and optimized multi-form data flows, ensuring 
            efficient payload handling and dynamic rendering for faster, smoother user interactions.
          </div>
        </div>
      </div>
    </CardSpotlight>
  );
};

export default InternshipExperienceCard;
