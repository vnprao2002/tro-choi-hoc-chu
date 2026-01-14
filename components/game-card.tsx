"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ImageWithPlaceholder from "./ui/image-with-placeholder"

interface GameCardProps {
  letter: string
  image: string
  isSelected: boolean
  isCorrect: boolean
  answered: boolean
  onClick: () => void
}

export default function GameCard({ letter, image, isSelected, isCorrect, answered, onClick }: GameCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return

    if (isSelected && answered) {
      if (isCorrect) {
        // Success animation - zoom and pulse
        gsap.to(cardRef.current, {
          scale: 1.15,
          duration: 0.3,
          repeat: 2,
          yoyo: true,
        })
      } else {
        // Error animation - shake
        gsap.to(cardRef.current, {
          x: -10,
          duration: 0.1,
          repeat: 5,
          yoyo: true,
        })
      }
    }
  }, [isSelected, answered, isCorrect])

  const borderColor = !answered ? "border-blue-300" : isCorrect ? "border-green-500" : "border-red-500"

  const bgColor = !answered ? "bg-white hover:bg-blue-50" : isCorrect ? "bg-green-100" : "bg-red-100"

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`
        cursor-pointer rounded-2xl p-6 shadow-lg transition-all
        border-4 ${borderColor} ${bgColor}
        min-h-64 flex flex-col items-center justify-center
        hover:shadow-xl transform hover:scale-105 active:scale-95
      `}
    >
      {/* Card letter */}
      <div className="text-6xl font-bold text-blue-600 mb-4">{letter}</div>

      {/* Card image */}
      <div className="relative w-24 h-24 mb-4">
        <ImageWithPlaceholder src={image} alt="card" />
      </div>

      {/* Feedback indicator */}
      {answered && isSelected && <div className="text-3xl">{isCorrect ? "✓" : "✗"}</div>}
    </div>
  )
}
