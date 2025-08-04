export interface HeroStat {
  value: string;
  label: string;
  color: string;
}

export interface WorkExperience {
  company: string;
  industry: string;
  highlights: string;
  borderColor: string;
  textColor: string;
}

export interface WinLink {
  emoji: string;
  text: string;
  url: string;
}

export interface Win {
  emoji: string;
  title: string;
  description: string;
  tech: string;
  links: WinLink[];
  hoverColor: string;
  shadowColor: string;
}

export interface TechStack {
  category: string;
  color: string;
  items: string[];
}

export interface ContentItem {
  hashtag?: string;
  hashtagColor?: string;
  title: string;
  url: string;
}

export interface FeaturedContent {
  title: string;
  items: ContentItem[];
}

export interface ContactInfo {
  emoji: string;
  text: string;
  url: string;
}

export interface SectionTitles {
  WORK_EXPERIENCE: string;
  WINS: string;
  TECH_STACK: string;
  FEATURED_CONTENT: string;
  CONTACT: string;
}

export const HERO_STATS: HeroStat[] = [
  { value: "10+", label: "Timezones", color: "blue" },
  { value: "500K+", label: "Users Served", color: "green" },
  { value: "177%", label: "Growth Driven", color: "purple" },
  { value: "$35K", label: "Prize Won", color: "yellow" },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Polymer Capital",
    industry: "Financial Technology",
    highlights: "50% performance boost • 1000+ daily users • React dashboards",
    borderColor: "border-blue-500",
    textColor: "text-blue-300",
  },
  {
    company: "Arc & Codementor",
    industry: "Education Technology",
    highlights: "177% user growth • 500K+ users • Next.js platform",
    borderColor: "border-purple-500",
    textColor: "text-purple-300",
  },
  {
    company: "Gempathy",
    industry: "E-commerce Platform",
    highlights: "MVP in 4 weeks • Full platform • Next.js + Strapi",
    borderColor: "border-green-500",
    textColor: "text-green-300",
  },
];

export const WINS: Win[] = [
  {
    emoji: "🏆",
    title: "Solana Summer Camp Hackathon",
    description: "2nd Place Mobile Track | $35,000 Prize | 750 projects",
    tech: "// React Native, TypeScript, Solana/web3.js",
    links: [
      {
        emoji: "🐙",
        text: "GitHub",
        url: "https://github.com/BoxInThePARK/cini-dapp-v0",
      },
      {
        emoji: "📰",
        text: "Winner Announcement",
        url: "https://solana.com/news/solana-summer-camp-winners",
      },
    ],
    hoverColor: "hover:border-yellow-500",
    shadowColor: "hover:shadow-yellow-500/10",
  },
  {
    emoji: "🏆",
    title: "Taiwan Solana Hackathon 3.0",
    description: "1st Place Raydium Challenge | 30-hour sprint",
    tech: "// TypeScript, DeFi protocols",
    links: [
      {
        emoji: "🐙",
        text: "GitHub",
        url: "https://github.com/crispyfisherman/raydium-boxing-scaffold-v0",
      },
      {
        emoji: "📰",
        text: "Winner Announcement",
        url: "https://x.com/EpochsStudio/status/1523633894716841985",
      },
    ],
    hoverColor: "hover:border-yellow-500",
    shadowColor: "hover:shadow-yellow-500/10",
  },
  {
    emoji: "🚀",
    title: "DevProjects Platform Growth",
    description: "177% user increase through React optimization",
    tech: "// 500K+ monthly users served",
    links: [],
    hoverColor: "hover:border-green-500",
    shadowColor: "hover:shadow-green-500/10",
  },
];

export const TECH_STACK: TechStack[] = [
  {
    category: "Frontend:",
    color: "text-yellow-400",
    items: [
      "• React, Next.js, TypeScript",
      "• JavaScript (ES6+), HTML5, CSS3",
      "• Tailwind CSS, Sass/SCSS",
    ],
  },
  {
    category: "State & Data:",
    color: "text-yellow-400",
    items: ["• Redux, Context API, SWR", "• RESTful APIs, GraphQL"],
  },
  {
    category: "Tools & Workflow:",
    color: "text-yellow-400",
    items: [
      "• Git, Webpack, Jest",
      "• Performance optimization",
      "• CI/CD, Vercel, Heroku",
    ],
  },
];

export const FEATURED_CONTENT: FeaturedContent[] = [
  {
    title: "📹 Technical Videos",
    items: [
      {
        hashtag: "#tutorial",
        hashtagColor: "text-orange-400",
        title:
          "Learn React JS: How To Use React refs and HTML to Set Focus After Rendering",
        url: "https://www.youtube.com/watch?v=sEmb-8E1ZAg",
      },
      {
        hashtag: "#tutorial",
        hashtagColor: "text-orange-400",
        title: "JavaScript Tutorial: Removing a specific element from an array",
        url: "https://www.youtube.com/watch?v=P69ItyngM-0",
      },
      {
        hashtag: "#tips",
        hashtagColor: "text-green-400",
        title: "4 Productivity Tips to Succeed as a Remote Developer",
        url: "https://www.youtube.com/watch?v=H2rLGuyZL-A",
      },
      {
        hashtag: "#tips",
        hashtagColor: "text-green-400",
        title:
          "3 Things You Need to Know to Become a Remote Software Developer",
        url: "https://www.youtube.com/watch?v=Wk_DRtwrPgg",
      },
      {
        hashtag: "#demo",
        hashtagColor: "text-purple-400",
        title:
          "2022 Solana Summercamp Hackathon Demo: CINI by Team Box In A PARK",
        url: "https://www.loom.com/share/4c90f0b34d5d4843964c953ff56872e4?t=2",
      },
    ],
  },
  {
    title: "✍️ Technical Writing",
    items: [
      {
        title: "JavaScript Array Methods Guide",
        url: "https://www.codementor.io/blog/javascript-array-alukt4k2bm",
      },
      {
        title: "NEAR Protocol Deep Dive (中文)",
        url: "https://medium.com/the-z-institute/near-protocol-%E6%B7%B1%E5%85%A5%E6%B7%BA%E5%87%BA-%E7%AC%AC%E4%B8%80%E7%AB%A0-%E7%B8%BD%E8%A6%BD-742683dc24cd",
      },
    ],
  },
  {
    title: "🎙️ Speaking",
    items: [
      {
        title: "Arc Remote Work Roundtable",
        url: "https://arc.dev/employer-blog/arc-remote-roundtable/",
      },
    ],
  },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    emoji: "📧",
    text: "ting.chaang@gmail.com",
    url: "mailto:ting.chaang@gmail.com",
  },
  {
    emoji: "💼",
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/changting",
  },
  {
    emoji: "🐙",
    text: "GitHub",
    url: "https://github.com/this-ting",
  },
  {
    emoji: "🌐",
    text: "tingbuilds.dev",
    url: "https://www.tingbuilds.dev",
  },
];

export const CONTACT_DETAILS: string[] = [
  "// Response time: Usually within 24 hours",
  "// Location: Taipei, Taiwan (GMT+8)",
  "// Available: Globally for remote work",
];

export const SECTION_TITLES: SectionTitles = {
  WORK_EXPERIENCE: "Where I've Built",
  WINS: "Wins",
  TECH_STACK: "Tech Stack",
  FEATURED_CONTENT: "Featured Content",
  CONTACT: "Contact",
};
