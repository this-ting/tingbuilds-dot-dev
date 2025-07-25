import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title:
    'Ting Chang - Remote Frontend Developer | React & Product-Focused Development',
  description:
    'Remote frontend developer with 3+ years building scalable web applications. Specialized in React, Next.js, and user-focused product development. Available for remote opportunities globally.',
  authors: { url: 'https://tingbuilds.dev', name: 'Ting Chang' },
  keywords: [
    'remote frontend developer',
    'React developer',
    'Next.js developer',
    'product development',
    'remote work',
    'Taiwan developer',
    'web developer',
    'web applications',
  ],
  openGraph: {
    type: 'website',
    url: 'https://tingbuilds.dev',
    title:
      'Ting Chang - Remote Frontend Developer | React & Product-Focused Development',
    description:
      'Remote frontend developer with 3+ years building scalable web applications. Specialized in React, Next.js, and user-focused product development. Available for remote opportunities globally.',
    siteName: 'Ting Chang - Remote Frontend Developer Portfolio',
    // images: [{ url: 'https://example.com/og.png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
