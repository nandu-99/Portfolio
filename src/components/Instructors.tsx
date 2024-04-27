"use client";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import React from "../../public/techstack/React.png";
import { Spotlight } from "./ui/Spotlight";


const instructors = [
  {
    id: 1,
    name: "HTML",
    designation:"string",
    image: "/techstack/html.png",
  },
  {
    id: 2,
    name: "CSS",
    designation:"string",
    image: "/techstack/CSS3.jpg",

  },
  {
    id: 3,
    name: "Javascript",
    designation:"string",
    image: "/techstack/js.png",
  },
  {
    id: 4,
    name: "React.js",
    designation:"string",
    image: "/techstack/React.png",
  },
  {
    id: 5,
    name: "Python",
    designation:"string",
    image: "/techstack/python.png",
  },
  {
    id: 6,
    name: "Java",
    designation:"string",
    image: "/techstack/java.png",
  },
  {
    id: 7,
    name: "BootStrap",
    designation:"string",
    image: "/techstack/bootstrap.png",
  },
  {
    id: 8,
    name: "Git",
    designation:"string",
    image: "/techstack/git.png",
  }
];

function Instructors() {
  return (
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="cyan"
        />
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8 ">
          My Skills
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          My skills include a deep dive into several remarkable technologies that I've worked with.
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
    </div>
  );
}

export default Instructors;
