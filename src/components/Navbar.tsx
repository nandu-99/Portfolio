"use client";

import React, { useState, useEffect, useRef } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <div className="md:hidden pl-5">
        <button 
          className="p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="white" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div 
        ref={drawerRef}
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-black transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col pt-10 space-y-4 px-4">
          <button 
            className="self-end p-2"
            onClick={() => setIsOpen(false)}
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="white" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link href="/" onClick={handleMenuItemClick}>
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <Link href="/about" onClick={handleMenuItemClick}>
            <MenuItem setActive={setActive} active={active} item="About" />
          </Link>
          <Link href="/experience" onClick={handleMenuItemClick}>
            <MenuItem setActive={setActive} active={active} item="Experience" />
          </Link>
          <Link href="/projects" onClick={handleMenuItemClick}>
            <MenuItem setActive={setActive} active={active} item="Projects" />
          </Link>
          <Link href="/contactus" onClick={handleMenuItemClick}>
            <MenuItem setActive={setActive} active={active} item="Contact Me" />
          </Link>
        </div>
      </div>

      <div className="hidden md:block">
        <Menu setActive={setActive}>
          <Link href="/">
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <Link href="/about">
            <MenuItem setActive={setActive} active={active} item="About" />
          </Link>
          <Link href="/experience">
            <MenuItem setActive={setActive} active={active} item="Experience" />
          </Link>
          <Link href="/projects">
            <MenuItem setActive={setActive} active={active} item="Projects" />
          </Link>
          <Link href="/contactus">
            <MenuItem setActive={setActive} active={active} item="Contact Me" />
          </Link>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
