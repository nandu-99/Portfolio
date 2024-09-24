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
          className="rounded-full w-49 h-49 mx-auto mb-4 z-10"
        />
        <div>
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            About Me
          </h1>
          <br/>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-left relative z-10">
            I'm Pottabathini Vivekananda, currently pursuing a Bachelor of Technology in Computer Science at Newton School of Technology.🎓 My journey has been one of diverse passions and continuous learning. Since the 8th grade, I've balanced academics with a deep commitment to cricket,🏏 representing my school in various tournaments across India and Sri Lanka, earning numerous accolades.🏆 Despite having to pause my cricket journey due to personal reasons, my passion for learning and growth never waned.
            <br/><br/>
            Alongside cricket, I have a strong interest in photography📸 and coding.💻 I’ve excelled in both, participating in coding contests and honing my skills through assignments. My current focus is on web development, UI/UX design, and refining my coding abilities on platforms like LeetCode and Codeforces. I’ve completed over 250 questions on LeetCode. Recently, I’ve started exploring advance data structures and algorithms (DSA) and learning Java☕ to strengthen my technical foundation.
            <br/><br/>
            While my path in cricket has taken a different turn, I'm eager to pursue new opportunities in coding and photography, embracing every chance to learn, grow, and excel.🚀
          </p>
          <br/>
          <Link href="https://drive.google.com/file/d/14aat9zx32-r1N9jyqzmR3rfmHDYMC7-e/view?usp=drive_link" target="_blank">
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
