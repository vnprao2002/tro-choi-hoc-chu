"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Settings, RotateCcw, PartyPopper } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Định nghĩa các loại động vật và môi trường
const animalCategories = [
  {
    name: "Hồ nước",
    emoji: "🟦",
    animals: ["🐟", "🐠", "🐙", "🦀", "🐢", "🐸"],
    bg: "bg-blue-100",
    border: "border-blue-300",
  },
  {
    name: "Chuồng gà",
    emoji: "🏠",
    animals: ["🐔", "🐥"],
    bg: "bg-amber-100",
    border: "border-amber-300",
  },
  {
    name: "Chuồng động vật",
    emoji: "🌾",
    animals: ["🐮", "🐷", "🐑", "🐴", "🐰"],
    bg: "bg-green-100",
    border: "border-green-300",
  },
  {
    name: "Vườn hoa",
    emoji: "🌺",
    animals: ["🐝", "🐞", "🦋", "🐌", "🐜"],
    bg: "bg-pink-100",
    border: "border-pink-300",
  },
  {
    name: "Rừng",
    emoji: "🌳",
    animals: ["🐘", "🐒", "🦌", "🐅", "🦁"],
    bg: "bg-emerald-100",
    border: "border-emerald-300",
  },
]

interface CountingGameProps {
  onBack: () => void
}

export default function CountingGame({ onBack }: CountingGameProps) {
  const [targetNumbers, setTargetNumbers] = useState([3])
  const [extraCount, setExtraCount] = useState(3)
  const [randomExtra, setRandomExtra] = useState(false)
  const [targetNumber, setTargetNumber] = useState(3)
  const [currentLevel, setCurrentLevel] = useState(0)
  const [droppedCount, setDroppedCount] = useState(0)
  const [showSettings, setShowSettings] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [availableAnimals, setAvailableAnimals] = useState<string[]>([])
  const [draggedItems, setDraggedItems] = useState<string[]>([])
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; color: string }>>([])

  const category = animalCategories[currentLevel % animalCategories.length]
  const currentAnimal = category.animals[Math.floor(currentLevel / animalCategories.length) % category.animals.length]

  useEffect(() => {
    const randomTarget = targetNumbers[Math.floor(Math.random() * targetNumbers.length)]
    setTargetNumber(randomTarget)

    const extras = randomExtra ? Math.floor(Math.random() * extraCount) + 1 : extraCount
    const total = randomTarget + extras
    setAvailableAnimals(Array(total).fill(currentAnimal))
    setDraggedItems([])
    setDroppedCount(0)
    setShowSuccess(false)
  }, [currentLevel, currentAnimal, targetNumbers, extraCount, randomExtra])

  const generateConfetti = () => {
    const newConfetti = []
    for (let i = 0; i < 100; i++) {
      newConfetti.push({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: ["#FF6B6B", "#4ECDC4", "#FFE66D", "#FF6BCB", "#95E1D3", "#F38181", "#A8E6CF", "#FFD3B6"][
          Math.floor(Math.random() * 8)
        ],
      })
    }
    setConfetti(newConfetti)
    setTimeout(() => setConfetti([]), 3000)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const draggedIndex = e.dataTransfer.getData("index")

    if (droppedCount < targetNumber) {
      setDroppedCount((prev) => prev + 1)
      setDraggedItems((prev) => [...prev, draggedIndex])

      if (droppedCount + 1 === targetNumber) {
        setShowSuccess(true)
        generateConfetti()
        setTimeout(() => {
          nextLevel()
        }, 2500)
      }
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("index", index.toString())
  }

  const nextLevel = () => {
    setCurrentLevel((prev) => prev + 1)
  }

  const resetLevel = () => {
    setDroppedCount(0)
    setDraggedItems([])
    setShowSuccess(false)
    const randomTarget = targetNumbers[Math.floor(Math.random() * targetNumbers.length)]
    setTargetNumber(randomTarget)
    const extras = randomExtra ? Math.floor(Math.random() * extraCount) + 1 : extraCount
    const total = randomTarget + extras
    setAvailableAnimals(Array(total).fill(currentAnimal))
  }

  const toggleTargetNumber = (num: number) => {
    if (targetNumbers.includes(num)) {
      if (targetNumbers.length > 1) {
        setTargetNumbers(targetNumbers.filter((n) => n !== num))
      }
    } else {
      setTargetNumbers([...targetNumbers, num])
    }
  }

  const EnvironmentEffects = ({ categoryName }: { categoryName: string }) => {
    switch (categoryName) {
      case "Hồ nước":
        return (
          <>
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`bubble-${i}`}
                className="absolute rounded-full bg-blue-300/40 border-2 border-blue-400/60"
                style={{
                  width: Math.random() * 40 + 20,
                  height: Math.random() * 40 + 20,
                  left: `${Math.random() * 100}%`,
                  bottom: `-${Math.random() * 50}px`,
                }}
                animate={{
                  y: [-50, -window.innerHeight],
                  x: [0, Math.random() * 50 - 25],
                  scale: [1, 1.2],
                  opacity: [0, 1],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <motion.span
                key={`wave-${i}`}
                className="absolute text-4xl"
                style={{
                  left: `${(i * 15) % 100}%`,
                  bottom: `${Math.random() * 30}%`,
                }}
                animate={{
                  rotate: [0, 10],
                  scale: [1, 1.1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: i * 0.3,
                }}
              >
                🌊
              </motion.span>
            ))}
          </>
        )
      case "Rừng":
        return (
          <>
            {[...Array(12)].map((_, i) => (
              <motion.span
                key={`tree-${i}`}
                className="absolute"
                style={{
                  fontSize: Math.random() * 30 + 40,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  rotate: [0, 5],
                  scale: [1, 1.05],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: i * 0.2,
                }}
              >
                {["🌲", "🌳", "🌴", "🍃"][Math.floor(Math.random() * 4)]}
              </motion.span>
            ))}
          </>
        )
      case "Chuồng gà":
        return (
          <>
            {[...Array(20)].map((_, i) => (
              <motion.span
                key={`grass-${i}`}
                className="absolute text-2xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: `${Math.random() * 20}%`,
                }}
                animate={{
                  rotate: [0, 15],
                  scale: [1, 1.1],
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: i * 0.1,
                }}
              >
                🌿
              </motion.span>
            ))}
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={`hay-${i}`}
                className="absolute text-3xl"
                style={{
                  left: `${(i * 20) % 100}%`,
                  top: `${Math.random() * 60}%`,
                }}
                animate={{
                  rotate: [0, 10],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: i * 0.5,
                }}
              >
                🌾
              </motion.span>
            ))}
          </>
        )
      case "Chuồng động vật":
        return (
          <>
            {[...Array(15)].map((_, i) => (
              <motion.span
                key={`grass2-${i}`}
                className="absolute text-3xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: `${Math.random() * 30}%`,
                }}
                animate={{
                  rotate: [0, 10],
                  y: [0, -5],
                }}
                transition={{
                  duration: Math.random() * 2 + 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: i * 0.15,
                }}
              >
                {["🌱", "🌿", "☘️"][Math.floor(Math.random() * 3)]}
              </motion.span>
            ))}
            {[...Array(4)].map((_, i) => (
              <motion.span
                key={`fence-${i}`}
                className="absolute text-4xl"
                style={{
                  left: `${(i * 25) % 100}%`,
                  top: `${20 + Math.random() * 20}%`,
                }}
              >
                🪵
              </motion.span>
            ))}
          </>
        )
      case "Vườn hoa":
        return (
          <>
            {[...Array(15)].map((_, i) => (
              <motion.span
                key={`flower-${i}`}
                className="absolute"
                style={{
                  fontSize: Math.random() * 30 + 30,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.2],
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: i * 0.2,
                }}
              >
                {["🌺", "🌸", "🌼", "🌻", "🌷", "🌹"][Math.floor(Math.random() * 6)]}
              </motion.span>
            ))}
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 p-4 md:p-8 relative overflow-hidden">
      {/* Back button */}
      <div className="absolute top-4 left-4 z-50">
        <Button
          onClick={onBack}
          className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all"
        >
          ← Quay Lại
        </Button>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30],
              x: [0, Math.random() * 20 - 10],
              scale: [1, 1.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {confetti.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-4 h-4 pointer-events-none z-50"
            style={{
              backgroundColor: particle.color,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              borderRadius: Math.random() > 0.5 ? "50%" : "0%",
            }}
            initial={{ scale: 0, y: 0, opacity: 1 }}
            animate={{
              scale: [0, 1.5, 0],
              y: [0, -500],
              x: [0, Math.random() * 150 - 75],
              rotate: 720,
              opacity: [1, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="flex items-center justify-between mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">🎮 Kéo số vào nhóm đồ vật</h1>
          <div className="flex gap-2">
            <Button onClick={resetLevel} variant="secondary" size="icon" className="rounded-full w-12 h-12">
              <RotateCcw className="h-6 w-6" />
            </Button>
            <Button
              onClick={() => setShowSettings(!showSettings)}
              variant="secondary"
              size="icon"
              className="rounded-full w-12 h-12"
            >
              <Settings className="h-6 w-6" />
            </Button>
          </div>
        </motion.div>

        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6"
            >
              <Card className="p-6 bg-white/95 backdrop-blur shadow-2xl">
                <h3 className="text-lg font-semibold mb-4">⚙️ Tùy chỉnh</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Chọn số mục tiêu (có thể chọn nhiều để random)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <Button
                          key={num}
                          onClick={() => toggleTargetNumber(num)}
                          variant={targetNumbers.includes(num) ? "default" : "outline"}
                          className="w-12 h-12 font-bold"
                        >
                          {num}
                        </Button>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Đang chọn: {targetNumbers.sort((a, b) => a - b).join(", ")}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Số lượng thêm ngoài: {extraCount}</label>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <Button
                          key={num}
                          onClick={() => setExtraCount(num)}
                          variant={extraCount === num ? "default" : "outline"}
                          className="w-12 h-12"
                        >
                          +{num}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={randomExtra}
                        onChange={(e) => setRandomExtra(e.target.checked)}
                        className="w-5 h-5 rounded"
                      />
                      <span className="text-sm font-medium">Random số lượng thêm (từ 1 đến {extraCount})</span>
                    </label>
                  </div>

                  <Button onClick={() => setShowSettings(false)} className="w-full">
                    Áp dụng và chơi
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <Card className="p-8 bg-white/95 backdrop-blur shadow-xl">
              <p className="text-2xl md:text-3xl font-semibold text-center text-balance">
                Kéo{" "}
                <span className="text-6xl md:text-7xl text-primary font-bold animate-pulse inline-block mx-2 px-4 py-2 bg-yellow-200 rounded-2xl shadow-lg">
                  {targetNumber}
                </span>{" "}
                {currentAnimal} vào {category.name} {category.emoji} nhé!
              </p>
            </Card>
          </motion.div>

          <motion.div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className={`relative ${category.bg} ${category.border} border-4 border-dashed rounded-3xl p-12 min-h-[450px] transition-all duration-300 overflow-hidden ${
              showSuccess ? "ring-8 ring-green-400 border-solid" : ""
            }`}
            animate={showSuccess ? { scale: 1.05 } : { scale: 1 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <EnvironmentEffects categoryName={category.name} />
            </div>

            <motion.div
              className="absolute top-6 right-6 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-3xl w-32 h-32 flex items-center justify-center shadow-2xl border-4 border-white z-10"
              animate={{ rotate: [0, 5], scale: [1, 1.05] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              <span className="text-7xl font-black text-white drop-shadow-lg">{targetNumber}</span>
            </motion.div>

            <motion.div
              className="text-center mb-6 relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <span className="text-8xl drop-shadow-lg">{category.emoji}</span>
              <p className="text-3xl font-bold mt-3 drop-shadow-md">{category.name}</p>
            </motion.div>

            <div className="flex flex-wrap gap-6 justify-center items-center min-h-[180px] relative z-10">
              <AnimatePresence>
                {draggedItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0, rotate: -180, y: -100 }}
                    animate={{
                      scale: 1,
                      rotate: 360,
                      y: 0,
                    }}
                    transition={{ type: "spring", bounce: 0.6, duration: 0.6 }}
                    className="text-7xl drop-shadow-xl"
                  >
                    {currentAnimal}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur px-8 py-4 rounded-2xl shadow-2xl z-10"
              animate={{ scale: [1, 1.08] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              <p className="text-3xl font-black text-primary">
                {droppedCount} / {targetNumber}
              </p>
            </motion.div>

            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-400/50 to-pink-400/50 backdrop-blur-md rounded-3xl z-20"
                >
                  <motion.div
                    className="text-center"
                    animate={{ rotate: [0, -10, 10] }}
                    transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.4], rotate: 360 }}
                      transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                      className="mb-6"
                    >
                      <PartyPopper className="w-32 h-32 text-yellow-500 mx-auto drop-shadow-2xl" />
                    </motion.div>
                    <motion.p
                      className="text-7xl font-black text-green-600 drop-shadow-lg"
                      animate={{ scale: [1, 1.2] }}
                      transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    >
                      Giỏi quá!
                    </motion.p>
                    <motion.p
                      className="text-4xl text-purple-600 mt-4 font-bold"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      🎉 Xuất sắc! 🎉
                    </motion.p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <Card className="p-8 bg-white/95 backdrop-blur shadow-xl">
            <h3 className="text-3xl font-bold mb-6 text-center">🎯 Kéo động vật từ đây</h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {availableAnimals.map((animal, idx) => (
                <motion.div
                  key={idx}
                  draggable={!draggedItems.includes(idx.toString())}
                  onDragStart={(e) => handleDragStart(e, idx)}
                  className={`text-7xl cursor-grab active:cursor-grabbing transition-all ${
                    draggedItems.includes(idx.toString()) ? "opacity-20 cursor-not-allowed" : "hover:scale-110"
                  }`}
                  whileHover={
                    !draggedItems.includes(idx.toString()) ? { scale: 1.3, rotate: [0, -15, 15] } : {}
                  }
                  whileTap={{ scale: 0.9 }}
                  animate={
                    !draggedItems.includes(idx.toString())
                      ? {
                          y: [0, -8],
                        }
                      : {}
                  }
                  transition={{
                    y: {
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: idx * 0.1,
                  }}
                >
                  {animal}
                </motion.div>
              ))}
            </div>
            <p className="text-center text-lg text-muted-foreground mt-6 font-semibold">
              Có <span className="font-bold text-primary text-2xl">{availableAnimals.length}</span> con • Cần{" "}
              <span className="font-bold text-green-600 text-2xl">{targetNumber}</span> con
            </p>
          </Card>
        </div>

        <motion.div
          className="mt-8 text-center text-white/95"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <p className="text-lg font-bold drop-shadow-lg">Màn chơi: {currentLevel + 1}</p>
        </motion.div>
      </div>
    </div>
  )
}

