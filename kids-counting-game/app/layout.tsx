import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trò Chơi Đếm Số - Học Tập Vui Vẻ Cho Trẻ Em",
  description:
    "Ứng dụng học tập interactif cho trẻ em 5-6 tuổi. Đếm số qua các môi trường thú vị: Khu vườn, Rừng, Biển, Núi, Trang trại, Nhà. Với ảnh thực và giao diện thân thiện.",
  generator: "v0.app",
  keywords: ["counting", "math", "kids", "Vietnamese", "educational", "game"],
  authors: [{ name: "Kids Counting Game" }],
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

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#a78bfa" },
    { media: "(prefers-color-scheme: dark)", color: "#7c3aed" },
  ],
  userScalable: true,
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
