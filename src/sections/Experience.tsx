import FadeUp from "@/components/animations/FadeUp";

const experiences = [

  {
    role: "Freelance Full Stack Developer",

    company: "New Bajrang Security & Personnel Services",

    duration: "Oct 2025 — Mar 2026",

    description:
      "Designed and developed a full-stack security management system with RBAC, REST APIs, authentication, and responsive dashboards using Node.js, Express.js, MongoDB, and JavaScript.",
  },

  {
    role: "Full Stack Web Developer",

    company: "Personal Projects",

    duration: "2023 — Present",

    description:
      "Developing scalable web applications, AI-powered tools, and responsive platforms while focusing on backend engineering, performance optimization, and modern system design.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
          bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.06),transparent_45%)]
        "
      />

      <div className="container-custom">

        <FadeUp>

          {/* Header */}
          <div
            className="
              mb-20
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >

            {/* Left */}
            <div>

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
                Experience
              </div>

              <h2
                className="
                  max-w-3xl
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
                Building modern
                applications and
                solving real-world
                problems.
              </h2>

            </div>

            {/* Right */}
            <p
              className="
                max-w-lg
                text-base
                leading-8
                text-zinc-400
              "
            >
              My experience working on
              modern frontend systems,
              scalable applications and
              AI-powered digital products.
            </p>

          </div>

          {/* Timeline */}
          <div
            className="
              relative
              space-y-8
            "
          >

            {/* Vertical Line */}
            <div
              className="
                absolute
                left-6
                top-0
                h-full
                w-px
                bg-white/10
              "
            />

            {experiences.map(
              (experience, index) => (
                <div
                  key={index}
                  className="
                    relative
                    pl-20
                  "
                >

                  {/* Dot */}
                  <div
                    className="
                      absolute
                      left-[17px]
                      top-8
                      z-10
                      h-4
                      w-4
                      rounded-full
                      border-4
                      border-[#050816]
                      bg-teal-400
                    "
                  />

                  {/* Card */}
                  <div
                    className="
                      rounded-[28px]
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-8
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:border-teal-400/20
                    "
                  >

                    {/* Top */}
                    <div
                      className="
                        flex
                        flex-col
                        gap-5
                        lg:flex-row
                        lg:items-start
                        lg:justify-between
                      "
                    >

                      <div>

                        {/* Role */}
                        <h3
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
                          {experience.role}
                        </h3>

                        {/* Company */}
                        <div
                          className="
                            mt-2
                            text-lg
                            text-teal-300
                          "
                        >
                          {experience.company}
                        </div>

                      </div>

                      {/* Duration */}
                      <div
                        className="
                          inline-flex
                          rounded-full
                          border
                          border-teal-500/20
                          bg-teal-500/5
                          px-4
                          py-2
                          text-sm
                          text-teal-300
                        "
                      >
                        {experience.duration}
                      </div>

                    </div>

                    {/* Description */}
                    <p
                      className="
                        mt-8
                        text-base
                        leading-8
                        text-zinc-400
                      "
                    >
                      {experience.description}
                    </p>

                  </div>

                </div>
              )
            )}

          </div>

        </FadeUp>

      </div>

    </section>
  );
}