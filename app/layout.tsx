import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap", // Added font display swap for better performance
  preload: true,
})

export const metadata: Metadata = {
  title: "Vlaser Solution Cambodia - IT Solutions Provider",
  description:
    "Vlaser Solution Cambodia provides comprehensive IT solutions, managed services, cloud solutions, and cybersecurity for businesses. Founded in 2019, we empower your digital future.",
  keywords:
    "IT solutions, Cambodia, managed services, cloud solutions, cybersecurity, network solutions, technology provider",
  authors: [{ name: "Vlaser Solution Cambodia" }],
  creator: "Vlaser Solution Cambodia",
  publisher: "Vlaser Solution Cambodia",
  openGraph: {
    title: "Vlaser Solution Cambodia - IT Solutions Provider",
    description: "Leading provider of comprehensive IT solutions for businesses in Cambodia",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#6366f1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
