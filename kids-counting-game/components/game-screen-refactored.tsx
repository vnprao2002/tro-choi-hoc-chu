"use client"

import { useState, useEffect } from "react"
import type { HabitatType } from "@/lib/data/pools"
import { HABITAT_POOL, ANIMAL_POOL } from "@/lib/data/pools"
import type { GameConfig } from "@/lib/data/config"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface GameScreenRefactoredProps {
  habitatId: HabitatType
  config: GameConfig
  onBack: () => void
}

type GameStage = "question" | "playing" | "feedback" | "complete"

interface Question {
  count: number
  animalId: string
  text: string
}

export default function GameScreenRefactored({ habitatId, config, onBack }: GameScreenRefactoredProps) {
  const habitat = HABITAT_POOL[habitatId]
  const [stage, setStage] = useState<GameStage>("question")
  const [currentLevel, setCurrentLevel] = useState(1)
  const [score, setScore] = useState(0)
  const [hearts, setHearts] = useState(config.totalHearts)
  const [question, setQuestion] = useState<Question | null>(null)
  const [userAnswer, setUserAnswer] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState(false)
  const [animals, setAnimals] = useState<string[]>([])

  useEffect(() => {
    generateNewQuestion()
  }, [])

  const generateNewQuestion = () => {
    const availableAnimals = config.selectedAnimals.filter((id) => ANIMAL_POOL[id]?.habitat === habitatId)

    if (availableAnimals.length === 0) return

    const randomAnimalId = availableAnimals[Math.floor(Math.random() * availableAnimals.length)]
    const count = Math.floor(
      Math.random() * (config.numberRange.max - config.numberRange.min + 1) + config.numberRange.min,
    )

    const animalName = ANIMAL_POOL[randomAnimalId].nameVi

    setQuestion({
      count,
      animalId: randomAnimalId,
      text: `Có bao nhiêu ${animalName}?`,
    })
    setAnimals(Array(count).fill(randomAnimalId))
    setUserAnswer(null)
    setStage("question")
  }

  const handleAnswer = (answer: number) => {
    setUserAnswer(answer)
    const correct = answer === question?.count

    setIsCorrect(correct)

    if (correct) {
      setScore((prev) => prev + 1)
    } else {
      setHearts((prev) => Math.max(0, prev - 1))
    }

    setStage("feedback")

    setTimeout(() => {
      if (hearts - (correct ? 0 : 1) <= 0 || currentLevel >= config.totalLevels) {
        setStage("complete")
      } else {
        setCurrentLevel((prev) => prev + 1)
        generateNewQuestion()
      }
    }, 1500)
  }

  if (stage === "complete") {
    return (
      <main
        className="min-h-screen flex items-center justify-center p-4"
        style={{
          backgroundImage: `url('${habitat.backgroundImagePath}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md text-center">
          <div className="text-5xl mb-4">
            {score === config.totalLevels ? "🎉" : score >= config.totalLevels * 0.7 ? "👏" : "😊"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Tuyệt vời!</h2>
          <p className="text-xl md:text-2xl text-foreground mb-8">
            Bạn trả lời đúng <span className="font-bold text-accent">{score}</span>/
            <span className="font-bold text-accent">{config.totalLevels}</span> câu
          </p>
          <Button onClick={onBack} size="lg" className="w-full text-lg h-14 rounded-xl bg-primary hover:bg-primary/90">
            Chơi Lại
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-4 transition-all duration-300"
      style={{
        backgroundImage: `url('${habitat.backgroundImagePath}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay for readability */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <div className="w-full max-w-2xl relative z-10">
        {/* Header with score and hearts */}
        <div className="flex justify-between items-center mb-8">
          <Button onClick={onBack} variant="ghost" className="text-white font-bold text-lg hover:bg-black/20">
            ← Quay lại
          </Button>
          <div className="flex gap-2">
            {Array(config.totalHearts)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold ${
                    i < hearts ? "bg-red-400 text-white" : "bg-gray-300 text-gray-500"
                  }`}
                >
                  ❤️
                </div>
              ))}
          </div>
          <div className="bg-white rounded-full px-6 py-2 font-bold text-lg text-primary shadow-md">
            {currentLevel}/{config.totalLevels}
          </div>
        </div>

        {/* Question stage - Show for 3 seconds then hide */}
        {stage === "question" && (
          <div className="bg-white/95 rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-in fade-in duration-500">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight text-balance">
              {question?.text}
            </div>
            <p className="text-lg text-foreground/70">Nhìn kỹ và chọn số đúng</p>
          </div>
        )}

        {/* Playing stage - Background + animals + buttons */}
        {stage === "playing" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Animals display */}
            <div className="flex justify-center flex-wrap gap-4 mb-12">
              {animals.map((animalId, index) => (
                <div
                  key={index}
                  className="animate-bounce"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationDuration: "0.8s",
                  }}
                >
                  <Image
                    src={ANIMAL_POOL[animalId].imagePath || "/placeholder.svg"}
                    alt={ANIMAL_POOL[animalId].nameVi}
                    width={80}
                    height={80}
                    className="drop-shadow-lg"
                  />
                </div>
              ))}
            </div>

            {/* Number selection buttons */}
            <div className="bg-white/90 rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="text-2xl font-bold text-center text-primary mb-8">Chọn số:</div>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {Array.from({ length: config.numberRange.max }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    onClick={() => handleAnswer(num)}
                    className="aspect-square flex items-center justify-center text-2xl md:text-3xl font-bold rounded-2xl bg-secondary text-white hover:bg-secondary/90 active:scale-95 transition-all shadow-lg hover:shadow-xl"
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Feedback stage */}
        {stage === "feedback" && (
          <div
            className={`rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-in fade-in duration-300 ${
              isCorrect ? "bg-green-400/90 text-white" : "bg-red-400/90 text-white"
            }`}
          >
            <div className="text-6xl md:text-7xl mb-4">{isCorrect ? "✓" : "✗"}</div>
            <div className="text-3xl md:text-4xl font-bold mb-4">{isCorrect ? "Chính xác!" : "Sai rồi"}</div>
            <p className="text-lg font-semibold">Đáp án đúng là: {question?.count}</p>
          </div>
        )}
      </div>
    </main>
  )
}
