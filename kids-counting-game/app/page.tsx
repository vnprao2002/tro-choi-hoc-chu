"use client"

import { useState } from "react"
import { HABITAT_POOL } from "@/lib/data/pools"
import type { HabitatType } from "@/lib/data/pools"
import { DEFAULT_CONFIG } from "@/lib/data/config"
import type { GameConfig } from "@/lib/data/config"
import GameScreen from "@/components/game-screen"
import HabitatSelector from "@/components/habitat-selector"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type View = "habitat-select" | "playing"

export default function Home() {
  const [view, setView] = useState<View>("habitat-select")
  const [selectedHabitat, setSelectedHabitat] = useState<HabitatType | null>(null)
  const [gameConfig, setGameConfig] = useState<GameConfig>(DEFAULT_CONFIG)

  const handleSelectHabitat = (habitatId: HabitatType) => {
    setSelectedHabitat(habitatId)
    setGameConfig({
      ...DEFAULT_CONFIG,
      selectedHabitat: habitatId,
      selectedAnimals: HABITAT_POOL[habitatId].animalIds,
    })
    setView("playing")
  }

  const handleBackToHabitats = () => {
    setView("habitat-select")
    setSelectedHabitat(null)
  }

  if (view === "playing" && selectedHabitat) {
    return <GameScreen habitatId={selectedHabitat} config={gameConfig} onBack={handleBackToHabitats} />
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-yellow-50 to-pink-100 flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Trò Chơi Đếm Số</h1>
          <p className="text-lg md:text-xl text-primary/70 mb-6">Chọn một môi trường để bắt đầu</p>
          <Link href="/teacher">
            <Button
              variant="outline"
              className="rounded-xl bg-white/80 hover:bg-white border-2 border-primary/30 hover:border-primary/50"
            >
              Bảng Điều Khiển Giáo Viên
            </Button>
          </Link>
        </div>

        {/* Habitat Selector */}
        <HabitatSelector habitats={Object.values(HABITAT_POOL)} onSelectHabitat={handleSelectHabitat} />
      </div>
    </main>
  )
}
