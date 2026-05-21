type SectionTitleProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  label,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-16">

      {/* Small Label */}
      <div
        className="
          mb-4
          text-sm
          font-medium
          uppercase
          tracking-[0.2em]
          text-teal-400
        "
      >
        {label}
      </div>

      {/* Main Title */}
      <h2
        className="
          text-4xl
          font-bold
          tracking-tight
          sm:text-5xl
        "
        style={{
          fontFamily: "var(--font-space)",
        }}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className="
            mt-5
            max-w-2xl
            text-base
            leading-7
            text-zinc-400
          "
        >
          {description}
        </p>
      )}

    </div>
  );
}