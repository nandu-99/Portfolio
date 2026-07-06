import React from "react";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

function BentoCard({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`rounded-2xl bg-white/2 border border-white/7 hover:border-white/20 hover:bg-white/5 transition-colors duration-200 p-6 ${className}`}>
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
      {children}
    </p>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-white/5 px-6 py-16 sm:py-24 max-w-6xl mx-auto w-full">
      <FadeIn>
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">About</p>
        <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-8 sm:mb-12">Who I am</h2>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Photo - spans 2 rows */}
        <FadeInItem className="md:row-span-2 rounded-2xl border border-white/7 overflow-hidden min-h-75">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/vivekananda.jpeg"
            alt="Pottabathini Vivekananda"
            className="w-full h-full object-cover object-top"
          />
        </FadeInItem>

        {/* Intro */}
        <FadeInItem className="md:col-span-2">
          <BentoCard>
            <Label>Intro</Label>
            <p className="text-neutral-300 text-base leading-relaxed">
              Final-year B.Tech student at Newton School of Technology, Rishihood University.
              I have worked across frontend, backend, growth, and AI reliability - always in startup
              environments where ownership means everything. Give me a blank canvas and I will ship something real.
            </p>
          </BentoCard>
        </FadeInItem>

        {/* Cricket */}
        <FadeInItem>
          <BentoCard>
            <Label>Cricket</Label>
            <p className="text-neutral-300 text-base leading-relaxed">
              Played competitively since 8th grade. Represented clubs across India and Sri Lanka.
              The discipline it built still shapes how I work today.
            </p>
          </BentoCard>
        </FadeInItem>

        {/* What drives me */}
        <FadeInItem>
          <BentoCard>
            <Label>What drives me</Label>
            <p className="text-neutral-300 text-base leading-relaxed">
              I thrive in startups where ownership is real and impact is immediate.
              Long-term, I want to start something meaningful of my own.
            </p>
          </BentoCard>
        </FadeInItem>

      </FadeInStagger>
    </section>
  );
}
