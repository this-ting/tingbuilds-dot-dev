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
              <span className="text-green-300">'ting-chang'</span>
              <span className="text-white">) {"{"}</span>
            </div>
            <div className="text-purple-400 ml-8 text-lg md:text-xl">
              <span className="text-white">return</span>{" "}
              <span className="text-green-300 text-2xl md:text-4xl font-bold block mt-2">
                &apos;
                <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-green-300">
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500 hover:scale-105 transition-all duration-300 cursor-default">
                <div className="text-2xl font-bold text-blue-400">10+</div>
                <div className="text-xs text-gray-400">Timezones</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-green-500 hover:scale-105 transition-all duration-300 cursor-default">
                <div className="text-2xl font-bold text-green-400">500K+</div>
                <div className="text-xs text-gray-400">Users Served</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-purple-500 hover:scale-105 transition-all duration-300 cursor-default">
                <div className="text-2xl font-bold text-purple-400">177%</div>
                <div className="text-xs text-gray-400">Growth Driven</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-yellow-500 hover:scale-105 transition-all duration-300 cursor-default">
                <div className="text-2xl font-bold text-yellow-400">$35K</div>
                <div className="text-xs text-gray-400">Prize Won</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="mailto:ting.chaang@gmail.com"
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Let's Talk →
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
            {/* Simplified Work Section */}
            <section>
              <h2 className="text-2xl text-white mb-4 border-b border-gray-700 pb-2">
                Where I've Built
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500 hover:bg-gray-750 transition-all duration-300">
                  <div className="text-blue-300 font-semibold">
                    Polymer Capital
                  </div>
                  <div className="text-gray-400 text-xs">
                    Financial Technology
                  </div>
                  <div className="text-gray-300 mt-1">
                    50% performance boost • 1000+ daily users • React dashboards
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-purple-500 hover:bg-gray-750 transition-all duration-300">
                  <div className="text-purple-300 font-semibold">
                    Arc & Codementor
                  </div>
                  <div className="text-gray-400 text-xs">
                    Education Technology
                  </div>
                  <div className="text-gray-300 mt-1">
                    177% user growth • 500K+ users • Next.js platform
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-green-500 hover:bg-gray-750 transition-all duration-300">
                  <div className="text-green-300 font-semibold">Gempathy</div>
                  <div className="text-gray-400 text-xs">
                    E-commerce Platform
                  </div>
                  <div className="text-gray-300 mt-1">
                    MVP in 4 weeks • Full platform • Next.js + Strapi
                  </div>
                </div>
              </div>
            </section>

            {/* Wins Section */}
            <section>
              <h2 className="text-2xl text-white mb-4 border-b border-gray-700 pb-2">
                Wins
              </h2>
              <div className="space-y-6">
                {/* Solana Summer Camp */}
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-yellow-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 ">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="flex items-center">
                        <span className="text-yellow-400 text-lg mr-2">🏆</span>
                        <span className="text-cyan-400 font-semibold">
                          Solana Summer Camp Hackathon
                        </span>
                      </p>
                      <p className="text-gray-300 ml-6">
                        2nd Place Mobile Track | $35,000 Prize | 750 projects
                      </p>
                      <p className="text-gray-500 ml-6 text-xs mt-1">
                        // React Native, TypeScript, Solana/web3.js
                      </p>
                    </div>
                  </div>
                  <div className="ml-6 mt-3 flex flex-wrap gap-3">
                    <a
                      href="https://github.com/BoxInThePARK/cini-dapp-v0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-300 hover:text-blue-200 text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded transition-all duration-200 hover:scale-105"
                    >
                      <span className="mr-1">🐙</span> GitHub
                    </a>
                    <a
                      href="https://solana.com/news/solana-summer-camp-winners"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-orange-300 hover:text-orange-200 text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded transition-all duration-200 hover:scale-105"
                    >
                      <span className="mr-1">📰</span> Winner Announcement
                    </a>
                  </div>
                </div>

                {/* Solana Hackathon 3.0 */}
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-yellow-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 ">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="flex items-center">
                        <span className="text-yellow-400 text-lg mr-2">🏆</span>
                        <span className="text-cyan-400 font-semibold">
                          Taiwan Solana Hackathon 3.0
                        </span>
                      </p>
                      <p className="text-gray-300 ml-6">
                        1st Place Raydium Challenge | 30-hour sprint
                      </p>
                      <p className="text-gray-500 ml-6 text-xs mt-1">
                        // TypeScript, DeFi protocols
                      </p>
                    </div>
                  </div>
                  <div className="ml-6 mt-3 flex flex-wrap gap-3">
                    <a
                      href="https://github.com/crispyfisherman/raydium-boxing-scaffold-v0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-300 hover:text-blue-200 text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded transition-all duration-200 hover:scale-105"
                    >
                      <span className="mr-1">🐙</span> GitHub
                    </a>
                    <a
                      href="https://x.com/EpochsStudio/status/1523633894716841985"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-orange-300 hover:text-orange-200 text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded transition-all duration-200 hover:scale-105"
                    >
                      <span className="mr-1">📰</span> Winner Announcement
                    </a>
                  </div>
                </div>

                {/* DevProjects Growth */}
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-green-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 ">
                  <p className="flex items-center">
                    <span className="text-green-400 text-lg mr-2">🚀</span>
                    <span className="text-cyan-400 font-semibold">
                      DevProjects Platform Growth
                    </span>
                  </p>
                  <p className="ml-6 text-gray-300">
                    177% user increase through React optimization
                  </p>
                  <p className="ml-6 text-gray-500 text-xs">
                    // 500K+ monthly users served
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Side Content */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <section>
              <h2 className="text-2xl text-white mb-4 border-b border-gray-700 pb-2">
                Tech Stack
              </h2>
              <div className="space-y-2">
                <div className="text-yellow-400">Frontend:</div>
                <div className="ml-4 text-gray-300">
                  <div>• React, Next.js, TypeScript</div>
                  <div>• JavaScript (ES6+), HTML5, CSS3</div>
                  <div>• Tailwind CSS, Sass/SCSS</div>
                </div>

                <div className="text-yellow-400 mt-4">State & Data:</div>
                <div className="ml-4 text-gray-300">
                  <div>• Redux, Context API, SWR</div>
                  <div>• RESTful APIs, GraphQL</div>
                </div>

                <div className="text-yellow-400 mt-4">Tools & Workflow:</div>
                <div className="ml-4 text-gray-300">
                  <div>• Git, Webpack, Jest</div>
                  <div>• Performance optimization</div>
                  <div>• CI/CD, Vercel, Heroku</div>
                </div>
              </div>
            </section>

            {/* Featured Content with Hashtags */}
            <section>
              <h2 className="text-2xl text-white mb-4 border-b border-gray-700 pb-2">
                Featured Content
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-cyan-400">📹 Technical Videos</p>
                  <div className="ml-4 space-y-2 text-sm">
                    <div className="hover:bg-gray-800 p-2 rounded transition-all duration-200">
                      <div className="text-orange-400 text-xs mb-1">
                        #tutorial
                      </div>
                      <a
                        href="https://www.youtube.com/watch?v=sEmb-8E1ZAg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
                      >
                        Learn React JS: How To Use React refs and HTML to Set
                        Focus After Rendering
                      </a>
                    </div>

                    <div className="hover:bg-gray-800 p-2 rounded transition-all duration-200">
                      <div className="text-orange-400 text-xs mb-1">
                        #tutorial
                      </div>
                      <a
                        href="https://www.youtube.com/watch?v=P69ItyngM-0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
                      >
                        JavaScript Tutorial: Removing a specific element from an
                        array
                      </a>
                    </div>

                    <div className="hover:bg-gray-800 p-2 rounded transition-all duration-200">
                      <div className="text-green-400 text-xs mb-1">#tips</div>
                      <a
                        href="https://www.youtube.com/watch?v=H2rLGuyZL-A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
                      >
                        4 Productivity Tips to Succeed as a Remote Developer
                      </a>
                    </div>

                    <div className="hover:bg-gray-800 p-2 rounded transition-all duration-200">
                      <div className="text-green-400 text-xs mb-1">#tips</div>
                      <a
                        href="https://www.youtube.com/watch?v=Wk_DRtwrPgg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
                      >
                        3 Things You Need to Know to Become a Remote Software
                        Developer
                      </a>
                    </div>

                    <div className="hover:bg-gray-800 p-2 rounded transition-all duration-200">
                      <div className="text-purple-400 text-xs mb-1">#demo</div>
                      <a
                        href="https://www.loom.com/share/4c90f0b34d5d4843964c953ff56872e4?t=2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
                      >
                        2022 Solana Summercamp Hackathon Demo: CINI by Team Box
                        In A PARK
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-cyan-400">✍️ Technical Writing</p>
                  <div className="ml-4 space-y-2 text-sm">
                    <div className="hover:bg-gray-800 p-2 rounded transition-all duration-200">
                      <a
                        href="https://www.codementor.io/blog/javascript-array-alukt4k2bm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
                      >
                        JavaScript Array Methods Guide
                      </a>
                    </div>
                    <div className="hover:bg-gray-800 p-2 rounded transition-all duration-200">
                      <a
                        href="https://medium.com/the-z-institute/near-protocol-%E6%B7%B1%E5%85%A5%E6%B7%BA%E5%87%BA-%E7%AC%AC%E4%B8%80%E7%AB%A0-%E7%B8%BD%E8%A6%BD-742683dc24cd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
                      >
                        NEAR Protocol Deep Dive (中文)
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-cyan-400">🎙️ Speaking</p>
                  <div className="ml-4 text-sm">
                    <div className="hover:bg-gray-800 p-2 rounded transition-all duration-200">
                      <a
                        href="https://arc.dev/employer-blog/arc-remote-roundtable/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
                      >
                        Arc Remote Work Roundtable
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl text-white mb-4 border-b border-gray-700 pb-2">
                Contact
              </h2>
              <div className="space-y-2">
                <p className="text-cyan-400">
                  Currently available for React development roles
                </p>
                <p className="text-cyan-400">and freelance opportunities.</p>

                <div className="mt-4 space-y-2">
                  <p>
                    📧{" "}
                    <a
                      href="mailto:ting.chaang@gmail.com"
                      className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ting.chaang@gmail.com
                    </a>
                  </p>
                  <p>
                    💼{" "}
                    <a
                      href="https://www.linkedin.com/in/changting"
                      className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </p>
                  <p>
                    🐙{" "}
                    <a
                      href="https://github.com/this-ting"
                      className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </p>
                  <p>
                    🌐{" "}
                    <a
                      href="https://www.tingbuilds.dev"
                      className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      tingbuilds.dev
                    </a>
                  </p>
                </div>

                <div className="mt-6 text-gray-400 text-xs">
                  <p>// Response time: Usually within 24 hours</p>
                  <p>// Location: Taipei, Taiwan (GMT+8)</p>
                  <p>// Available: Globally for remote work</p>
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
