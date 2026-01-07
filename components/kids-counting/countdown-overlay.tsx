"use client"

import { useEffect, useState } from "react"
import { playSound } from "@/lib/kids-counting/audio-utils"

interface CountdownOverlayProps {
  onComplete: () => void
}

export function AnimalCountdownOverlay({ onComplete }: CountdownOverlayProps) {
  const [count, setCount] = useState(3)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    playSound("countdown")

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev - 1
        if (next > 0) {
          playSound("countdown")
        }
        return next
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (count === 0) {
      setTimeout(() => {
        setIsVisible(false)
        onComplete()
      }, 300)
    }
  }, [count, onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm">
      <div
        className="text-9xl font-bold text-white animate-bounce drop-shadow-2xl"
        style={{
          animationDuration: "0.5s",
        }}
      >
        {count === 0 ? "🎮" : count}
      </div>
    </div>
  )
}

