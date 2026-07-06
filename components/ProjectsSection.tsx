"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import { IconArrowRight, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

const projects = [
  {
    title: "Telangana Champions League",
    description:
      "Live T20 cricket tournament platform on AWS with Razorpay + Resend - collected Rs. 16L+ and scaled to 45K+ users.",
    livelink: "https://www.tclt20.co.in/",
    image: "/tcl.png",
  },
  {
    title: "JEE College Predictor",
    description:
      "Helps JEE students find colleges based on rank and preferences using real data - quick, personalised results.",
    livelink:
      "https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students",
    image: "/collegepredictor.jpeg",
  },
  {
    title: "PrepLoom",
    description:
      "One-stop prep platform with roadmaps, project ideas, resume tips, and interview resources for students.",
    livelink: "https://preploom.vercel.app/",
    image: "/preploom.png",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-white/5 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
            Projects
          </p>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-0 mb-6 sm:mb-4">
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
              Things I have built
            </h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors duration-150 self-start sm:self-auto"
            >
              View all projects <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <FadeInItem key={project.title}>
              <CardContainer containerClassName="py-8">
                <CardBody className="w-full h-auto bg-white/2 border border-white/8 rounded-2xl p-5 hover:border-white/15 transition-colors duration-200">
                  <CardItem translateZ={60} className="w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </CardItem>

                  <CardItem
                    translateZ={40}
                    className="mt-5 w-full text-lg font-light tracking-tight text-white"
                  >
                    {project.title}
                  </CardItem>

                  <CardItem
                    translateZ={20}
                    className="mt-2 w-full text-sm text-neutral-400 leading-relaxed"
                  >
                    {project.description}
                  </CardItem>

                  <CardItem
                    translateZ={60}
                    as="a"
                    href={project.livelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors duration-150"
                  >
                    <IconExternalLink className="h-3.5 w-3.5" />
                    View Live
                  </CardItem>
                </CardBody>
              </CardContainer>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
