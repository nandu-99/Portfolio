"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export const products = [
  {
    title: "React Quiz App",
    link: "https://nandu-99.github.io/React-QuizApp/",
    thumbnail: "/courses/reactquiz.jpeg",
  },
  {
    title: "PrepLoom",
    link: "https://preploom.vercel.app/",
    thumbnail: "/courses/preploom.png",
  },
  {
    title: "Student Management System",
    link: "https://nst-ru-sms.vercel.app/auth/sign-in",
    thumbnail: "/courses/sms.jpeg",
  },
  {
    title: "RapidMERN",
    link: "https://npmjs.com/package/rapidmern",
    thumbnail: "/courses/rapidmern.jpeg",
  },
  {
    title: "Jee College Predictor",
    link: "https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students",
    thumbnail: "/courses/collegepredictor.jpeg",
  },
  {
    title: "Trip Planner",
    link: "https://wanderlust-tripplanner.netlify.app",
    thumbnail: "/courses/trip.jpeg",
  },
  {
    title: "Dine Restaurant website",
    link: "https://nandu-99.github.io/Dine-Restaurant-Website/",
    thumbnail: "/courses/restaurant.jpeg",
  },
  {
    title: "OrganizePro",
    link: "https://organizepro.netlify.app/",
    thumbnail: "/courses/organize.jpeg",
  },
  {
    title: "2048 Game",
    link: "https://nandu-99.github.io/2048-Game/",
    thumbnail: "/courses/2048.png",
  },
  {
    title: "TIC-TAC-TOE-GAME",
    link: "https://nandu-99.github.io/Tic-Tac-Toe/",
    thumbnail: "/courses/tictactoe.jpeg",
  },
  {
    title: "NST website clone",
    link: "https://nandu-99.github.io/NST-website-clone/",
    thumbnail: "/courses/nst.jpeg",
  },

  {
    title: "Memory Game",
    link: "https://nandu-99.github.io/Memory-Game-1/game.html",
    thumbnail: "/courses/memorygame.jpeg",
  },
  {
    title: "Image Gallery",
    link: "https://nandu-99.github.io/Image-Gallery-with-lightbox/",
    thumbnail: "/courses/imagegallery.jpeg",
  },
  {
    title: "CampusLink",
    link: "https://nandu-99.github.io/CampusLink/login.html",
    thumbnail: "/courses/campuslink.jpeg",
  },

  {
    title: "JeeBuddy",
    link: "https://jeebuddy.netlify.app/",
    thumbnail: "/courses/jeebuddy.jpeg",
  },
  {
    title: "LinkedIn-clone",
    link: "https://nandu-99.github.io/linkedin-landing-page-clone/",
    thumbnail: "/courses/linked.jpeg",
  },
  {
    title: "OrganizePro",
    link: "https://organizepro.netlify.app/",
    thumbnail: "/courses/organize.jpeg",
  },
  {
    title: "2048 Game",
    link: "https://nandu-99.github.io/2048-Game/",
    thumbnail: "/courses/2048.png",
  },
];

function HomeProjects() {
  return <HeroParallax products={products} />;
}

export default HomeProjects;
