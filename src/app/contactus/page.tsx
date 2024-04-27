"use client";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/utils/cn";
import { ButtonX } from "@/components/ui/cvborder";

function page() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div>
        <BackgroundBeams />
      </div>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Connect with Me
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Hello! 👋 If you'd like to get in touch with me for inquiries, feedback, or potential collaborations, feel free to reach out!I'm here and ready to connect.
        </p>
        <form
          action="https://getform.io/f/panvjqva" method="POST" 
        >
          <input
            type="text" name="name"
            placeholder="Your Name"
            required
            className="h-10 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 placeholder:p-2 text-white p-3"
          />
          <input
            type="email" name="email"
            placeholder="Your Email"
            required
            className="h-10 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 placeholder:p-2 text-white p-3"
          />
          <input
            type="text" name="message"
            placeholder="Message"
            required
            className="h-20 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 placeholder:p-2 text-white p-3"
          />
          <div style={{ paddingTop: '20px' }}>
          <ButtonX type="submit">send</ButtonX>
          </div>
        </form>
      </div>
      
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

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
