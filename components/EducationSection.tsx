"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FadeIn } from "@/components/ui/FadeIn";

const education = [
  {
    period: "2023 - 2027",
    degree: "Bachelor of Technology",
    field: "Computer Science and AI",
    institution: "Newton School of Technology, Rishihood University",
    score: "9.58 / 10.0",
  },
  {
    period: "2020 - 2022",
    degree: "Intermediate",
    field: "Class XII",
    institution: "Little Flower Junior College",
    score: "89.3%",
  },
  {
    period: "2020",
    degree: "Matriculation",
    field: "Class X",
    institution: "Word and Deed High School",
    score: "10.0 / 10.0",
  },
];

const items = education.map((edu) => ({
  title: (
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs text-neutral-500 tabular-nums">{edu.period}</span>
        <span className="text-xs px-2.5 py-1 rounded-full bg-white/6 border border-white/10 text-neutral-300 tabular-nums">
          {edu.score}
        </span>
      </div>
      <p className="text-xl font-light tracking-tight text-white leading-snug">
        {edu.degree}
        <span className="text-neutral-400"> ({edu.field})</span>
      </p>
    </div>
  ),
  description: edu.institution,
}));

export default function EducationSection() {
  return (
    <section id="education" className="border-t border-white/5 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Education</p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">Where I studied</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <HoverEffect items={items} className="py-0 mt-8 sm:mt-12" />
        </FadeIn>
      </div>
    </section>
  );
}
