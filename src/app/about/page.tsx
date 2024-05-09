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
      <div className="w-screen bg-neutral-950 rounded-l-md flex items-center justify-center p-40 flex-col md:flex-row md:items-start">
        {/* Your Photo */}
        <img
          src="/courses/vivekananda.png" // Replace with your photo URL
          alt="Your Photo"
          className="rounded-full w-49 h-49 mx-auto mb-4"
        />
        <div>
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            About Me
          </h1>
          <br/>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-left relative z-10">
          I'm Pottabathini Vivekananda, a student at Newton School of Technology.🎓 I've been deeply involved in cricket since 8th grade, achieving consistently high grades in school despite my cricket commitments.🏏 I've travelled across India and Sri Lanka, winning trophies for my school, though I had to pause due to personal reasons. 🏆 Alongside cricket, I'm passionate about photography 📸 and coding 💻, excelling in contests and assignments. Currently, I'm exploring web development, UI/UX, and sharpening my coding skills on platforms like LeetCode and Codeforces. 🌐 Additionally, I've recently started learning data structures and algorithms (DSA) and Java ☕. Despite the shift in my cricket journey, I'm eager to explore opportunities in coding and photography,embracing a life of continuous learning and growth.
          </p>
          <br/>
          <Link href="https://drive.google.com/file/d/19Dul8vNVBIOWfNfFJst_mxJi7DNAssd8/view?usp=sharing">
            <ButtonX>Checkout CV</ButtonX>
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
