import Link from "next/link";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconFileText,
  IconArrowRight,
} from "@tabler/icons-react";
import { FadeIn } from "@/components/ui/FadeIn";

const links = [
  {
    label: "Email",
    href: "mailto:vivekananda.99666@gmail.com",
    icon: IconMail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vivekananda-pottabathini/",
    icon: IconBrandLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/nandu-99",
    icon: IconBrandGithub,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1KiaEseHXEmmvOfdXQAF9vO45BuOvs6cF/view?usp=sharing",
    icon: IconFileText,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative border-t border-white/5 flex flex-col items-center justify-center min-h-[60vh] py-16 sm:py-32 overflow-hidden bg-[#09090b]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[#09090b] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_30%,#09090b_100%)]" />

      <FadeIn className="relative z-10 flex flex-col items-center text-center gap-6 px-6">
        <p className="text-xs uppercase tracking-widest text-neutral-500">
          Contact
        </p>

        <h2 className="text-3xl sm:text-6xl font-light tracking-tight text-white">
          Connect with me
        </h2>

        <p className="text-base text-neutral-400 max-w-md">
          Currently seeking full-time Software Engineer opportunities. Open to collaborations and conversations.
        </p>

        <div className="flex items-center gap-3 mt-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              title={link.label}
              className="flex items-center justify-center h-10 w-10 rounded-xl border border-white/8 bg-white/3 text-neutral-400 hover:border-white/20 hover:text-white hover:bg-white/6 transition-colors duration-200"
            >
              <link.icon className="h-4.5 w-4.5" />
            </a>
          ))}
        </div>

        <Link
          href="/contact"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-neutral-200 transition"
        >
          Send a message <IconArrowRight className="h-4 w-4" />
        </Link>
      </FadeIn>
    </section>
  );
}
