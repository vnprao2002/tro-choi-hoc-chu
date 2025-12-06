"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { getAllVietnameseLetter } from "@/lib/word-pools"

interface LetterSelectionProps {
  category: string
  roundCount: number
  onSelectLetter: (letter: string) => void
  onBack: () => void
}

export default function LetterSelection({ category, roundCount, onSelectLetter, onBack }: LetterSelectionProps) {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  const letters = getAllVietnameseLetter()

  const handleSelectLetter = () => {
    if (selectedLetter) {
      onSelectLetter(selectedLetter)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-black text-blue-600 mb-4">Chọn Chữ Cái</h1>
        <p className="text-xl text-gray-700">Hãy chọn chữ cái bạn muốn tìm!</p>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full mb-8">
        <div className="grid grid-cols-6 md:grid-cols-8 gap-3">
          {letters.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`p-4 rounded-xl font-black text-2xl transition-all transform ${
                selectedLetter === letter
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-110"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-lg"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Control buttons */}
      <div className="flex gap-4 max-w-2xl w-full">
        <Button
          onClick={onBack}
          className="flex-1 px-6 py-4 bg-gray-400 hover:bg-gray-500 text-white font-bold rounded-2xl text-lg"
        >
          ← Quay Lại
        </Button>
        <Button
          onClick={handleSelectLetter}
          disabled={!selectedLetter}
          className="flex-1 px-6 py-4 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 disabled:from-gray-300 disabled:to-gray-300 text-white font-bold rounded-2xl text-lg"
        >
          ✓ Tiếp Tục
        </Button>
      </div>
    </div>
  )
}
