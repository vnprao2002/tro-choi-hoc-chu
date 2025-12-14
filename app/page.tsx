"use client"

import { useState } from "react"
import GameMenu from "@/components/game-menu"
import HomeScreen from "@/components/home-screen"
import GameScreen from "@/components/game-screen"
import HtmlGameWrapper from "@/components/html-game-wrapper"
import CountingGame from "@/components/counting-game"

type GameType = "menu" | "letter-game-home" | "letter-game" | "html-game" | "counting-game"

export default function Page() {
  const [currentGame, setCurrentGame] = useState<GameType>("menu")
  const [htmlGamePath, setHtmlGamePath] = useState("")
  const [htmlGameName, setHtmlGameName] = useState("")
  const [settings, setSettings] = useState({
    category: ["family"] as string[],
    roundCount: 5,
    selectedLetters: ["a", "e", "i"],
    isUppercase: false,
  })

  const handleSelectGame = (gameId: string) => {
    if (gameId === "letter-game") {
      setCurrentGame("letter-game-home")
    } else if (gameId === "counting-game") {
      setCurrentGame("counting-game")
    } else {
      // Các trò chơi HTML/CSS/JS
      const gamePaths: Record<string, { path: string; name: string }> = {
        "chiec-non-chu-cai": {
          path: "/games/chiec-non-chu-cai/index.html",
          name: "🎩 Chiếc Nón Chữ Cái"
        },
        "learn-letters-game": {
          path: "/games/learn-letters-game/index.html",
          name: "🍎 Hái Trái Cây"
        },
        "nong-trai": {
          path: "/games/nong-trai/index.html",
          name: "🚜 Nông Trại"
        },
        "tim-chu-khac-biet": {
          path: "/games/tim-chu-khac-biet/index.html",
          name: "🔍 Tìm Chữ Khác Biệt"
        },
        "tim-tu": {
          path: "/games/tim-tu/index.html",
          name: "🔎 Tìm Từ"
        }
      }

      const game = gamePaths[gameId]
      if (game) {
        setHtmlGamePath(game.path)
        setHtmlGameName(game.name)
        setCurrentGame("html-game")
      }
    }
  }

  const handleStartLetterGame = (newSettings: typeof settings) => {
    setSettings(newSettings)
    setCurrentGame("letter-game")
  }

  const handleBackToMenu = () => {
    setCurrentGame("menu")
  }

  const handleBackToLetterHome = () => {
    setCurrentGame("letter-game-home")
  }

  return (
    <main className="min-h-screen overflow-hidden">
      {currentGame === "menu" ? (
        <GameMenu onSelectGame={handleSelectGame} />
      ) : currentGame === "letter-game-home" ? (
        <HomeScreen onStartGame={handleStartLetterGame} onBack={handleBackToMenu} />
      ) : currentGame === "letter-game" ? (
        <GameScreen settings={settings} onBackToHome={handleBackToLetterHome} />
      ) : currentGame === "counting-game" ? (
        <CountingGame onBack={handleBackToMenu} />
      ) : (
        <HtmlGameWrapper
          gamePath={htmlGamePath}
          gameName={htmlGameName}
          onBack={handleBackToMenu}
        />
      )}
    </main>
  )
}
