"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { FadeIn } from "@/components/ui/FadeIn";

const experiences = [
  {
    date: "April 2026 - May 2026 · 2 mos",
    company: "Emergent",
    role: "AI Agent Reliability Engineer",
    location: "Bangalore, India",
    icon: "https://images.contentstack.io/v3/assets/blt7151619cb9560896/blte8c6a91d404704fc/693813a87d6ae46ea65b8933/Emergent-Labs-logo.png",
    description:
      "Agentic AI platform that turns natural-language prompts into fully functional full-stack applications.",
    highlights: ["Improved agent reliability", "Onboarded multiple companies"],
    features: [
      "Debugged user codebases across multiple stacks, fixing AI-agent-introduced bugs to restore functionality.",
      "Resolved Emergent platform issues and contributed backend fixes, improving agent reliability and overall stability.",
      "Vibe-coded full-stack apps and onboarded multiple companies by translating user problems into working solutions.",
    ],
  },
  {
    date: "July 2025 - Dec 2025 · 6 mos",
    company: "Zuvees",
    role: "Tech + Growth Developer",
    location: "Bangalore, India",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQFbyIbRC3kiiw/company-logo_200_200/company-logo_200_200/0/1736242205255/zuvees_logo?e=2147483647&v=beta&t=tbJpcwIixQ2dH2LXnCIgRTnFRqCKV7Zq4_Ama6Ayeng",
    description:
      "A tech-first global e-commerce company backed by prominent VCs, with roots in India.",
    highlights: ["Reduced CAC by 40%", "Purchase accuracy 60% to 90%"],
    features: [
      "Optimized GTM, GA4, and Google Ads tracking across 15+ conversion and engagement events.",
      "Implemented server-side tracking to improve attribution accuracy and data reliability.",
      "Designed dynamic order forms to increase checkout completion rates.",
      "Built automated email flows for retention, abandoned carts, and lifecycle marketing.",
      "Improved campaign performance and customer acquisition efficiency using analytics insights.",
    ],
  },
  {
    date: "Jan 2025 - June 2025 · 6 mos",
    company: "Zuvees",
    role: "Software Development Engineer",
    location: "Bangalore, India",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQFbyIbRC3kiiw/company-logo_200_200/company-logo_200_200/0/1736242205255/zuvees_logo?e=2147483647&v=beta&t=tbJpcwIixQ2dH2LXnCIgRTnFRqCKV7Zq4_Ama6Ayeng",
    description:
      "Core engineering team member building 0-to-1 systems, scalable storefronts, and internal operations tools.",
    highlights: [
      "First Tech Team Member",
      "Built 0-to-1 internal systems",
      "Pre-Placement Offer (PPO)",
    ],
    mobileLimit: 4,
    // features: [
    //   "Built customizable Shopify storefronts and landing pages, improving mobile performance from 40% to 85%.",
    //   "Developed ZIST admin dashboard with role-based access control and multi-marketplace integration.",
    //   "Reduced order tracking inefficiencies by 40% through centralized operations tooling.",
    //   "Implemented React Checkout UI Extension for optimized checkout customization.",
    //   "Designed normalized database schemas for catalog, roles, and order management.",
    //   "Integrated S3-based image uploads and email automation systems.",
    //   "Mentored interns on NPS module and delivery tracking app development.",
    // ],
    features: [
      "Built Shopify storefronts and landing pages, improving mobile performance from 40% to 85%.",
      "Developed the ZIST admin dashboard with role-based access and support for multiple marketplaces.",
      "Built a React Checkout UI Extension and improved order management, reducing tracking time by 40%.",
      "Designed database schemas, integrated S3 image uploads and email automation, and mentored interns on internal projects.",
    ],
  },
  {
    date: "June 2024 - Aug 2024 · 3 mos",
    company: "MoveinSync",
    role: "Frontend Developer",
    location: "Bangalore, India",
    icon: "https://eassets.mosaicdigital.com/uploads/2019/10/250x250-MoveinSync.png",
    description:
      "Series C startup providing B2B employee transportation solutions with 500K+ daily users including Fortune 500 companies.",
    highlights: ["First-year internship"],
    features: [
      "Built dynamic nested forms with conditional rendering, complex validations, and responsive components.",
      "Redeveloped the employee profile section from scratch, including 30+ fields, to enhance safety and compliance.",
      "Created a new view tab displaying different meeting types, with data fetched from multiple APIs across organisations.",
    ],
  },
];

const content = experiences.map((exp) => ({
  title: (
    <div>
      <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
        {exp.role}
      </h3>
      <div className="flex items-center gap-2 mt-1">
        <div className="h-5 w-5 rounded overflow-hidden bg-white flex items-center justify-center shrink-0 p-0.5 lg:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={exp.icon} alt={exp.company} className="h-full w-full object-contain" />
        </div>
        <p className="text-sm sm:text-lg text-neutral-400">{exp.company}</p>
        <span className="text-neutral-600 text-xs lg:hidden">·</span>
        <p className="text-xs text-neutral-500 lg:hidden">{exp.date}</p>
      </div>
    </div>
  ),
  description: (
    <div className="flex flex-col gap-4 sm:gap-5">
      <div className="flex flex-wrap gap-2">
        {exp.highlights.map((h, i) => (
          <span
            key={i}
            className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/4 text-neutral-400"
          >
            {h}
          </span>
        ))}
      </div>
      <ul className="space-y-2 sm:space-y-3">
        {exp.features.map((feature, i) => (
          <li
            key={i}
            className={`flex gap-3 text-sm sm:text-base text-neutral-400 leading-relaxed${exp.mobileLimit && i >= exp.mobileLimit ? " hidden sm:flex" : ""}`}
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  ),
  content: (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg overflow-hidden bg-white flex items-center justify-center shrink-0 p-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={exp.icon}
            alt={exp.company}
            className="h-full w-full object-contain"
          />
        </div>
        <p className="text-base font-semibold text-white">{exp.company}</p>
      </div>
      <p className="text-sm text-neutral-400 leading-relaxed">
        {exp.description}
      </p>
      <div className="mt-auto pt-2 border-t border-white/6 flex flex-col gap-1">
        <p className="text-xs text-neutral-500">{exp.date}</p>
        <p className="text-xs text-neutral-600">{exp.location}</p>
      </div>
    </div>
  ),
}));

const heading = (
  <FadeIn>
    <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
      Experience
    </p>
    <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
      Where I have worked
    </h2>
  </FadeIn>
);

export default function ExperienceSection() {
  return (
    <div id="experience">
      <StickyScroll content={content} heading={heading} />
    </div>
  );
}
