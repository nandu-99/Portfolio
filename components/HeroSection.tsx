'use client';

import { motion } from 'motion/react';
import { Spotlight } from '@/components/ui/spotlight-new';
import { FlipWords } from '@/components/ui/flip-words';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconArrowDown,
  IconArrowRight,
} from '@tabler/icons-react';

const flipWords = ['Full-Stack Development', 'Backend Engineering', 'Cloud Infrastructure'];

const ease = [0.25, 0.1, 0.25, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  };
}

export default function HeroSection() {
  return (
    <section className="relative flex h-[calc(100vh-56px)] w-full flex-col items-center justify-center overflow-hidden px-6 -mt-[65px]">
      <Spotlight />

      <div className="relative z-10 flex flex-col items-center text-center gap-4 sm:gap-6 mt-10 sm:mt-20">
        <motion.span
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-1.5 text-xs text-neutral-500 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Open for Work
        </motion.span>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-[2.75rem] sm:text-6xl lg:text-[4.75rem] font-extralight tracking-tighter bg-linear-to-b from-white to-neutral-300 bg-clip-text text-transparent leading-[1.08]"
        >
          Pottabathini Vivekananda
        </motion.h1>

        <motion.div
          {...fadeUp(0.2)}
          className="flex items-center text-base sm:text-lg text-neutral-500 font-normal"
        >
          Focused on{' '}
          <FlipWords words={flipWords} className="text-white font-semibold" />
        </motion.div>

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-wrap items-center justify-center gap-3 mt-2"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-base font-semibold text-black hover:bg-neutral-200 transition"
          >
            View Projects <IconArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://drive.google.com/file/d/1KiaEseHXEmmvOfdXQAF9vO45BuOvs6cF/view?usp=sharing"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-2.5 text-base font-medium text-neutral-400 hover:border-white/20 hover:text-neutral-200 transition"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.4)}
          className="flex items-center gap-6 mt-2"
        >
          <a
            href="https://github.com/nandu-99"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[13px] text-neutral-600 hover:text-neutral-300 transition"
          >
            <IconBrandGithub className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/vivekananda-pottabathini"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[13px] text-neutral-600 hover:text-neutral-300 transition"
          >
            <IconBrandLinkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href="mailto:vivekananda.99666@gmail.com"
            className="flex items-center gap-1.5 text-[13px] text-neutral-600 hover:text-neutral-300 transition"
          >
            <IconMail className="h-4 w-4" />
            Email
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-600"
      >
        <IconArrowDown className="h-4 w-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
