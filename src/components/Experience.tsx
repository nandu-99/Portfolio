"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const experiences = [
  {
    date: "Jan 2025 - June 2025",
    title: "Zuvees",
    role: "Software Development Engineer",
    location: "Bangalore, Karnataka",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQFbyIbRC3kiiw/company-logo_200_200/company-logo_200_200/0/1736242205255/zuvees_logo?e=2147483647&v=beta&t=tbJpcwIixQ2dH2LXnCIgRTnFRqCKV7Zq4_Ama6Ayeng",
    description:
      "A tech-first global e-commerce company backed by prominent VCs, with roots in India. We leverage technology to revolutionise online gifting, a massive global industry valued at over $500 billion.",
    highlights: [
      "First tech team @Zuvees",
      "Built 0-1 solutions",
      "Received Pre-Placement Offer (PPO)",
    ],
    features: [
      "Built and maintained Shopify theme-based storefronts and custom landing pages.",
      "Built internal operations dashboard (ZIST) with role-based access control, multi-marketplace integration, and order & catalog management from scratch.",
      "Implemented Google Tag Manager, custom Shopify pixels, and analytics (GA4, Ads) for tracking and marketing.",
      "Designed normalized database schemas for roles, users, catalog and orders.",
      "Integrated image upload via S3 and ZeptoMail email automation.",
      "Improved website performance, responsiveness, and PWA compliance.",
      "Collaborated cross-functionally during a business trip to Dubai to understand operations, cataloging, and warehouse workflows.",
    ],
    offerLetter:
      "https://drive.google.com/file/d/1sJ1bV84eLV-96WWjDRkzOsECfh9uxlW-/view?usp=drive_link",
    experienceLetter:
      "https://drive.google.com/file/d/1Kd6VFO0YXTSSC_2v0tVsQc_4YDzPCqWU/view?usp=sharing",
  },
  {
    date: "June 2024 - August 2024",
    title: "MoveinSync",
    role: "Frontend Developer",
    location: "Bangalore, Karnataka",
    highlights: ["Interned in my first year"],
    icon: "https://eassets.mosaicdigital.com/uploads/2019/10/250x250-MoveinSync.png",
    description:
      "Series C startup providing B2B employee transportation solutions with 500K+ daily users including employees of Fortune 500 companies.",
    features: [
      "Built dynamic nested forms with conditional rendering, complex validations, and responsive components.",
      "Redeveloped the employee profile section from scratch, including 30+ fields, to enhance employee safety and compliance measures.",
      "Created a new view tab displaying different types of meetings, with data fetched from multiple APIs across organisations.",
    ],
    offerLetter:
      "https://drive.google.com/file/d/17cvd4mRRONSjnTUokAhr2ASY5Qnxewfd/view?usp=sharing",
    experienceLetter:
      "https://drive.google.com/file/d/1zpGU_jz8DeXdgPvweqdQec1ce-RznoIX/view?usp=sharing",
  },
];

const InternshipExperienceCard = () => {
  return (
    <div className="space-y-8">
      <div className="relative flex items-start gap-6">
        <div className="absolute top-0 left-8 bottom-0 w-[2px] bg-dashed bg-neutral-700"></div>

        <div className="flex flex-col items-center gap-[960px] lg:gap-[600px] xl:gap-[400px] mt-6">
          {experiences.map((experience, index) => (
            <Avatar key={index} className="w-16 h-16 bg-white border">
              <AvatarImage src={experience.icon} alt={experience.title} />
              <AvatarFallback>{experience.title[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>

        <div className="flex-1">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="py-4 border-b border-dashed border-neutral-700"
            >
              <p className="text-sm text-neutral-500">{experience.date}</p>
              <h2 className="text-xl font-bold text-white">
                {experience.title}{" "}
                <span className="text-sm font-normal text-neutral-400">
                  {" "}
                  - ({experience.role})
                </span>
              </h2>
              <p className="text-base text-neutral-400">
                {experience.location}
              </p>
              {experience.highlights && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {experience.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-cyan-800 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
              <h3 className="text-md font-semibold text-neutral-300 mt-5">
                Description
              </h3>
              <p className="text-base text-neutral-400 mt-1">
                {experience.description}
              </p>
              {experience.features.length > 0 && (
                <div className="mt-2">
                  <h3 className="text-md font-semibold text-neutral-300">
                    Features Worked on
                  </h3>
                  <ul className="text-sm text-neutral-500 list-inside list-disc">
                    {experience.features.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-4 flex flex-col md:flex-row gap-4">
                <a
                  href={experience.offerLetter}
                  target="_blank"
                  className="text-sm text-blue-500"
                >
                  View Offer Letter
                </a>
                {experience.experienceLetter && (
                  <a
                    href={experience.experienceLetter}
                    target="_blank"
                    className="text-sm text-blue-500"
                  >
                    View Experience Letter
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipExperienceCard;
