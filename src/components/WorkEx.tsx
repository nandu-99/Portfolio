"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "webdevelopment intern at CODESOFT",
    description1:
      "Working on Personal Portfolio: Designed and developed a personal portfolio website to showcase projects and skills.",
    description2:
      "Calculator Application: Developed a calculator application with advanced functionalities using JavaScript.",
    description3:
      "Landing Page: Created a captivating landing page with smooth animations and interactive elements.",
    techstack: "HTML, CSS, JAVA-SCRIPT, REACT, NODEJS, NEXTJS",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        webdevelopment intern at CODESOFT
        <br /> APR,24 - Present
      </div>
    ),
  },
  
];

function WorkEx() {
  return (
    <div className="p-10">
      <h1 className="mt-20 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 p-4 text-center">
        Work Experience
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}

export default WorkEx;
