import FadeUp from "@/components/animations/FadeUp";

const skillGroups = [
  {
    title: "Frontend",

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS"

    ],

    icon: "⚛️",
  },

  {
    title: "Backend",

    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "MYSQL"
    ],

    icon: "🛠️",
  },

  {
    title: "AI & ML",

    skills: [
      "OpenAI",
      "LangChain",
      "Python",
      "RAG",
      "Cluade"
    ],

    icon: "🤖",
  },

  {
    title: "Tools",

    skills: [
      "Git",
      "Docker",
      "AWS",
      "Vercel",
    ],

    icon: "🚀",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        py-32
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.08),transparent_45%)]
        "
      />

      <div className="container-custom">

        <FadeUp>

          {/* Header */}
          <div
            className="
              mb-20
              text-center
            "
          >

            <div
              className="
                mb-5
                text-sm
                font-medium
                uppercase
                tracking-[0.25em]
                text-teal-400
              "
            >
              Tech Stack
            </div>

            <h2
              className="
                mx-auto
                max-w-4xl
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                sm:text-5xl
              "
              style={{
                fontFamily:
                  "var(--font-space)",
              }}
            >
              Technologies and tools
              I use to build scalable
              digital products.
            </h2>

          </div>

          {/* Grid */}
          <div
            className="
              grid
              gap-8
              md:grid-cols-2
            "
          >

            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="
                  group
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-teal-400/20
                "
              >

                {/* Top */}
                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >

                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-teal-500/10
                      text-2xl
                    "
                  >
                    {group.icon}
                  </div>

                  {/* Title */}
                  <div>

                    <h3
                      className="
                        text-2xl
                        font-bold
                        tracking-tight
                      "
                      style={{
                        fontFamily:
                          "var(--font-space)",
                      }}
                    >
                      {group.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-zinc-500
                      "
                    >
                      Modern technologies stack
                    </p>

                  </div>

                </div>

                {/* Skills */}
                <div
                  className="
                    mt-8
                    flex
                    flex-wrap
                    gap-3
                  "
                >

                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-black/20
                        px-4
                        py-2.5
                        text-sm
                        text-zinc-300
                        transition-all
                        duration-300
                        hover:border-teal-400/20
                        hover:bg-teal-500/10
                      "
                    >
                      {skill}
                    </div>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </FadeUp>

      </div>

    </section>
  );
}