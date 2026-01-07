"use client"

import { useState, useEffect, useRef } from "react"
import type { HabitatType } from "@/lib/data/pools"
import { HABITAT_POOL, ANIMAL_POOL } from "@/lib/data/pools"
import type { GameConfig } from "@/lib/data/config"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { generateAnimalPositions } from "@/lib/game-utils"
import { playSound } from "@/lib/audio-utils"
import { Confetti } from "@/components/confetti"
import { CountdownOverlay } from "@/components/countdown-overlay"
import { JumpText } from "@/components/jump-text"

interface GameScreenProps {
  habitatId: HabitatType
  config: GameConfig
  onBack: () => void
}

type GameStage = "question-display" | "playing" | "feedback" | "complete"

interface Question {
  count: number
  animalId: string
  text: string
}

interface AnimalWithPosition {
  animalId: string
  x: number
  y: number
}

export default function GameScreen({ habitatId, config, onBack }: GameScreenProps) {
  const habitat = HABITAT_POOL[habitatId]
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 })

  const [stage, setStage] = useState<GameStage>("question-display")
  const [currentLevel, setCurrentLevel] = useState(1)
  const [score, setScore] = useState(0)
  const [hearts, setHearts] = useState(config.totalHearts)
  const [question, setQuestion] = useState<Question | null>(null)
  const [userAnswer, setUserAnswer] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState(false)
  const [animalsWithPositions, setAnimalsWithPositions] = useState<AnimalWithPosition[]>([])
  const [showConfetti, setShowConfetti] = useState(false)
  const [showCountdown, setShowCountdown] = useState(false)

  useEffect(() => {
    const updateMapDimensions = () => {
      if (mapRef.current) {
        setMapDimensions({
          width: mapRef.current.offsetWidth,
          height: mapRef.current.offsetHeight,
        })
      }
    }

    updateMapDimensions()
    window.addEventListener("resize", updateMapDimensions)
    return () => window.removeEventListener("resize", updateMapDimensions)
  }, [])

  useEffect(() => {
    generateNewQuestion()
  }, [])

  useEffect(() => {
    if (question && stage === "question-display") {
      setShowCountdown(true)

      const timer = setTimeout(() => {
        setStage("playing")
      }, 3500)

      return () => clearTimeout(timer)
    }
  }, [question, stage])

  useEffect(() => {
    if (stage === "playing" && question && mapDimensions.width > 0) {
      const positions = generateAnimalPositions(question.count, mapDimensions.width, mapDimensions.height, 80)

      const animals: AnimalWithPosition[] = positions.map((pos) => ({
        animalId: question.animalId,
        x: pos.x,
        y: pos.y,
      }))

      setAnimalsWithPositions(animals)
    }
  }, [stage, question, mapDimensions])

  const generateNewQuestion = () => {
    const availableAnimals = config.selectedAnimals.filter((id) => ANIMAL_POOL[id]?.habitat === habitatId)

    if (availableAnimals.length === 0) {
      console.error("No animals available for this habitat")
      return
    }

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
    setUserAnswer(null)
    setStage("question-display")

    return () => {}
  }

  const handleAnswer = (answer: number) => {
    setUserAnswer(answer)
    const correct = answer === question?.count
    setIsCorrect(correct)

    if (correct) {
      setScore((prev) => prev + 1)
      playSound("success")
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 1500)
    } else {
      setHearts((prev) => Math.max(0, prev - 1))
      playSound("error")
    }

    setStage("feedback")

    setTimeout(() => {
      const newHearts = hearts - (correct ? 0 : 1)

      if (newHearts <= 0 || currentLevel >= config.totalLevels) {
        setStage("complete")
        playSound("complete")
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
        <div className="absolute inset-0 bg-black/20" />
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md text-center relative z-10">
          <div className="text-5xl mb-4">
            {score === config.totalLevels ? "🎉" : score >= Math.ceil(config.totalLevels * 0.7) ? "👏" : "😊"}
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
    <>
      {showConfetti && <Confetti />}
      {showCountdown && <CountdownOverlay onComplete={() => setShowCountdown(false)} />}

      <main className="min-h-screen flex flex-col bg-gray-50">
        <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur shadow-md z-40 px-4 md:px-6 py-3 md:py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
            <Button
              onClick={onBack}
              variant="ghost"
              className="text-foreground font-bold text-base md:text-lg hover:bg-gray-200 shrink-0"
            >
              ← Quay lại
            </Button>

            <div className="flex gap-2 shrink-0">
              {Array(config.totalHearts)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-colors ${
                      i < hearts ? "bg-red-400 text-white" : "bg-gray-300 text-gray-500"
                    }`}
                  >
                    ♥
                  </div>
                ))}
            </div>

            <div className="bg-primary rounded-full px-4 md:px-6 py-2 font-bold text-base md:text-lg text-white shadow-md shrink-0">
              {currentLevel}/{config.totalLevels}
            </div>
          </div>
        </div>

        <div className="flex-1 mt-20 md:mt-24 mb-28 md:mb-32 relative overflow-hidden">
          <div
            ref={mapRef}
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${habitat.backgroundImagePath}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/5" />

            {/* Question Display - overlay on map */}
            {stage === "question-display" && (
              <div className="absolute inset-0 flex items-center justify-center p-4 z-30">
                <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 text-center max-w-md animate-in fade-in duration-500">
                  <JumpText
                    text={question?.text || ""}
                    className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight text-balance"
                  />
                </div>
              </div>
            )}

            {/* Animals on map - absolute positioning with random X, Y */}
            {stage === "playing" && (
              <>
                {animalsWithPositions.map((animal, index) => (
                  <div
                    key={index}
                    className="absolute animate-bounce"
                    style={{
                      left: `${(animal.x / mapDimensions.width) * 100}%`,
                      top: `${(animal.y / mapDimensions.height) * 100}%`,
                      animationDelay: `${index * 0.1}s`,
                      animationDuration: "0.8s",
                    }}
                  >
                    <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                      <Image
                        src={ANIMAL_POOL[animal.animalId].imagePath || "/placeholder.svg"}
                        alt={ANIMAL_POOL[animal.animalId].nameVi}
                        fill
                        className="object-contain drop-shadow-lg"
                      />
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* Feedback - overlay on map */}
            {stage === "feedback" && (
              <div className="absolute inset-0 flex items-center justify-center p-4 z-30">
                <div
                  className={`rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-in fade-in duration-300 max-w-md ${
                    isCorrect ? "bg-green-400/95 text-white backdrop-blur" : "bg-red-400/95 text-white backdrop-blur"
                  }`}
                >
                  <div className="text-6xl md:text-7xl mb-4 animate-bounce" style={{ animationDuration: "0.6s" }}>
                    {isCorrect ? "✓" : "✗"}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-4">{isCorrect ? "Chính xác!" : "Sai rồi"}</div>
                  <p className="text-lg font-semibold">Đáp án đúng là: {question?.count}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur shadow-lg z-40 px-4 md:px-6 py-4 md:py-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-lg md:text-xl font-bold text-center text-primary mb-3 md:mb-4">Chọn số:</div>
            <div className="flex justify-center gap-2 md:gap-3 flex-wrap">
              {Array.from({ length: config.numberRange.max }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => handleAnswer(num)}
                  disabled={userAnswer !== null || stage !== "playing"}
                  className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center text-xl md:text-2xl lg:text-3xl font-bold rounded-lg md:rounded-xl bg-secondary text-white hover:bg-secondary/90 active:scale-95 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
