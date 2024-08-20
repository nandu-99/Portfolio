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
            - Redesigning the employee profile section, enhancing both the user
            interface and experience.
            <br />
            - Developing a component to display upcoming meetings, integrating
            API data for a seamless view.
            <br />
            - Working on a major client project for PWC, which involved complex
            form handling, validations, and dynamic rendering.
            <br />
            - Enhancing the billing section with advanced form management and
            data handling for PWC clients.
            <br />- Addressing various bug fixes to improve overall project
            stability and performance.
          </div>
        </div>
      </div>
    </CardSpotlight>
  );
};

export default InternshipExperienceCard;
