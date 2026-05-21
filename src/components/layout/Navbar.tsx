"use client";

import Link from "next/link";

import { useState } from "react";

import MobileMenu from "./MobileMenu";

import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  {
    label: "Projects",
    href: "#projects",
  },

  {
    label: "Experience",
    href: "#experience",
  },

  {
    label: "Skills",
    href: "#skills",
  },

  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <>
      <header
        className="
          fixed
          top-0
          left-0
          z-50
          w-full
          border-b
          border-white/5
          bg-[#050816]/80
          backdrop-blur-2xl
        "
      >

        <div
          className="
            mx-auto
            flex
            h-[78px]
            max-w-7xl
            items-center
            justify-between
            px-6
            lg:px-10
          "
        >

          {/* Logo */}
          <Link
            href="/"
            className="
              text-3xl
              font-bold
              tracking-tight
            "
            style={{
              fontFamily:
                "var(--font-space)",
            }}
          >
            Anupkumar Mishra
            <span className="text-teal-400">
              .
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="
              hidden
              items-center
              gap-10
              md:flex
            "
          >

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  text-sm
                  font-medium
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:text-white
                "
              >
                {item.label}
              </Link>
            ))}

          </nav>

          {/* Right Side */}
          <div
            className="
              hidden
              items-center
              gap-4
              md:flex
            "
          >

            <ThemeToggle />

            <a
              href="#contact"
              className="
                rounded-full
                bg-gradient-to-r
                from-teal-400
                to-teal-500
                px-7
                py-3
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Let&apos;s Talk
            </a>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() =>
              setIsOpen(true)
            }
            className="
              flex
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-3
              md:hidden
            "
          >

            <div className="space-y-1">

              <div className="h-[2px] w-5 bg-white" />

              <div className="h-[2px] w-5 bg-white" />

            </div>

          </button>

        </div>

      </header>

      <MobileMenu
        isOpen={isOpen}
        onClose={() =>
          setIsOpen(false)
        }
      />
    </>
  );
}