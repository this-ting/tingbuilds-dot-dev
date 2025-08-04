import {
  HERO_STATS,
  WORK_EXPERIENCE,
  WINS,
  TECH_STACK,
  FEATURED_CONTENT,
  CONTACT_INFO,
  CONTACT_DETAILS,
  SECTION_TITLES,
  type HeroStat,
  type WorkExperience,
  type Win,
  type TechStack,
  type ContentItem,
  type ContactInfo,
} from "@/constants/portfolioData";

const StatCard = ({ value, label, color }: HeroStat) => (
  <div
    className={`bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-${color}-500 hover:scale-105 transition-all duration-300 cursor-default`}
  >
    <div className={`text-2xl font-bold text-${color}-400`}>{value}</div>
    <div className="text-xs text-gray-400">{label}</div>
  </div>
);

const WorkCard = ({
  company,
  industry,
  highlights,
  borderColor,
  textColor,
}: WorkExperience) => (
  <div
    className={`bg-gray-800 rounded-lg p-4 border-l-4 ${borderColor} hover:bg-gray-750 transition-all duration-300`}
  >
    <div className={`${textColor} font-semibold`}>{company}</div>
    <div className="text-gray-400 text-xs">{industry}</div>
    <div className="text-gray-300 mt-1">{highlights}</div>
  </div>
);

const WinCard = ({
  emoji,
  title,
  description,
  tech,
  links,
  hoverColor,
  shadowColor,
}: Win) => (
  <div
    className={`bg-gray-800 rounded-lg p-4 border border-gray-700 ${hoverColor} hover:scale-[1.02] hover:shadow-lg ${shadowColor} transition-all duration-300`}
  >
    <div className="flex items-start justify-between mb-2">
      <div>
        <p className="flex items-center">
          <span className="text-yellow-400 text-lg mr-2">{emoji}</span>
          <span className="text-cyan-400 font-semibold">{title}</span>
        </p>
        <p className="text-gray-300 ml-6">{description}</p>
        <p className="text-gray-500 ml-6 text-xs mt-1">{tech}</p>
      </div>
    </div>
    {links.length > 0 && (
      <div className="ml-6 mt-3 flex flex-wrap gap-3">
        {links.map((link, index: number) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-300 hover:text-blue-200 text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded transition-all duration-200 hover:scale-105"
          >
            <span className="mr-1">{link.emoji}</span> {link.text}
          </a>
        ))}
      </div>
    )}
  </div>
);

const TechSection = ({ category, color, items }: TechStack) => (
  <div>
    <div className={`${color} mt-4 first:mt-0`}>{category}</div>
    <div className="ml-4 text-gray-300">
      {items.map((item: string, index: number) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  </div>
);

const ContentItem = ({ item }: { item: ContentItem }) => (
  <div className="hover:bg-gray-800 p-2 rounded transition-all duration-200">
    {item.hashtag && (
      <div className={`${item.hashtagColor} text-xs mb-1`}>{item.hashtag}</div>
    )}
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
    >
      {item.title}
    </a>
  </div>
);

const ContactLink = ({ emoji, text, url }: ContactInfo) => (
  <p>
    {emoji}{" "}
    <a
      href={url}
      className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  </p>
);

export default function VersionZero() {
  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono text-sm leading-relaxed">
      <div className="max-w-6xl mx-auto p-6">
        {/* Enhanced Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center items-center text-center mb-16">
          <div className="mb-12">
            <div className="text-blue-400 text-lg md:text-xl mb-4 animate-pulse">
              <span className="text-purple-400">function</span>{" "}
              <span className="text-yellow-400">portfolioFor</span>
              <span className="text-white">(</span>
              <span className="text-orange-400">developer</span>
              <span className="text-white"> = </span>
              <span className="text-green-300">&apos;ting-chang&apos;</span>
              <span className="text-white">) {"{"}</span>
            </div>
            <div className="text-purple-400 ml-8 text-lg md:text-xl">
              <span className="text-white">return</span>{" "}
              <span className="text-green-300 text-2xl md:text-4xl font-bold block mt-2">
                &apos;
                <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-green-300 animate-typewriter animate-blink">
                  React Developer & Remote Problem Solver
                </span>
                &apos;
              </span>
              <span className="text-white">;</span>
            </div>
            <div className="text-white text-lg md:text-xl mt-2">{"}"}</div>
          </div>

          <div className="max-w-4xl space-y-6">
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold">
              📍 Taipei, Taiwan → 🌍 Building for the world
            </p>

            <div className="text-lg md:text-xl text-gray-300 space-y-2 max-w-3xl mx-auto">
              <p>
                I craft digital products with{" "}
                <span className="text-yellow-400 font-semibold">React</span>,{" "}
                <span className="text-blue-300 font-semibold">Next.js</span>,
                and{" "}
                <span className="text-purple-300 font-semibold">
                  TypeScript
                </span>
                .
              </p>
              <p>
                Business brain. Developer hands.{" "}
                <span className="text-green-400">Remote-first mindset</span>.
              </p>
              <p>
                Turning ideas into products that{" "}
                <span className="text-orange-400">actually work</span>.
              </p>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
              {HERO_STATS.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="mailto:ting.chaang@gmail.com"
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Let&apos;s Talk →
              </a>
              <a
                href="https://github.com/this-ting"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-600 hover:border-gray-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                🐙 GitHub
              </a>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Work Experience Section */}
            <section>
              <h2 className="text-2xl text-white mb-4 border-b border-gray-700 pb-2">
                {SECTION_TITLES.WORK_EXPERIENCE}
              </h2>
              <div className="space-y-4">
                {WORK_EXPERIENCE.map((work, index) => (
                  <WorkCard key={index} {...work} />
                ))}
              </div>
            </section>

            {/* Wins Section */}
            <section>
              <h2 className="text-2xl text-white mb-4 border-b border-gray-700 pb-2">
                {SECTION_TITLES.WINS}
              </h2>
              <div className="space-y-6">
                {WINS.map((win, index) => (
                  <WinCard key={index} {...win} />
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Side Content */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <section>
              <h2 className="text-2xl text-white mb-4 border-b border-gray-700 pb-2">
                {SECTION_TITLES.TECH_STACK}
              </h2>
              <div className="space-y-2">
                {TECH_STACK.map((tech, index) => (
                  <TechSection key={index} {...tech} />
                ))}
              </div>
            </section>

            {/* Featured Content */}
            <section>
              <h2 className="text-2xl text-white mb-4 border-b border-gray-700 pb-2">
                {SECTION_TITLES.FEATURED_CONTENT}
              </h2>
              <div className="space-y-3">
                {FEATURED_CONTENT.map((content, index) => (
                  <div key={index}>
                    <p className="text-cyan-400">{content.title}</p>
                    <div className="ml-4 space-y-2 text-sm">
                      {content.items.map((item, itemIndex) => (
                        <ContentItem key={itemIndex} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl text-white mb-4 border-b border-gray-700 pb-2">
                {SECTION_TITLES.CONTACT}
              </h2>
              <div className="space-y-2">
                <p className="text-cyan-400">
                  Currently available for React development roles
                </p>
                <p className="text-cyan-400">and freelance opportunities.</p>

                <div className="mt-4 space-y-2">
                  {CONTACT_INFO.map((contact, index) => (
                    <ContactLink key={index} {...contact} />
                  ))}
                </div>

                <div className="mt-6 text-gray-400 text-xs">
                  {CONTACT_DETAILS.map((detail, index) => (
                    <p key={index}>{detail}</p>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer Credits Style - Full Width */}
      <footer className="w-full mt-16 border-t border-gray-700 bg-gray-800">
        <div className="max-w-6xl mx-auto p-6">
          <div className="text-center space-y-2">
            <div className="text-gray-500 text-xs font-mono">
              <div className="mb-4">
                ╔═══════════════════════════════════════════════════════════════╗
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <div className="text-green-400">01: FRONTEND</div>
                  <div className="text-gray-400">
                    React, Next.js, TypeScript
                  </div>
                </div>
                <div>
                  <div className="text-blue-400">02: REMOTE</div>
                  <div className="text-gray-400">
                    10+ Timezones, 500K+ Users
                  </div>
                </div>
                <div>
                  <div className="text-yellow-400">03: BUILDER</div>
                  <div className="text-gray-400">
                    MVP to Scale, 0→1 Products
                  </div>
                </div>
              </div>
              <div className="mb-4">
                ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
              </div>
              <div>
                ╚═══════════════════════════════════════════════════════════════╝
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              <p>Built with Next.js & TypeScript • Deployed on Vercel</p>
              <p className="text-gray-500">
                © 2025 Ting Chang • tingbuilds.dev
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
