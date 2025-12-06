"use client"

import { useState } from "react"
import HomeScreen from "@/components/home-screen"
import GameScreen from "@/components/game-screen"

export default function Page() {
  const [gameState, setGameState] = useState<"home" | "game">("home")
  const [settings, setSettings] = useState({
    category: "family",
    roundCount: 5,
    selectedLetters: ["a", "e", "i"],
    isUppercase: false,
  })

  const handleStartGame = (newSettings: typeof settings) => {
    setSettings(newSettings)
    setGameState("game")
  }

  const handleBackToHome = () => {
    setGameState("home")
  }

  return (
    <main className="min-h-screen overflow-hidden">
      {gameState === "home" ? (
        <HomeScreen onStartGame={handleStartGame} />
      ) : (
        <GameScreen settings={settings} onBackToHome={handleBackToHome} />
      )}
    </main>
  )
}
