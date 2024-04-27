"use client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import AWS from "../../public/techstack/AWS.png";
import CSS3 from "../../public/techstack/CSS3.jpg";
import Docker from "../../public/techstack/Docker.png";
import Expressjs from "../../public/techstack/Express.png";
import GraphQL from "../../public/techstack/GraphQL.png";
import HTML from "../../public/techstack/HTML.png";
import Js from "../../public/techstack/js.png";
import MongoDB from "../../public/techstack/MongoDB.png";
import NextJS from "../../public/techstack/NextJS.png";
import NodeJS from "../../public/techstack/NodeJS.png";
import PostGre from "../../public/techstack/PostGre.png";
import React from "../../public/techstack/React.png";
import Tailwind from "../../public/techstack/Tailwind.png";
import Typescript from "../../public/techstack/Typescript.png";
import Python from "../../public/techstack/python.png"
import Java from "../../public/techstack/java.png"
import Git from "../../public/techstack/git.png"
import Bootstrap from "../../public/techstack/bootstrap.png"
import { SparklesCore } from "./ui/sparkles";
import { Spotlight } from "./ui/Spotlight";


const instructors = [
  {
    id: 1,
    name: "HTML",
    image: HTML,
  },
  {
    id: 2,
    name: "CSS",
    image: CSS3,
  },
  {
    id: 3,
    name: "Javascript",
    image: Js,
  },
  {
    id: 4,
    name: "React.js",
    image: React,
  },
  {
    id: 5,
    name: "Python",
    image: Python,
  },
  {
    id: 6,
    name: "Java",
    image: Java,
  },
  {
    id: 7,
    name: "BootStrap",
    image: Bootstrap,
  },
  {
    id: 8,
    name: "Git",
    image: Git,
  }
  
   
  // for future perposes aditya complect this as soon as possible
  // {
  //   id: 3,
  //   name: "MongoDB",
  //   image: MongoDB,
  // },
  // for future perposes aditya complect this as soon as possible
  // {
  //   id: 4,
  //   name: "Express.js",
  //   image: Expressjs,
  // },
  

  // for future perposes aditya complect this as soon as possible
  // {
  //   id: 8,
  //   name: "Typescript",
  //   image: Typescript,
  // },
  // for future perposes aditya complect this as soon as possible
  // {
  //   id: 9,
  //   name: "Tailwind",
  //   image: Tailwind,
  // },
  // for future perposes aditya complect this as soon as possible
  // {
  //   id: 10,
  //   name: "PostGre",
  //   image: PostGre,
  // },
  // for future perposes aditya complect this as soon as possible
  // {
  //   id: 11,
  //   name: "graphQL",
  //   image: GraphQL,
  // },
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

      {/* </WavyBackground> */}
    </div>
  );
}

export default Instructors;
