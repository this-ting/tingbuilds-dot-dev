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
    className={`bg-gray-800 rounded-lg p-2 sm:p-2 border border-gray-700 hover:scale-105 transition-all duration-300`}
  >
    <div
      className={`text-lg sm:text-xl md:text-2xl font-bold text-${color}-400`}
    >
      {value}
    </div>
    <div className="text-xs sm:text-sm text-gray-400">{label}</div>
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
      <div className="max-w-6xl mx-auto p-6 pt-18">
        {/* Enhanced Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center items-center text-center mb-8 md:mb-16">
          {/* Clean Function Declaration - Main Focus */}
          <div className="mb-8 md:mb-12 w-full max-w-5xl">
            <div className="space-y-4 md:space-y-6">
              {/* Function signature */}
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-mono text-gray-300">
                <span className="text-purple-400 font-bold">function</span>{" "}
                <span className="text-yellow-400 font-bold">portfolioFor</span>
                <span className="text-white">(</span>
                <span className="text-orange-400 italic">developer</span>
                <span className="text-white"> = </span>
                <span className="text-green-300 font-semibold">
                  &apos;ting-chang&apos;
                </span>
                <span className="text-white">) {"{}"}</span>
              </div>

              {/* Main title - the return value */}
              <div className="py-6 md:py-8">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-green-400 block mb-3">
                    React Developer
                  </span>
                  <span className="text-cyan-400 block">
                    &amp; Remote Problem Solver
                  </span>
                </div>
              </div>

              {/* Subtle closing */}
              <div className="text-sm sm:text-base md:text-lg font-mono text-gray-400">
                <span>{`// Building digital solutions worldwide`}</span>
              </div>
            </div>
          </div>

          {/* Supporting content */}
          <div className="w-full max-w-4xl space-y-8 px-4">
            {/* Location */}
            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-mono">
              📍 Taipei, Taiwan → 🌍 Building for the world
            </p>

            {/* Description */}
            <div className="text-base sm:text-lg md:text-xl text-gray-300 space-y-4 max-w-3xl mx-auto leading-relaxed">
              <p className="font-light">
                I craft digital products with{" "}
                <span className="text-yellow-400 font-semibold">React</span>,{" "}
                <span className="text-blue-300 font-semibold">Next.js</span>,
                and{" "}
                <span className="text-purple-300 font-semibold">
                  TypeScript
                </span>
                .
              </p>
              <p className="font-light">
                Business brain. Developer hands.{" "}
                <span className="text-green-400 font-medium">
                  Remote-first mindset
                </span>
                .
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
              {HERO_STATS.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 pt-4">
              <a
                href="mailto:ting.chaang@gmail.com"
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base relative overflow-hidden"
              >
                <span className="flex flex-col items-center justify-center gap-1">
                  <span className="flex items-center gap-2">
                    <span className="relative flex items-center justify-center">
                      <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                      <span className="absolute w-3 h-3 bg-green-400 rounded-full animate-pulse opacity-75"></span>
                      <span className="absolute w-4 h-4 border border-green-400 rounded-full animate-ping opacity-30"></span>
                    </span>
                    <span>Let&apos;s Talk →</span>
                  </span>
                  <span className="text-xs opacity-70 text-green-100">
                    Available now
                  </span>
                </span>
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
      <footer className="w-full mt-8 md:mt-16 border-t border-gray-700 bg-gray-800">
        <div className="max-w-6xl mx-auto p-4 md:p-6">
          <div className="text-center space-y-4">
            {/* Decorative border using CSS */}
            <div className="relative border-2 border-gray-600 rounded-lg p-4 md:p-6 mx-2 md:mx-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-xs md:text-sm font-mono">
                <div className="space-y-1">
                  <div className="text-green-400 font-bold">01: FRONTEND</div>
                  <div className="text-gray-400 text-xs">
                    React, Next.js, TypeScript
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-blue-400 font-bold">02: REMOTE</div>
                  <div className="text-gray-400 text-xs">
                    10+ Timezones, 500K+ Users
                  </div>
                </div>
                <div className="space-y-1 sm:col-span-2 md:col-span-1">
                  <div className="text-yellow-400 font-bold">03: BUILDER</div>
                  <div className="text-gray-400 text-xs">
                    MVP to Scale, 0→1 Products
                  </div>
                </div>
              </div>

              {/* Progress bar style decoration */}
              <div className="mt-4 md:mt-6 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-yellow-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="text-gray-400 text-xs sm:text-sm space-y-1 px-4">
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
