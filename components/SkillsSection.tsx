import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const skills = [
  { name: "HTML",           icon: "html5" },
  { name: "CSS",            icon: "css3",               localSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript",     icon: "javascript" },
  { name: "TypeScript",     icon: "typescript" },
  { name: "React",          icon: "react" },
  { name: "Next.js",        icon: "nextdotjs" },
  { name: "Angular",        icon: "angular" },
  { name: "Node.js",        icon: "nodedotjs" },
  { name: "Express",        icon: "express" },
  { name: "MySQL",          icon: "mysql" },
  { name: "MongoDB",        icon: "mongodb" },
  { name: "Python",         icon: "python" },
  { name: "Git",            icon: "git" },
  { name: "AWS",            icon: "amazonwebservices",  localSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Docker",         icon: "docker" },
  { name: "GitHub Actions", icon: "githubactions" },
  { name: "Prisma",         icon: "prisma" },
  { name: "Tailwind",       icon: "tailwindcss" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-white/5 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-8 sm:mb-12">What I work with</h2>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3" stagger={0.04}>
          {skills.map((skill) => (
            <FadeInItem key={skill.name}>
              <div className="flex items-center gap-2.5 px-3 sm:px-4 py-3 rounded-xl border border-white/8 bg-white/2 hover:border-white/15 hover:bg-white/4 transition-colors duration-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={skill.localSrc ?? `https://cdn.simpleicons.org/${skill.icon}/a3a3a3`}
                  alt={skill.name}
                  className="h-4 w-4 shrink-0 object-contain grayscale opacity-65"
                />
                <span className="text-sm text-neutral-400 truncate">{skill.name}</span>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
