import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonialCard from "@/components/TestimonialCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import HomeProjects from "@/components/HomeProjects";
import WorkEx from "@/components/WorkEx";
import LampContainer from "@/components/lamp"
import BackgroundBeams from "@/components/Beams"
import {GoogleGeminiEffect} from "@/components/gemini"


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.0.2]">
      {/* <div>
        <BackgroundBeams />
      </div> */}
      <BackgroundBeams/>
      <LampContainer/>
      {/* <BackgroundBeams/> */}
      {/* <FeaturedCourses /> */}
      {/* <UpcomingWebinars /> */}
      {/* <WorkEx /> */}
      {/* <MusicSchoolTestimonialCard /> */}
      <HomeProjects />
      <Instructors />
      {/* <HeroSection/> */}
      <Footer /> 
    </main>
  );
}
