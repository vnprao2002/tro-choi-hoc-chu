"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

interface HtmlGameWrapperProps {
  gamePath: string // Đường dẫn đến file HTML (ví dụ: "/games/game1/index.html")
  gameName: string
  onBack: () => void
}

export default function HtmlGameWrapper({ gamePath, gameName, onBack }: HtmlGameWrapperProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Đảm bảo iframe load đúng cách
    if (iframeRef.current) {
      iframeRef.current.onload = () => {
        console.log("Game loaded successfully")
      }
    }
  }, [gamePath])

  return (
    <div className="h-screen bg-gradient-to-br from-pink-100 via-purple-100 via-yellow-100 to-blue-100 flex flex-col relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-5xl opacity-15 animate-bounce" style={{ animationDuration: '3s' }}>✨</div>
      <div className="absolute top-20 right-20 text-4xl opacity-15 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>⭐</div>
      <div className="absolute bottom-20 left-20 text-4xl opacity-15 animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '1s' }}>🎈</div>
      <div className="absolute bottom-10 right-10 text-5xl opacity-15 animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '0.3s' }}>🎨</div>

      {/* Header with back button */}
      <div className="relative z-10 p-4 bg-white/80 backdrop-blur-sm flex-shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            onClick={onBack}
            className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all"
          >
            ← Quay Lại
          </Button>
          <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            {gameName}
          </h2>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Game Container */}
      <div ref={containerRef} className="flex-1 relative z-10 p-4 min-h-0">
        <div className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden">
          <iframe
            ref={iframeRef}
            src={gamePath}
            className="w-full h-full border-0"
            title={gameName}
            allow="fullscreen"
            style={{ width: '100%', height: '100%', display: 'block' }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-4 text-sm text-gray-600 relative z-10 bg-white/80 backdrop-blur-sm flex-shrink-0">
        Giáo viên Hà Thị Thanh Hằng - Trường Mầm non Hoa Sữa
      </div>
    </div>
  )
}

