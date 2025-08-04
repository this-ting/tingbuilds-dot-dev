import type { Metadata } from "next";

export const FULL_NAME = "Ting Chang";
export const TITLE = "Ting Chang - Remote Frontend Developer";
export const DESCRIPTION =
  "Remote frontend developer with 3+ years building scalable web applications. Specialized in React, Next.js, and user-focused product development. Available for remote opportunities globally.";
export const CANONICAL_URL = "https://www.tingbuilds.dev";

export const METADATA: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  creator: FULL_NAME,
  publisher: FULL_NAME,
  metadataBase: new URL(CANONICAL_URL),
  alternates: {
    canonical: "/",
  },
  authors: { url: CANONICAL_URL, name: FULL_NAME },
  keywords: [
    "remote frontend developer",
    "React developer",
    "Next.js developer",
    "product development",
    "remote work",
    "Taiwan developer",
    "web developer",
    "web applications",
    "nextjs developer",
    "typescript developer",
    "react performance optimization",
    "remote web developer",
    "frontend developer taiwan",
    "react developer for startups",
    "nextjs ecommerce developer",
    "remote react specialist",
    "javascript performance expert",
    "web developer taipei",
    "frontend developer asia",
    "react remote work",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: CANONICAL_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "TingBuilds.dev",
    // images: [
    //   {
    //     url: '/og-image.jpg', // You'll need to create this
    //     width: 1200,
    //     height: 630,
    //     alt: 'Ting Chang - React Developer',
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ting Chang - React Developer | Remote Frontend Development Specialist",
    description:
      "Experienced React and Next.js developer specializing in performance optimization and remote collaboration. Available worldwide from Taipei, Taiwan.",
    // images: ["/og-image.jpg"],
    creator: "@this_ting",
  },
};
