import React from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { cn } from "@/utils/cn";
import { ButtonX } from "../../components/ui/cvborder";
import Link from "next/link";

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
        <img
          src="/courses/vivekananda.png" // Replace with your photo URL
          alt="Your Photo"
          className="rounded-full w-49 h-49 mx-auto mb-4 z-10"
        />
        <div>
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            About Me
          </h1>
          <br />
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-left relative z-10">
            I'm Vivekananda from Hyderabad, currently a second-year BTech
            student at Newton School of Technology.🎓 I have hands-on experience
            with the MERN stack and love building projects from scratch.
            <br />
            <br />
            Before BTech, I was a cricket player🏏, representing my school in
            tournaments across India and Sri Lanka, earning several accolades.🏆
            However, I left cricket for personal reasons and shifted my focus
            entirely to development. Over time, I developed a strong interest in
            coding💻 and started working on various projects.
            <br />
            <br />
            I previously worked as a Frontend Developer Intern at MoveInSync and
            am currently interning as an SDE at Zuvees. I enjoy working in
            startups over big companies because I love exploring new things and
            taking on bigger challenges. I want to work in a space where my
            efforts make a real impact.
            <br />
            <br />
            In the future, I aspire to start my own startup and build something
            meaningful.🚀
          </p>

          <br />
          <Link
            href="https://drive.google.com/file/d/170hn9bph9B9tGPN7HPmGcPGIZFmu0fMl/view?usp=sharing"
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
