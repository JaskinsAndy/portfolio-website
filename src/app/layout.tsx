import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professional Business Solutions | AI Automation & Web Development',
  description: 'Transform your business with cutting-edge AI automation, custom web development, and digital marketing solutions. Boost efficiency and drive growth.',
  keywords: 'AI automation, web development, digital marketing, business solutions, process automation, custom software',
  authors: [{ name: 'Professional Portfolio' }],
  openGraph: {
    title: 'Professional Business Solutions | AI Automation & Web Development',
    description: 'Transform your business with cutting-edge AI automation, custom web development, and digital marketing solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Business Solutions',
    description: 'Transform your business with cutting-edge AI automation and web development.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}