"use client";

import NavbarWrapper from "@/components/NavbarWrapper";
import {
    CardBody,
    CardContainer,
    CardItem,
} from "@/components/ui/3d-card";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

const projects = [
  {
    title: "Telangana Champions League",
    description:
      "Live T20 tournament platform on AWS with Razorpay + Resend - Rs. 16L+ collected, 45K+ users.",
    github: "",
    livelink: "https://www.tclt20.co.in/",
    image: "/tcl.png",
  },
  {
    title: "JEE College Predictor",
    description:
      "Helps JEE students find colleges by rank and preferences using real data - fast, personalised results.",
    github: "",
    livelink:
      "https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students",
    image: "/collegepredictor.jpeg",
  },
  {
    title: "PrepLoom",
    description:
      "One-stop prep platform - roadmaps, project ideas, resume tips, and interview resources for students.",
    github: "",
    livelink: "https://preploom.vercel.app/",
    image: "/preploom.png",
  },
  {
    title: "DriveMerge",
    description:
      "Connect multiple Google Drive accounts and use them as one - manage files and beat storage limits.",
    github: "https://github.com/nandu-99/DriveMerge",
    livelink: "https://drive-merge.vercel.app/",
    image: "/drivemerge.jpeg",
  },
  {
    title: "Student Management System",
    description:
      "Manages student details, attendance, marks, and academic progress with an admin dashboard.",
    github: "https://github.com/nandu-99/student_management_system",
    livelink: "https://nst-ru-sms.vercel.app/auth/sign-in",
    image: "/sms.jpeg",
  },
  {
    title: "Serenity Springs",
    description:
      "Wellness platform for booking therapy sessions with tools for admins, therapists, and users.",
    github: "",
    livelink: "https://serenity-springs-site.vercel.app/",
    image: "/serenity.png",
  },
  {
    title: "RapidMERN",
    description:
      "CLI tool to scaffold a full MERN stack project with Prisma and MySQL in seconds.",
    github: "https://github.com/nandu-99/rapidmern",
    livelink: "https://npmjs.com/package/rapidmern",
    image: "/rapidmern.jpeg",
  },
  {
    title: "IMDb Dashboard",
    description:
      "Interactive dashboard displaying movies, ratings, genres, and trends in a clean interface.",
    github: "https://github.com/nandu-99/Mining-Minds---Mining-IMDB-for-Movie-Trends",
    livelink: "https://mining-minds-imdb.streamlit.app/",
    image: "/imdb.jpeg",
  },
  {
    title: "Trip Planner",
    description:
      "AI-powered trip planner to create travel plans, discover places, and organise your journey.",
    github: "https://github.com/nandu-99/Trip_planner",
    livelink: "https://wanderlust-tripplanner.netlify.app",
    image: "/trip.jpeg",
  },
  {
    title: "Lodging Land",
    description:
      "Browse and book stays with ease - explore lodging options, compare, and find the right place fast.",
    github: "https://github.com/nandu-99/lodgingland",
    livelink: "https://lodgingland.vercel.app/",
    image: "/lodgingland.jpg",
  },
  {
    title: "JeeBuddy",
    description:
      "Chatbot for JEE aspirants - instant help, guidance, and useful study resources on demand.",
    github: "https://github.com/nandu-99/Cloud_Hackathon",
    livelink: "https://jeebuddy.netlify.app/",
    image: "/jeebuddy.jpeg",
  },
  {
    title: "CampusLink",
    description:
      "Platform connecting juniors with seniors for guidance, mentorship, and campus support.",
    github: "https://github.com/nandu-99/CampusLink",
    livelink: "https://nandu-99.github.io/CampusLink/login.html",
    image: "/campuslink.jpeg",
  },
  {
    title: "Dine Restaurant",
    description:
      "Frontend landing page for a restaurant - focused on layout, visuals, and clean UI.",
    github: "https://github.com/nandu-99/Dine-Restaurant-Website",
    livelink: "https://nandu-99.github.io/Dine-Restaurant-Website/",
    image: "/restaurant.jpeg",
  },
  {
    title: "OrganizePro",
    description:
      "Clean to-do app built with React to plan tasks, stay organised, and stay productive.",
    github: "https://github.com/nandu-99/React-Todolist-App",
    livelink: "https://organizepro.netlify.app/",
    image: "/organize.jpeg",
  },
  {
    title: "React Quiz App",
    description:
      "Fun quiz app focused on React questions - test knowledge and learn React concepts.",
    github: "https://github.com/nandu-99/React-QuizApp",
    livelink: "https://nandu-99.github.io/React-QuizApp/",
    image: "/reactquiz.jpeg",
  },
  {
    title: "NST Website Clone",
    description:
      "Clone of the NST website recreating its layout and design while keeping the original feel.",
    github: "https://github.com/nandu-99/NST-website-clone",
    livelink: "https://nandu-99.github.io/NST-website-clone/",
    image: "/nst.jpeg",
  },
  {
    title: "LinkedIn Clone",
    description:
      "Landing page clone of LinkedIn - matches its look and feel for practice and learning.",
    github: "https://github.com/nandu-99/linkedin-landing-page-clone",
    livelink: "https://nandu-99.github.io/linkedin-landing-page-clone/",
    image: "/linked.jpeg",
  },
  {
    title: "Image Gallery",
    description:
      "Image gallery with a lightbox feature for viewing photos in a smooth, interactive way.",
    github: "https://github.com/nandu-99/Image-Gallery-with-lightbox",
    livelink: "https://nandu-99.github.io/Image-Gallery-with-lightbox/",
    image: "/imagegallery.jpeg",
  },
  {
    title: "Memory Game",
    description:
      "Card-matching game that tests memory and focus - simple to play and fun for all ages.",
    github: "https://github.com/nandu-99/Memory-Game-1",
    livelink: "https://nandu-99.github.io/Memory-Game-1/game.html",
    image: "/memorygame.jpeg",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Classic Tic-Tac-Toe built for the web - play with friends, clean and simple interface.",
    github: "https://github.com/nandu-99/Tic-Tac-Toe",
    livelink: "https://nandu-99.github.io/Tic-Tac-Toe/",
    image: "/tictactoe.jpeg",
  },
  {
    title: "2048 Game",
    description:
      "Browser-based 2048 game - combine tiles to reach the goal. Simple, fun, addictive.",
    github: "https://github.com/nandu-99/2048-Game",
    livelink: "https://nandu-99.github.io/2048-Game/",
    image: "/2048.png",
  },
];

export default function ProjectsPage() {
  return (
    <div
      className="relative min-h-screen bg-[#09090b]"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)`,
        backgroundSize: `26px 26px`,
      }}
    >
      {/* Edge vignette - keeps dots subtle at page boundaries */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse 120% 80% at 50% 20%, transparent 40%, rgba(9,9,11,0.75) 100%)`,
        }}
      />

      <NavbarWrapper />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-16 sm:pb-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {projects.map((project) => (
            <CardContainer className="w-full" containerClassName="py-2" key={project.title}>
              <CardBody className="relative bg-white/2 border border-white/8 w-full h-auto rounded-xl p-6 hover:border-white/15 transition-colors duration-200">
                {/* Title */}
                <CardItem
                  translateZ={50}
                  className="text-xl font-bold text-white"
                >
                  {project.title}
                </CardItem>

                {/* Description */}
                <CardItem
                  as="p"
                  translateZ={60}
                  className="text-neutral-400 text-sm max-w-sm mt-2"
                >
                  {project.description}
                </CardItem>

                {/* Image */}
                <CardItem translateZ={100} className="w-full mt-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-60 w-full object-cover rounded-xl"
                  />
                </CardItem>

                {/* Buttons */}
                <div className={`flex items-center mt-20 ${project.github ? "justify-between" : "justify-end"}`}>
                  {project.github && (
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-normal text-neutral-300 flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                      <IconBrandGithub className="h-3.5 w-3.5" />
                      Github Repo →
                    </CardItem>
                  )}
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.livelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold flex items-center gap-1.5 hover:bg-neutral-200 transition-colors"
                  >
                    <IconExternalLink className="h-3.5 w-3.5" />
                    Live Link
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
