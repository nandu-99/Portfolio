"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "About", link: "/#about" },
  { name: "Projects", link: "/projects" },
  { name: "Experience", link: "/#experience" },
];

export default function NavbarWrapper() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} activePath={pathname} />
        <NavbarButton href="/#contact" variant="dark">
          Let&apos;s Build
        </NavbarButton>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setMobileOpen(false)}
              className="w-full text-base font-medium text-neutral-700 dark:text-neutral-300"
            >
              {item.name}
            </a>
          ))}
          <NavbarButton href="/#contact" variant="dark" className="w-full">
            Let&apos;s Build
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
