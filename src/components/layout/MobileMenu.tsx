"use client";

import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

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

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="
            fixed
            inset-0
            z-50
            bg-black/60
            backdrop-blur-sm
            md:hidden
          "
        >

          <motion.div
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
            }}
            className="
              absolute
              right-0
              top-0
              flex
              h-full
              w-[280px]
              flex-col
              border-l
              border-white/10
              bg-[#09090b]
              p-8
            "
          >

            {/* Top */}
            <div className="flex items-center justify-between">

              <div
                className="
                  text-2xl
                  font-bold
                "
                style={{
                  fontFamily: "var(--font-space)",
                }}
              >
                Anup
                <span className="text-teal-400">.</span>
              </div>

              <button
                onClick={onClose}
                className="
                  rounded-full
                  border
                  border-white/10
                  p-2
                  text-white
                "
              >
                ✕
              </button>

            </div>

            {/* Links */}
            <div className="mt-16 flex flex-col gap-8">

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="
                    text-lg
                    text-zinc-300
                    transition
                    hover:text-white
                  "
                >
                  {item.label}
                </Link>
              ))}

            </div>

            {/* Bottom CTA */}
            <div className="mt-auto">

              <a
                href="#contact"
                onClick={onClose}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-2xl
                  bg-teal-500
                  px-6
                  py-4
                  text-sm
                  font-medium
                  text-black
                "
              >
                Let&apos;s Talk
              </a>

            </div>

          </motion.div>

        </motion.div>
      )}

    </AnimatePresence>
  );
}