"use client"

import { useState } from "react"
import { HABITAT_POOL, ANIMAL_POOL } from "@/lib/data/pools"
import type { HabitatType } from "@/lib/data/pools"
import { DEFAULT_CONFIG } from "@/lib/data/config"
import type { GameConfig } from "@/lib/data/config"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"

interface TeacherState extends GameConfig {
  isGameStarted: boolean
}

export default function TeacherPanel() {
  const [config, setConfig] = useState<TeacherState>({
    ...DEFAULT_CONFIG,
    isGameStarted: false,
  })

  const currentHabitat = HABITAT_POOL[config.selectedHabitat as HabitatType]
  const habitatAnimals = currentHabitat ? currentHabitat.animalIds.map((id) => ANIMAL_POOL[id]) : []

  const handleHabitatChange = (habitatId: HabitatType) => {
    setConfig((prev) => ({
      ...prev,
      selectedHabitat: habitatId,
      selectedAnimals: HABITAT_POOL[habitatId].animalIds,
    }))
  }

  const handleAnimalToggle = (animalId: string) => {
    setConfig((prev) => ({
      ...prev,
      selectedAnimals: prev.selectedAnimals.includes(animalId)
        ? prev.selectedAnimals.filter((id) => id !== animalId)
        : [...prev.selectedAnimals, animalId],
    }))
  }

  const handleSelectAllAnimals = () => {
    setConfig((prev) => ({
      ...prev,
      selectedAnimals: habitatAnimals.map((a) => a.id),
    }))
  }

  const handleDeselectAllAnimals = () => {
    setConfig((prev) => ({
      ...prev,
      selectedAnimals: [],
    }))
  }

  const handleNumberRangeChange = (type: "min" | "max", value: number) => {
    if (type === "min") {
      const newMin = Math.max(1, Math.min(value, config.numberRange.max))
      setConfig((prev) => ({
        ...prev,
        numberRange: {
          ...prev.numberRange,
          min: newMin,
        },
      }))
    } else {
      const newMax = Math.max(config.numberRange.min, Math.min(value, 10))
      setConfig((prev) => ({
        ...prev,
        numberRange: {
          ...prev.numberRange,
          max: newMax,
        },
      }))
    }
  }

  const startGame = () => {
    if (config.selectedHabitat && config.selectedAnimals.length > 0) {
      setConfig((prev) => ({
        ...prev,
        isGameStarted: true,
      }))
    }
  }

  if (config.isGameStarted) {
    return (
      <div>
        <GameSessionWrapper
          config={config}
          onBack={() =>
            setConfig((prev) => ({
              ...prev,
              isGameStarted: false,
            }))
          }
        />
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">Bảng Điều Khiển Giáo Viên</h1>
            <p className="text-lg text-foreground/70">Cấu hình trò chơi cho lớp học của bạn</p>
          </div>
          <Link href="/">
            <Button variant="outline" className="rounded-xl bg-transparent">
              ← Trò Chơi
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left column - Settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Habitat Selection */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-primary mb-4">1. Chọn Môi Trường</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {Object.values(HABITAT_POOL).map((habitat) => (
                  <button
                    key={habitat.id}
                    onClick={() => handleHabitatChange(habitat.id)}
                    className={`p-4 rounded-xl font-semibold transition-all border-2 text-center text-sm md:text-base ${
                      config.selectedHabitat === habitat.id
                        ? "border-primary bg-primary/10 text-primary shadow-md"
                        : "border-border bg-background hover:border-primary/50"
                    }`}
                  >
                    <div className="text-3xl mb-2">
                      {habitat.id === "garden"
                        ? "🌻"
                        : habitat.id === "forest"
                          ? "🌲"
                          : habitat.id === "sea"
                            ? "🌊"
                            : habitat.id === "mountain"
                              ? "⛰️"
                              : habitat.id === "farm"
                                ? "🚜"
                                : "🏠"}
                    </div>
                    {habitat.nameVi}
                  </button>
                ))}
              </div>
            </div>

            {/* Animal Selection */}
            {currentHabitat && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-primary">2. Chọn Các Con Vật</h2>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleSelectAllAnimals}
                      size="sm"
                      variant="outline"
                      className="text-xs bg-transparent"
                    >
                      Tất Cả
                    </Button>
                    <Button
                      onClick={handleDeselectAllAnimals}
                      size="sm"
                      variant="outline"
                      className="text-xs bg-transparent"
                    >
                      Bỏ Chọn
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {habitatAnimals.map((animal) => (
                    <button
                      key={animal.id}
                      onClick={() => handleAnimalToggle(animal.id)}
                      className={`p-3 rounded-lg font-semibold transition-all border-2 text-sm md:text-base ${
                        config.selectedAnimals.includes(animal.id)
                          ? "border-secondary bg-secondary/10 text-secondary shadow-md"
                          : "border-border bg-background hover:border-secondary/50"
                      }`}
                    >
                      {animal.nameVi}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Number Range */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-primary mb-4">3. Khoảng Số Để Đếm</h2>
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-semibold text-foreground/70 mb-2 block">
                    Số Tối Thiểu: {config.numberRange.min}
                  </label>
                  <Slider
                    value={[config.numberRange.min]}
                    onValueChange={(val) => handleNumberRangeChange("min", val[0])}
                    min={1}
                    max={config.numberRange.max}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground/70 mb-2 block">
                    Số Tối Đa: {config.numberRange.max}
                  </label>
                  <Slider
                    value={[config.numberRange.max]}
                    onValueChange={(val) => handleNumberRangeChange("max", val[0])}
                    min={config.numberRange.min}
                    max={10}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Total Levels */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-primary mb-4">4. Số Màn Chơi</h2>
              <div className="flex gap-2 flex-wrap">
                {[5, 10, 15, 20].map((level) => (
                  <button
                    key={level}
                    onClick={() => setConfig((prev) => ({ ...prev, totalLevels: level }))}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all border-2 ${
                      config.totalLevels === level
                        ? "bg-primary text-white border-primary"
                        : "bg-background border-border hover:border-primary"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Total Hearts */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-primary mb-4">5. Số Tim (Mạng Sống)</h2>
              <div className="flex gap-2 flex-wrap">
                {[1, 2, 3, 5].map((hearts) => (
                  <button
                    key={hearts}
                    onClick={() => setConfig((prev) => ({ ...prev, totalHearts: hearts }))}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all border-2 ${
                      config.totalHearts === hearts
                        ? "bg-secondary text-white border-secondary"
                        : "bg-background border-border hover:border-secondary"
                    }`}
                  >
                    {hearts} Tim
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Level */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-primary mb-4">6. Mức Độ Khó</h2>
              <div className="flex gap-2 flex-wrap">
                {["easy", "normal", "hard"].map((level) => (
                  <button
                    key={level}
                    onClick={() => setConfig((prev) => ({ ...prev, levelDifficulty: level as any }))}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all border-2 ${
                      config.levelDifficulty === level
                        ? "bg-accent text-white border-accent"
                        : "bg-background border-border hover:border-accent"
                    }`}
                  >
                    {level === "easy" ? "Dễ" : level === "normal" ? "Bình Thường" : "Khó"}
                  </button>
                ))}
              </div>
            </div>

            {/* Random Mode Toggle */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-primary">7. Chế Độ Ngẫu Nhiên Con Vật</h2>
                <button
                  onClick={() => setConfig((prev) => ({ ...prev, randomizeAnimals: !prev.randomizeAnimals }))}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                    config.randomizeAnimals ? "bg-primary" : "bg-border"
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      config.randomizeAnimals ? "translate-x-7" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <p className="text-sm text-foreground/60 mt-2">
                {config.randomizeAnimals
                  ? "Bật: Con vật sẽ hiển thị ngẫu nhiên mỗi câu hỏi"
                  : "Tắt: Con vật cố định theo từng câu hỏi"}
              </p>
            </div>
          </div>

          {/* Right column - Summary & Start Button */}
          <div className="bg-white rounded-2xl shadow-md p-6 h-fit sticky top-6">
            <h3 className="text-xl font-bold text-primary mb-6">Tóm Tắt Cấu Hình</h3>

            <div className="space-y-4 mb-8">
              <div className="border-b border-border pb-4">
                <p className="text-sm text-foreground/60">Môi Trường</p>
                <p className="text-lg font-bold text-primary">{currentHabitat?.nameVi || "Chưa chọn"}</p>
              </div>

              <div className="border-b border-border pb-4">
                <p className="text-sm text-foreground/60">Con Vật Đã Chọn</p>
                <p className="text-lg font-bold text-secondary">{config.selectedAnimals.length} con</p>
              </div>

              <div className="border-b border-border pb-4">
                <p className="text-sm text-foreground/60">Khoảng Số</p>
                <p className="text-lg font-bold text-primary">
                  {config.numberRange.min} - {config.numberRange.max}
                </p>
              </div>

              <div className="border-b border-border pb-4">
                <p className="text-sm text-foreground/60">Số Màn</p>
                <p className="text-lg font-bold text-accent">{config.totalLevels}</p>
              </div>

              <div className="border-b border-border pb-4">
                <p className="text-sm text-foreground/60">Số Tim</p>
                <p className="text-lg font-bold text-secondary">{config.totalHearts}</p>
              </div>

              <div className="border-b border-border pb-4">
                <p className="text-sm text-foreground/60">Mức Độ Khó</p>
                <p className="text-lg font-bold text-primary">
                  {config.levelDifficulty === "easy"
                    ? "Dễ"
                    : config.levelDifficulty === "normal"
                      ? "Bình Thường"
                      : "Khó"}
                </p>
              </div>

              <div>
                <p className="text-sm text-foreground/60">Chế Độ Ngẫu Nhiên</p>
                <p className="text-lg font-bold text-secondary">{config.randomizeAnimals ? "Bật" : "Tắt"}</p>
              </div>
            </div>

            <Button
              onClick={startGame}
              disabled={!config.selectedHabitat || config.selectedAnimals.length === 0}
              className="w-full h-12 text-base rounded-xl bg-primary hover:bg-primary/90 text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Bắt Đầu Trò Chơi
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

// Game session wrapper component
function GameSessionWrapper({ config, onBack }: { config: GameConfig; onBack: () => void }) {
  return (
    <div>
      <p>Game session starting with config: {JSON.stringify(config)}</p>
      <button onClick={onBack}>Back</button>
    </div>
  )
}
