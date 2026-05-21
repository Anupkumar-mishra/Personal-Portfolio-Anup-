import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-teal-400/30
      "
    >

      {/* Image */}
      <div className="relative overflow-hidden">

        {/* Overlay Gradient */}
        <div
          className="
            absolute
            inset-0
            z-10
            bg-gradient-to-t
            from-[#050816]
            via-transparent
            to-transparent
          "
        />

        <img
          src={image}
          alt={title}
          className="
            h-[260px]
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

      </div>

      {/* Content */}
      <div className="p-8">

        {/* Tags */}
        <div
          className="
            mb-5
            flex
            flex-wrap
            gap-2
          "
        >

          {tags.map((tag) => (
            <div
              key={tag}
              className="
                rounded-full
                border
                border-teal-500/20
                bg-teal-500/5
                px-3
                py-1
                text-xs
                text-teal-300
              "
            >
              {tag}
            </div>
          ))}

        </div>

        {/* Title */}
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
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-5
            text-base
            leading-8
            text-zinc-400
          "
        >
          {description}
        </p>

        {/* Bottom */}
        <div
          className="
            mt-8
            flex
            items-center
            justify-between
          "
        >

          {/* Buttons */}
          <div className="flex gap-3">

            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                className="
                  rounded-xl
                  bg-teal-500
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-teal-400
                "
              >
                Live Demo
              </Link>
            )}

            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  py-3
                  text-sm
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white/[0.06]
                "
              >
                GitHub
              </Link>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}