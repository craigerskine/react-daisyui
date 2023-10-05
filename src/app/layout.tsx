import './globals.css'
import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'

const sans = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React + Tailwind + DaisyUI + CDL',
  description: 'experiments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-transparent antialiased">
      <body className={sans.className}>{children}</body>
    </html>
  )
}
