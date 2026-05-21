import FadeUp from "@/components/animations/FadeUp";

import ProjectCard from "@/components/cards/ProjectCard";

const projects = [
  {
    title: "Indian Manifesto Tracker",

    description:
      "AI-powered civic intelligence platform that tracks 400+ political promises using RAG architecture, automated data pipelines, analytics dashboards, and NLP-based chatbot integration.",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",

    tags: [
      "React.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "RAG",
      "Claude AI",
    ],

    liveUrl: "#",
    githubUrl: "#",
  },

   {
    title: "Security Management System",

    description:
      "Full-stack security operations platform with RBAC, secure authentication, responsive dashboards, and REST APIs handling real-world client and guard management workflows.",

    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",

    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST API",
    ],

    liveUrl: "#",
    githubUrl: "#",
  },

   {
    title: "Wallpaper Website",

    description:
      "Responsive wallpaper platform with optimized image search, scalable backend architecture, fast loading performance, and efficient media management system.",

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",

    tags: [
      "Node.js",
      "MongoDB",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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

          {/* Section Header */}
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
                Featured Projects
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
                Selected work showcasing
                modern products and
                scalable applications.
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
              A collection of projects focused
              on user experience, scalable
              architecture and modern frontend
              engineering.
            </p>

          </div>

          {/* Grid */}
          <div
            className="
              grid
              gap-10
              lg:grid-cols-2
            "
          >

            {/* Large Card */}
            <div className="lg:col-span-2">

              <ProjectCard
                title={projects[0].title}
                description={
                  projects[0].description
                }
                image={projects[0].image}
                tags={projects[0].tags}
                liveUrl={
                  projects[0].liveUrl
                }
                githubUrl={
                  projects[0].githubUrl
                }
              />

            </div>

            {/* Smaller Cards */}
            {projects
              .slice(1)
              .map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={
                    project.description
                  }
                  image={project.image}
                  tags={project.tags}
                  liveUrl={project.liveUrl}
                  githubUrl={
                    project.githubUrl
                  }
                />
              ))}

          </div>

        </FadeUp>

      </div>

    </section>
  );
}