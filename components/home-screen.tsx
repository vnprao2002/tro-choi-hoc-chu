"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import PoolModal from "./pool-modal"
import LetterCustomizationModal from "./letter-customization-modal"

interface HomeScreenProps {
  onStartGame: (settings: any) => void
}

const STORAGE_KEY = "game-settings"

const defaultSettings = {
  category: ["family"],
  roundCount: 5,
  selectedLetters: ["a", "e", "i"],
  isUppercase: false,
}

export default function HomeScreen({ onStartGame }: HomeScreenProps) {
  const [category, setCategory] = useState<string[]>(defaultSettings.category)
  const [roundCount, setRoundCount] = useState(defaultSettings.roundCount)
  const [showPoolModal, setShowPoolModal] = useState(false)
  const [showCustomizeModal, setShowCustomizeModal] = useState(false)
  const [selectedLetters, setSelectedLetters] = useState<string[]>(defaultSettings.selectedLetters)
  const [isUppercase, setIsUppercase] = useState(defaultSettings.isUppercase)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load settings from localStorage after component mounts (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        try {
          const loadedSettings = JSON.parse(saved)
          // Hỗ trợ cả string (cũ) và array (mới)
          const loadedCategory = loadedSettings.category || defaultSettings.category
          setCategory(Array.isArray(loadedCategory) ? loadedCategory : [loadedCategory])
          setRoundCount(loadedSettings.roundCount || defaultSettings.roundCount)
          setSelectedLetters(loadedSettings.selectedLetters || defaultSettings.selectedLetters)
          setIsUppercase(loadedSettings.isUppercase ?? defaultSettings.isUppercase)
        } catch (e) {
          console.error("Error loading settings:", e)
        }
      }
      setIsLoaded(true)
    }
  }, [])

  // Save settings to localStorage whenever they change (only after initial load)
  useEffect(() => {
    if (isLoaded && typeof window !== "undefined") {
      const settings = {
        category,
        roundCount,
        selectedLetters,
        isUppercase,
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    }
  }, [category, roundCount, selectedLetters, isUppercase, isLoaded])

  const categories = [
    { id: "mixed", name: "🔀 Trộn Các Chủ Đề" },
    { id: "family", name: "👨‍👩‍👧 Gia Đình" },
    { id: "healthcare", name: "⚕️ Y Tế" },
    { id: "school", name: "📚 Trường Học" },
    { id: "cooking", name: "🍲 Nấu Ăn" },
    { id: "animals", name: "🐶 Động Vật" },
    { id: "colors", name: "🎨 Màu Sắc" },
    { id: "transport", name: "🚗 Giao Thông" },
    { id: "farm", name: "🚜 Nông Nghiệp" },
    { id: "military", name: "🎖️ Bộ Đội" },
  ]

  const handleLetterCustomization = (letters: string[], uppercase: boolean) => {
    setSelectedLetters(letters)
    setIsUppercase(uppercase)
  }

  const toggleCategory = (catId: string) => {
    setCategory((prev) => {
      // Nếu chọn "mixed", chỉ giữ mixed thôi
      if (catId === "mixed") {
        if (prev.includes("mixed")) {
          // Nếu đã chọn mixed, bỏ chọn và chọn family làm mặc định
          return ["family"]
        } else {
          // Chọn mixed, xóa tất cả các chủ đề khác
          return ["mixed"]
        }
      }
      
      // Nếu đã chọn mixed, không thể chọn chủ đề khác
      if (prev.includes("mixed")) {
        return prev
      }
      
      // Logic bình thường cho các chủ đề khác
      if (prev.includes(catId)) {
        // Bỏ chọn, nhưng phải giữ ít nhất 1 chủ đề
        if (prev.length > 1) {
          return prev.filter((id) => id !== catId)
        }
        return prev
      } else {
        // Thêm chọn, nhưng tối đa 3 chủ đề
        if (prev.length < 3) {
          return [...prev, catId]
        }
        return prev
      }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-pink-200 to-green-200 flex flex-col items-center justify-center p-4">
      {/* Decorative header */}
      <div className="text-center mb-12 animate-bounce">
        <h1 className="text-6xl md:text-7xl font-black text-blue-600 drop-shadow-lg mb-2">🎮 Học Chữ Cái 🎮</h1>
        <p className="text-2xl text-green-700 font-bold">Trò chơi vui cho bé 5-6 tuổi</p>
      </div>

      {/* Settings */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full space-y-8">
        {/* Category selection */}
        <div>
          <h3 className="text-2xl font-black text-gray-800 mb-2">Chọn Chủ Đề (1-3 chủ đề):</h3>
          <p className="text-sm text-gray-600 mb-4">Đã chọn: {category.length}/3</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => toggleCategory(cat.id)}
                disabled={
                  // Disable nếu: đã chọn mixed và đang cố chọn chủ đề khác, hoặc đã chọn 3 chủ đề và cố chọn thêm
                  (category.includes("mixed") && cat.id !== "mixed") ||
                  (!category.includes(cat.id) && category.length >= 3 && !category.includes("mixed"))
                }
                className={`py-4 px-4 rounded-2xl font-bold text-lg transition-all transform ${
                  category.includes(cat.id)
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                }`}
              >
                {category.includes(cat.id) && "✓ "}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Round count selection */}
        <div>
          <h3 className="text-2xl font-black text-gray-800 mb-6">Số Vòng Chơi:</h3>
          <div className="flex gap-4 flex-wrap">
            {[5, 10, 15, 20].map((count) => (
              <button
                key={count}
                onClick={() => setRoundCount(count)}
                className={`py-3 px-8 rounded-2xl font-bold text-lg transition-all ${
                  roundCount === count
                    ? "bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-lg"
                }`}
              >
                {count} vòng
              </button>
            ))}
          </div>
        </div>

        {/* Buttons for pool modal and letter customization */}
        <div className="space-y-3">
          <button
            onClick={() => setShowPoolModal(true)}
            className="w-full py-3 px-6 bg-purple-400 hover:bg-purple-500 text-white font-bold rounded-2xl text-lg transition-all"
          >
            👀 Xem Danh Sách Từ
          </button>
          <button
            onClick={() => setShowCustomizeModal(true)}
            className="w-full py-3 px-6 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-2xl text-lg transition-all"
          >
            ⚙️ Tùy Chỉnh Chữ Cái
          </button>
        </div>

        {/* Display selected categories */}
        <div className="p-4 bg-green-50 rounded-xl">
          <p className="text-sm text-gray-600 mb-2">Chủ đề đã chọn ({category.length}/3):</p>
          <div className="flex gap-2 flex-wrap">
            {category.map((catId) => {
              const cat = categories.find((c) => c.id === catId)
              return (
                <span key={catId} className="bg-green-500 text-white px-3 py-1 rounded-lg font-bold text-sm">
                  {cat?.name || catId}
                </span>
              )
            })}
          </div>
        </div>

        {/* Display selected letters */}
        <div className="p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-gray-600 mb-2">Chữ cái được chọn:</p>
          <div className="flex gap-2 flex-wrap">
            {selectedLetters.map((letter) => (
              <span key={letter} className="bg-blue-500 text-white px-3 py-1 rounded-lg font-bold text-lg">
                {isUppercase ? letter.toUpperCase() : letter}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Start button */}
      <Button
        onClick={() =>
          onStartGame({
            category,
            roundCount,
            selectedLetters,
            isUppercase,
          })
        }
        className="mt-10 px-16 py-8 text-3xl font-black bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white rounded-full shadow-2xl transform hover:scale-110 transition-transform"
      >
        🎮 Bắt Đầu Chơi 🎮
      </Button>

      {/* Footer info */}
      <div className="mt-12 text-center">
        <p className="text-lg font-semibold text-gray-700 drop-shadow">Giúp bé học tiếng Việt một cách vui vẻ!</p>
      </div>

      <PoolModal category={category} isOpen={showPoolModal} onClose={() => setShowPoolModal(false)} />
      <LetterCustomizationModal
        isOpen={showCustomizeModal}
        onClose={() => setShowCustomizeModal(false)}
        onConfirm={handleLetterCustomization}
        category={category}
      />
    </div>
  )
}
