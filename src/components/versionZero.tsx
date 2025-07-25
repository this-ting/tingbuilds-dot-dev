import Image from 'next/image'

export default function VersionZero() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Hi I'm Ting!</h1>
        <p>
          a remote frontend developer who bridges the gap between technical
          excellence and business impact. With 3+ years of experience building
          scalable web applications for remote-first teams, I specialize in
          React ecosystem technologies while bringing a unique perspective from
          my business background.
        </p>
        <p>
          <strong>What makes me different:</strong> I communicate effectively
          across cultures and technical levels, having worked with teams
          spanning Western and Asian markets. I don't just code features—I
          understand the "why" behind them and translate complex technical
          concepts into clear business value.
        </p>
        <p className="flex items-center gap-x-[4px]">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <strong>
            Currently available for remote opportunities worldwide.
          </strong>
        </p>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/changting"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/this-ting"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://twitter.com/this_ting"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:ting.chaang@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          E-mail me
        </a>
      </footer>
    </div>
  )
}
