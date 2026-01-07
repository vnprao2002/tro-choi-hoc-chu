"use client"

import { useState } from "react"
import { AnimalCountingGameScreen } from "@/components/kids-counting/animal-counting-game-screen"
import { AnimalHabitatSelector } from "@/components/kids-counting/habitat-selector"
import { Button } from "@/components/ui/button"
import type { GameConfig } from "@/lib/kids-counting/data/config"
import { DEFAULT_CONFIG } from "@/lib/kids-counting/data/config"
import type { HabitatType } from "@/lib/kids-counting/data/pools"
import { HABITAT_POOL } from "@/lib/kids-counting/data/pools"

type View = "habitat-select" | "playing"

interface AnimalCountingGameProps {
  onBack: () => void
}

export function AnimalCountingGame({ onBack }: AnimalCountingGameProps) {
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
    return <AnimalCountingGameScreen habitatId={selectedHabitat} config={gameConfig} onBack={handleBackToHabitats} />
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-yellow-50 to-pink-100 flex flex-col items-center justify-center p-4 md:p-8">
      <div className="absolute top-4 left-4 z-20">
        <Button
          onClick={onBack}
          className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all"
        >
          ← Quay Lại
        </Button>
      </div>

      <div className="w-full max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Trò Chơi Đếm Động Vật</h1>
          <p className="text-lg md:text-xl text-primary/70 mb-6">Chọn một môi trường để bắt đầu</p>
        </div>

        <AnimalHabitatSelector habitats={Object.values(HABITAT_POOL)} onSelectHabitat={handleSelectHabitat} />
      </div>
    </main>
  )
}

