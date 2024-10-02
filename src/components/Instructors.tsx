"use client";
import { Spotlight } from "./ui/Spotlight";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { IconCloud } from "./IconCloud";

const instructors = [
  {
    id: 1,
    name: "HTML",
    designation:"",
    image: "/techstack/html.png",
  },
  {
    id: 2,
    name: "CSS",
    designation:"",
    image: "/techstack/CSS3.jpg",

  },
  {
    id: 3,
    name: "Javascript",
    designation:"",
    image: "/techstack/js.png",
  },
  {
    id: 4,
    name: "Typescript",
    designation:"",
    image: "/techstack/typescript.png",
  },
  {
    id: 5,
    name: "MySQL",
    designation:"",
    image: "/techstack/mysql.png",
  },
  {
    id: 6,
    name: "MongoDB",
    designation:"",
    image: "/techstack/MongoDB.png",
  },

  {
    id: 7,
    name: "Express.js",
    designation:"",
    image: "/techstack/Express.png",
  },
  {
    id: 8,
    name: "React",
    designation:"",
    image: "/techstack/React.png",
  },
  {
    id: 9,
    name: "Nodejs",
    designation:"",
    image: "/techstack/NodeJS.png",
  },


  {
    id: 10,
    name: "Angular",
    designation:"",
    image: "/techstack/angular.png",
  },
  {
    id: 11,
    name: "Python",
    designation:"",
    image: "/techstack/python.png",
  },
  {
    id: 12,
    name: "Java",
    designation:"",
    image: "/techstack/java.png",
  },
  {
    id: 13,
    name: "BootStrap",
    designation:"",
    image: "/techstack/bootstrap.png",
  },
  {
    id: 14,
    name: "Tailwind CSS",
    designation:"",
    image: "/techstack/tailwind.jpg",
  },
  {
    id: 15,
    name: "Git",
    designation:"",
    image: "/techstack/git.png",
  },
];

function Instructors() {
  const iconSlugs = [
    "html",
    "css",
    "javascript",
    "typescript",
    "mysql",
    "mongodb",
    "express",
    "react",
    "nodejs",
    "angular",
    "python",
    "java",
    "bootstrap",
    "tailwindcss",
    "git",
  ];
  return (
    <div className="h-auto md:h-[70rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="cyan" />
      <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8 ">
        My Skills
      </h2>
      <p className="text-base md:text-lg text-white text-center mb-2">
        My skills include a deep dive into several remarkable technologies that
        I've worked with.
      </p>
      <div className="flex flex-col gap-10">
        <IconCloud iconSlugs={iconSlugs} />
        <div className="flex flex-row items-center justify-center w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </div>
    </div>
  );
}

export default Instructors;
