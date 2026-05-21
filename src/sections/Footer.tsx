import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/",
  },

  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/anupkumar-mishra",
  },

  {
    name: "Email",
    href: "mailto:anupmishra0033@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/10
        py-10
      "
    >
      <div className="container-custom">

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-6
            md:flex-row
          "
        >

          {/* Left */}
          <div>

            <div
              className="
                text-2xl
                font-bold
                tracking-tight
              "
              style={{
                fontFamily: "var(--font-space)",
              }}
            >
              Anupkumar Mishra
              <span className="text-teal-400">.</span>
            </div>

            <p
              className="
                mt-2
                text-sm
                text-zinc-500
              "
            >
              Full Stack Developer & AI Engineer
            </p>

          </div>

          {/* Right */}
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-6
            "
          >

            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                className="
                  text-sm
                  text-zinc-400
                  transition
                  hover:text-white
                "
              >
                {link.name}
              </Link>
            ))}

          </div>

        </div>

        {/* Bottom */}
        <div
          className="
            mt-10
            border-t
            border-white/10
            pt-6
            text-center
            text-sm
            text-zinc-600
          "
        >
          © 2026 AnupKumar Mishra. All rights reserved.
        </div>

      </div>
    </footer>
  );
}