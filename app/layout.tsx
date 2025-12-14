import type React from "react"
import type { Metadata } from "next"
import { Lexend } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const lexend = Lexend({ 
  subsets: ["latin", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-lexend"
})

export const metadata: Metadata = {
  title: "Học Tiếng Việt - Trò Chơi Chữ Cái",
  description: "Trò chơi học chữ Việt vui vẻ dành cho trẻ em 5-6 tuổi",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${lexend.variable} font-sans antialiased`} style={{ fontFamily: 'Lexend, sans-serif' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
