import type { Metadata } from "next";
import ThemeProvider from "@/components/providers/ThemeProvider";

import "./globals.css";

import {
  Inter,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Anup Kumar | Full Stack Developer",

  description:
    "Full Stack Developer & AI Engineer building modern web applications, scalable platforms and AI-powered products.",

  keywords: [
    "Anup Kumar",
    "Anupkumar Mishra",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "AI Engineer",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Developer Portfolio",
    "AI SaaS Platform",
    "Analytics Dashboard",
    "Developer Blog"
  ],

  authors: [
    {
      name: "AnupKumar Mishra",
    },
  ],

  creator: "AnupKumar Mishra",

  openGraph: {
    title:
      "AnupKumar Mishra | Full Stack Developer & Software Engineer",

    description:
      "Modern developer portfolio built with Next.js and TypeScript.",

    url: "https://yourdomain.com",

    siteName: "Anup Portfolio",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "AnupKumar Mishra | Full Stack Developer & Software Engineer",

    description:
      "Modern developer portfolio built with Next.js and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    suppressHydrationWarning>
      <body
  className={`
    ${inter.variable}
    ${spaceGrotesk.variable}
    ${jetbrainsMono.variable}
    antialiased
  `}
>
  <ThemeProvider>
    {children}
  </ThemeProvider>
</body>
    </html>
  );
}