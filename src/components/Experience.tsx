"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const experiences = [
  {
    date: "July 2025 - Present",
    title: "Zuvees",
    role: "Tech + Growth Marketing Intern",
    location: "Remote",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQFbyIbRC3kiiw/company-logo_200_200/company-logo_200_200/0/1736242205255/zuvees_logo?e=2147483647&v=beta&t=tbJpcwIixQ2dH2LXnCIgRTnFRqCKV7Zq4_Ama6Ayeng",
    description:
      "A tech-first global e-commerce company backed by prominent VCs, with roots in India. We leverage technology to revolutionise online gifting, a massive global industry valued at over $500 billion.",
    highlights: [
      "✨ Current",
      // "Optimized payment gateway integration",
    ],
    features: [
      // "Developed a recommendation engine for personalized gifting.",
      // "Integrated third-party payment APIs for seamless transactions.",
      // "Enhanced SEO performance for product pages.",
    ],
    offerLetter:
      "https://drive.google.com/file/d/1VyR-qdlR2IqpgJRsIOWotQogGuwfMmHd/view?usp=sharing",
    experienceLetter:
      "",
  },
  {
    date: "Jan 2025 - June 2025 · 6mos",
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
    date: "June 2024 - August 2024 · 3mos",
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

// Group experiences by company title
const groupedExperiences = experiences.reduce((acc:any, curr) => {
  const { title, icon, description, ...rest } = curr;
  if (!acc[title]) {
    acc[title] = { title, icon, description, experiences: [] };
  }
  acc[title].experiences.push(rest);
  return acc;
}, {});

const InternshipExperienceCard = () => {
  const companies = Object.values(groupedExperiences);

  return (
    <div className="space-y-12 relative">
      {/* Vertical dashed line connecting logos */}
      {companies.length > 1 && (
        <div className="absolute top-16 left-8 bottom-16 w-[2px] bg-dashed bg-neutral-700"></div>
      )}
      {companies.map((company:any, index) => (
        <div key={index} className="relative border-b border-dashed border-neutral-700 pb-8">
          {/* Company Details */}
          <div className="flex items-start gap-6">
            <Avatar className="w-16 h-16 bg-white border z-10">
              <AvatarImage src={company.icon} alt={company.title} />
              <AvatarFallback>{company.title[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white">{company.title}</h2>
              <p className="text-base text-neutral-400 mt-1">{company.description}</p>
            </div>
          </div>

          {/* Experience Details */}
          <div className="mt-6 ml-24 space-y-8">
            {company.experiences.map((exp:any, expIndex:any) => (
              <div
                key={expIndex}
                className={expIndex !== company.experiences.length - 1 ? "border-b pb-4 border-dashed border-neutral-700" : ""}
              >
                <p className="text-sm text-neutral-500">{exp.date}</p>
                <h3 className="text-lg font-semibold text-white">
                  {exp.role} <span className="text-sm font-normal text-neutral-400"> - {exp.location}</span>
                </h3>
                {exp.highlights && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.highlights.map((highlight:any, idx:any) => (
                      <span
                        key={idx}
                        className="inline-block bg-cyan-800 text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
                {exp.features.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-neutral-300">Features Worked on</h4>
                    <ul className="text-sm text-neutral-500 list-inside list-disc mt-1">
                      {exp.features.map((point:any, idx:any) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-4 flex flex-col md:flex-row gap-4">
                  <a
                    href={exp.offerLetter}
                    target="_blank"
                    className="text-sm text-blue-500"
                  >
                    View Offer Letter
                  </a>
                  {exp.experienceLetter && (
                    <a
                      href={exp.experienceLetter}
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
      ))}
    </div>
  );
};

export default InternshipExperienceCard;
