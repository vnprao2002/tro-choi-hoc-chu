"use client"

import { Button } from "@/components/ui/button"

interface GameHeaderProps {
  currentRound: number
  totalRounds: number
  score: number
  onBack: () => void
}

export default function GameHeader({ currentRound, totalRounds, score, onBack }: GameHeaderProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm shadow-lg p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Back button */}
        <Button onClick={onBack} variant="outline" className="px-4 py-2 bg-transparent">
          ← Quay Lại
        </Button>

        {/* Progress info */}
        <div className="flex items-center gap-8">
          <div className="text-center">
            <p className="text-sm text-gray-600">Vòng</p>
            <p className="text-2xl font-bold text-blue-600">
              {currentRound}/{totalRounds}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Điểm</p>
            <p className="text-2xl font-bold text-green-600">{score}</p>
          </div>
        </div>

        {/* Spacer */}
        <div className="w-24"></div>
      </div>
    </div>
  )
}
