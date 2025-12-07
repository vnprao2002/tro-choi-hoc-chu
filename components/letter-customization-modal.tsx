"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { VIETNAMESE_BASE_LETTERS } from "@/lib/vietnamese-alphabet"

interface LetterCustomizationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: (letters: string[], isUppercase: boolean) => void
  category: string | string[]
}

export default function LetterCustomizationModal({
  isOpen,
  onClose,
  onConfirm,
  category,
}: LetterCustomizationModalProps) {
  const [selectedLetters, setSelectedLetters] = useState<string[]>(["a", "e", "i"])
  const [isUppercase, setIsUppercase] = useState(false)

  const toggleLetter = (letter: string) => {
    setSelectedLetters((prev) => {
      if (prev.includes(letter)) {
        return prev.filter((l) => l !== letter)
      } else if (prev.length < 3) {
        return [...prev, letter]
      }
      return prev
    })
  }

  const handleConfirm = () => {
    onConfirm(selectedLetters, isUppercase)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-3xl font-black text-blue-600 mb-6">Tùy Chỉnh Chữ Cái</h2>

        {/* Uppercase/Lowercase toggle */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setIsUppercase(false)}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-lg transition-all ${
              !isUppercase ? "bg-blue-500 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Chữ Thường
          </button>
          <button
            onClick={() => setIsUppercase(true)}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-lg transition-all ${
              isUppercase ? "bg-blue-500 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Chữ Hoa
          </button>
        </div>

        {/* Letter selection info */}
        <p className="text-gray-700 font-semibold mb-4">Chọn 1-3 chữ cái để tập (đã chọn {selectedLetters.length}/3):</p>

        {/* Selected letters display */}
        {selectedLetters.length > 0 && (
          <div className="mb-6 p-4 bg-blue-100 rounded-xl flex gap-3 flex-wrap">
            {selectedLetters.map((letter) => (
              <div
                key={letter}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-xl flex items-center gap-2"
              >
                {isUppercase ? letter.toUpperCase() : letter}
                <button onClick={() => toggleLetter(letter)} className="ml-2 text-lg font-bold hover:text-blue-200">
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Vietnamese alphabet grid */}
        <div className="grid grid-cols-6 gap-3 mb-8">
          {VIETNAMESE_BASE_LETTERS.map((letter) => (
            <button
              key={letter}
              onClick={() => toggleLetter(letter)}
              disabled={selectedLetters.length >= 3 && !selectedLetters.includes(letter)}
              className={`py-3 px-3 rounded-lg font-bold text-lg transition-all ${
                selectedLetters.includes(letter)
                  ? "bg-blue-500 text-white shadow-lg scale-110"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              }`}
            >
              {isUppercase ? letter.toUpperCase() : letter}
            </button>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-4">
          <Button
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-gray-400 hover:bg-gray-500 text-white font-bold rounded-xl text-lg"
          >
            Hủy
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={selectedLetters.length === 0}
            className="flex-1 py-3 px-4 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold rounded-xl text-lg"
          >
            Xác Nhận {selectedLetters.length > 0 && `(${selectedLetters.length} chữ)`}
          </Button>
        </div>
      </div>
    </div>
  )
}
