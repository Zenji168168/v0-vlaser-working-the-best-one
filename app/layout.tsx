import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// import localFont from "next/font/local"

// const kantumruyPro = localFont({
//   src: [
//     {
//       path: "./fonts/KantumruyPro-Regular.ttf",
//       weight: "400",
//     },
//     {
//       path: "./fonts/KantumruyPro-Bold.ttf",
//       weight: "700",
//     },
//   ],
//   variable: "--font-khmer",
//   fallback: ["system-ui", "sans-serif"],
// })

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vlaser Solution Cambodia - IT Solutions Provider",
  description:
    "Vlaser Solution Cambodia provides comprehensive IT solutions, managed services, cloud solutions, and cybersecurity for businesses.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
