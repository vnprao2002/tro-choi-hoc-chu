"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface GameMenuProps {
  onSelectGame: (gameId: string) => void
}

const games = [
  {
    id: "letter-game",
    name: "🎮 Học Chữ Cái",
    description: "Trò chơi học chữ cái tiếng Việt",
    icon: "🎮",
  },
  {
    id: "counting-game",
    name: "🔢 Trò Chơi Số Đếm",
    description: "Kéo số vào nhóm đồ vật",
    icon: "🔢",
  },
  {
    id: "animal-counting",
    name: "🦁 Đếm Động Vật",
    description: "Đếm số lượng con vật trong môi trường",
    icon: "🦁",
  },
  {
    id: "chiec-non-chu-cai",
    name: "🎩 Chiếc Nón Chữ Cái",
    description: "Trò chơi với chiếc nón chữ cái",
    icon: "🎩",
  },
  {
    id: "learn-letters-game",
    name: "🍎 Hái Trái Cây",
    description: "Trò chơi hái trái cây thú vị",
    icon: "🍎",
  },
  {
    id: "nong-trai",
    name: "🚜 Nông Trại",
    description: "Trò chơi nông trại vui nhộn",
    icon: "🚜",
  },
  {
    id: "tim-chu-khac-biet",
    name: "🔍 Tìm Chữ Khác Biệt",
    description: "Tìm chữ cái khác biệt",
    icon: "🔍",
  },
  {
    id: "tim-tu",
    name: "🔎 Tìm Từ",
    description: "Trò chơi tìm từ thú vị",
    icon: "🔎",
  },
]

export default function GameMenu({ onSelectGame }: GameMenuProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 via-yellow-100 to-blue-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>✨</div>
      <div className="absolute top-20 right-20 text-5xl opacity-20 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>⭐</div>
      <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '1s' }}>🎈</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '0.3s' }}>🎨</div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-lg mb-2">
          🎮 Trò Chơi Giáo Dục 🎮
        </h1>
        <p className="text-2xl text-purple-600 font-bold">Chọn trò chơi bạn muốn chơi</p>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full relative z-10">
        {games.map((game) => (
          <button
            key={game.id}
            onClick={() => onSelectGame(game.id)}
            className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 hover:shadow-3xl transform hover:scale-105 transition-all text-left group"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
              {game.icon}
            </div>
            <h3 className="text-2xl font-black text-gray-800 mb-2">{game.name}</h3>
            <p className="text-gray-600">{game.description}</p>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center relative z-10">
        <p className="text-base font-medium text-gray-600">Giáo viên Hà Thị Thanh Hằng - Trường Mầm non Hoa Sữa</p>
      </div>
    </div>
  )
}

