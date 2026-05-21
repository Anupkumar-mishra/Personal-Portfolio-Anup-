import Link from "next/link";

import FadeUp from "@/components/animations/FadeUp";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-32
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.18),transparent_40%)]
        "
      />

      {/* Extra Blur */}
      <div
        className="
          absolute
          left-1/2
          top-1/3
          -z-10
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-teal-500/10
          blur-[140px]
        "
      />

      <div className="container-custom">

        <FadeUp>

          <div
            className="
              grid
              min-h-[85vh]
              items-center
              gap-16
              lg:grid-cols-2
            "
          >

            {/* LEFT SIDE */}
            <div>

              {/* Availability Badge */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-teal-500/20
                  bg-teal-500/5
                  px-5
                  py-2.5
                  text-sm
                  text-teal-300
                  backdrop-blur-xl
                "
              >

                <div
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-teal-400
                  "
                />

                Available for opportunities

              </div>

              {/* Heading */}
              <h1
                className="
                  mt-8
                  text-5xl
                  font-bold
                  leading-[1.1]
                  tracking-tight
                  sm:text-6xl
                  lg:text-7xl
                "
                style={{
                  fontFamily:
                    "var(--font-space)",
                }}
              >
                Hi, I&apos;m{" "}

                <span className="text-teal-400">
                  AnupKumar Mishra
                </span>
              </h1>

              {/* Role */}
              <div
                className="
                  mt-5
                  text-2xl
                  text-zinc-300
                  sm:text-3xl
                "
              >
                Full Stack Developer
              </div>

              {/* Description */}
              <p
                className="
                  mt-8
                  max-w-xl
                  text-lg
                  leading-9
                  text-zinc-400
                "
              >
                I build scalable web applications
                and AI-powered solutions that solve
                real-world problems. Passionate
                about clean code, system design,
                and modern technologies.
              </p>

              {/* Buttons */}
              <div
                className="
                  mt-10
                  flex
                  flex-wrap
                  gap-5
                "
              >

                <Link
                  href="#projects"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-teal-400
                    to-teal-500
                    px-8
                    py-4
                    text-sm
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                  "
                >
                  View My Work →

                </Link>

                <Link
                  href="#contact"
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-8
                    py-4
                    text-sm
                    font-medium
                    text-white
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:bg-white/[0.06]
                  "
                >
                  Get In Touch
                </Link>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div
              className="
                relative
                flex
                items-center
                justify-center
              "
            >

              {/* Image Glow */}
              <div
                className="
                  absolute
                  h-[420px]
                  w-[420px]
                  rounded-full
                  bg-teal-500/20
                  blur-[120px]
                "
              />

              {/* Profile Image */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                "
              >

                <img
                  src="/LS2026.png"
                  alt="Profile"
                  className="
                    h-[620px]
                    w-full
                    object-cover
                    lg:w-[480px]
                  "
                />

              </div>

            </div>

          </div>

        </FadeUp>

      </div>

    </section>
  );
}