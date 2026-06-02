import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { ButtonX } from "../../components/ui/cvborder";

function page() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="h-auto flex relative antialiased bg-neutral-950">
      <div>
        <BackgroundBeams />
      </div>
      <div className="md:py-40 py-20 px-20 xl:p-40 w-screen bg-neutral-950 rounded-l-md flex items-center justify-center flex-col lg:flex-row md:items-center">
        {/* Your Photo */}
        <Image
          src="/courses/nandu.jpeg" // Replace with your photo URL
          alt="Your Photo"
          className="rounded-full w-[200px] h-[200px] md:w-[500px] md:h-[500px] mx-auto mb-4 z-10"
          height={500}
          width={500}
        />
        <div>
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            About Me
          </h1>
          <br />
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-left relative z-10">
            I'm Vivekananda, a final-year B.Tech student at Newton School of
            Technology, Rishihood University. Cricket has been a big part of my
            life since 8th grade - I represented my school and clubs across India
            and Sri Lanka, and it taught me the discipline I still carry today.
            <br />
            <br />
            After my first year, I dove into software development through
            internships - frontend at MoveInSync, then as an early SDE at Zuvees
            (a flower-gifting startup) building systems from scratch, where I
            later moved into a Tech + Growth role focused on analytics and
            server-side GTM. Most recently, I worked as an AI Agent Reliability
            Engineer Intern at Emergent, debugging AI-generated codebases across
            stacks and contributing backend improvements.
            <br />
            <br />
            One of my recent projects is the Telangana Champions League platform,
            which handles a tournament's full lifecycle - registrations, player
            selection, auctions, matches, and prizes. Overall, I love building
            products from scratch and work hands-on with the MERN stack and
            backend development.
            <br />
            <br />
            I enjoy working in startups over big companies because I love
            exploring new things and taking on bigger challenges. I want to work
            in a space where my efforts make a real impact.
            <br />
            <br />
            In the future, I aspire to start my own startup and build something
            meaningful.
          </p>

          <br />
          <Link
            href="https://drive.google.com/file/d/1ajJ6ps-lCWKxM0pVgpExLcCjhE3pM_iD/view?usp=sharing"
            target="_blank"
          >
            <ButtonX>Checkout Resume</ButtonX>
          </Link>
        </div>
      </div>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default page;
