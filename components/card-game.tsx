"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { generateAnswerOptions, wordContainsLetter } from "@/lib/word-pools"
import { VIETNAMESE_ALPHABET_GROUPS } from "@/lib/vietnamese-alphabet"
import gsap from "gsap"

interface CardGameProps {
  word: {
    text: string
    image: string
  }
  targetLetter: string // Now passed from parent
  onCardClick: (isCorrect: boolean) => void
  onNext: () => void
  wordOptions?: {
    text: string
    image: string
  }[] // Options for image selection
}

export default function CardGame({ word, targetLetter, onCardClick, onNext, wordOptions }: CardGameProps) {
  const [answers, setAnswers] = useState<string[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false) // For letter selection mode
  const [selectedWords, setSelectedWords] = useState<Set<string>>(new Set())
  const [wrongSelected, setWrongSelected] = useState(false)
  const wordRef = useRef<HTMLDivElement>(null)
  const answerCardsRef = useRef<HTMLDivElement[]>([])
  const imageCardsRef = useRef<HTMLDivElement[]>([])
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const useImageMode = wordOptions && wordOptions.length > 0

  // Tìm tất cả các đáp án đúng (các từ chứa targetLetter)
  const correctAnswers = useMemo(() => {
    if (!useImageMode || !wordOptions) return new Set<string>()
    const correct = new Set<string>()
    
    wordOptions.forEach(option => {
      // Sử dụng wordContainsLetter để kiểm tra bao gồm cả diacritics
      if (wordContainsLetter(option.text, targetLetter)) {
        correct.add(option.text)
      }
    })
    return correct
  }, [useImageMode, wordOptions, targetLetter])

  const allCorrectSelected = useMemo(() => {
    if (!useImageMode) return false
    const allSelected = correctAnswers.size > 0 && 
                        correctAnswers.size === selectedWords.size && 
                        Array.from(correctAnswers).every(text => selectedWords.has(text))
    return allSelected
  }, [useImageMode, correctAnswers, selectedWords])

  useEffect(() => {
    // Clear timeout khi chuyển câu mới
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    if (!useImageMode) {
      const newAnswers = generateAnswerOptions(targetLetter)
      setAnswers(newAnswers)
    }
    // Reset state ngay lập tức khi chuyển câu
    setSelectedAnswer(null)
    setIsAnswered(false)
    setSelectedWords(new Set())
    setWrongSelected(false)
    hasTriggeredSuccess.current = false
    // Reset all animations
    answerCardsRef.current.forEach((card) => {
      if (card) {
        gsap.killTweensOf(card)
        gsap.set(card, {
          backgroundColor: "",
          borderColor: "",
          x: 0,
          clearProps: "all"
        })
      }
    })
    imageCardsRef.current.forEach((card) => {
      if (card) {
        gsap.killTweensOf(card)
        gsap.set(card, {
          backgroundColor: "",
          borderColor: "",
          x: 0,
          clearProps: "all"
        })
      }
    })
  }, [targetLetter, word?.text, useImageMode, wordOptions?.length])

  // Trigger success khi đã chọn hết tất cả đáp án đúng
  const hasTriggeredSuccess = useRef(false)
  useEffect(() => {
    if (allCorrectSelected && useImageMode && correctAnswers.size > 0 && !hasTriggeredSuccess.current) {
      // Chỉ gọi một lần khi đã chọn hết tất cả đáp án đúng
      hasTriggeredSuccess.current = true
      onCardClick(true)
    }
    // Reset khi chuyển câu mới
    if (!allCorrectSelected) {
      hasTriggeredSuccess.current = false
    }
  }, [allCorrectSelected, useImageMode, correctAnswers.size, onCardClick])

  const handleAnswerClick = (answer: string, cardIndex: number) => {
    if (isAnswered) return

    const isCorrect = answer === targetLetter
    setSelectedAnswer(answer)
    setIsAnswered(true)

    if (isCorrect) {
      // Chỉ đổi màu đáp án đúng
      if (answerCardsRef.current[cardIndex]) {
        gsap.to(answerCardsRef.current[cardIndex], {
          backgroundColor: "#22c55e",
          duration: 0.3,
        })
      }

      onCardClick(true)
    } else {
      if (answerCardsRef.current[cardIndex]) {
        gsap.to(answerCardsRef.current[cardIndex], {
          x: [0, -10, 10, -10, 10, 0],
          borderColor: "#ef4444",
          duration: 0.4,
        })
      }

      timeoutRef.current = setTimeout(() => {
        // Reset animation khi sai
        if (answerCardsRef.current[cardIndex]) {
          gsap.killTweensOf(answerCardsRef.current[cardIndex])
          gsap.set(answerCardsRef.current[cardIndex], {
            x: 0,
            borderColor: "",
            scale: 1,
            clearProps: "all"
          })
        }
        setIsAnswered(false)
        setSelectedAnswer(null)
        timeoutRef.current = null
      }, 400)
    }
  }

  const handleImageClick = (selectedOption: { text: string; image: string }, cardIndex: number) => {
    // Kiểm tra xem đáp án này có chứa targetLetter không
    const isCorrect = wordContainsLetter(selectedOption.text, targetLetter)
    
    // Nếu đã chọn rồi, bỏ chọn
    if (selectedWords.has(selectedOption.text)) {
      const newSelected = new Set(selectedWords)
      newSelected.delete(selectedOption.text)
      setSelectedWords(newSelected)
      setWrongSelected(false)
      
      // Reset animation
      if (imageCardsRef.current[cardIndex]) {
        gsap.killTweensOf(imageCardsRef.current[cardIndex])
        gsap.set(imageCardsRef.current[cardIndex], {
          borderColor: "",
          borderWidth: "",
          x: 0,
          clearProps: "all"
        })
      }
      return
    }

    // Nếu chọn đáp án đúng
    if (isCorrect) {
      const newSelected = new Set(selectedWords)
      newSelected.add(selectedOption.text)
      setSelectedWords(newSelected)
      setWrongSelected(false)

      // Highlight đáp án đúng
      if (imageCardsRef.current[cardIndex]) {
        gsap.to(imageCardsRef.current[cardIndex], {
          borderColor: "#22c55e",
          borderWidth: "8px",
          duration: 0.3,
        })
      }

      // Chỉ trigger success khi đã chọn hết TẤT CẢ đáp án đúng
      // Không gọi onCardClick ở đây, chỉ gọi khi allCorrectSelected thay đổi trong useEffect
    } else {
      // Chọn đáp án sai
      setWrongSelected(true)
      
      if (imageCardsRef.current[cardIndex]) {
        gsap.to(imageCardsRef.current[cardIndex], {
          x: [0, -10, 10, -10, 10, 0],
          borderColor: "#ef4444",
          duration: 0.4,
        })
      }

      timeoutRef.current = setTimeout(() => {
        // Reset animation khi sai
        if (imageCardsRef.current[cardIndex]) {
          gsap.killTweensOf(imageCardsRef.current[cardIndex])
          gsap.set(imageCardsRef.current[cardIndex], {
            x: 0,
            borderColor: "",
            borderWidth: "",
            clearProps: "all"
          })
        }
        setWrongSelected(false)
        timeoutRef.current = null
      }, 400)
    }
  }

  const renderWordWithHighlight = () => {
    const isCorrectAnswer = isAnswered && selectedAnswer === targetLetter

    return (
      <span className="text-4xl">
        {word.text.split("").map((char, idx) => {
          const matchesTarget = char === targetLetter || char.toLowerCase() === targetLetter.toLowerCase()

          if (matchesTarget && isCorrectAnswer) {
            return (
              <span
                key={idx}
                className="text-yellow-500 font-black"
              >
                {char}
              </span>
            )
          }
          return <span key={idx}>{char}</span>
        })}
      </span>
    )
  }

  // Hàm highlight chữ cái targetLetter trong từ khi đã chọn đúng
  const renderWordWithLetterHighlight = (wordText: string, isSelected: boolean) => {
    if (!isSelected) {
      return <span className="text-2xl font-bold text-gray-800">{wordText}</span>
    }

    const targetLower = targetLetter.toLowerCase()
    
    // Tìm base letter của targetLetter
    let targetBase = targetLower
    for (const [base, variants] of Object.entries(VIETNAMESE_ALPHABET_GROUPS)) {
      if (variants.some(v => v.toLowerCase() === targetLower) || base === targetLower) {
        targetBase = base
        break
      }
    }

    // Lấy tất cả variants của target base letter
    const targetVariants = VIETNAMESE_ALPHABET_GROUPS[targetBase as keyof typeof VIETNAMESE_ALPHABET_GROUPS] || [targetBase]
    const targetVariantsLower = targetVariants.map(v => v.toLowerCase())

    return (
      <span className="text-2xl font-bold">
        {wordText.split("").map((char, idx) => {
          const charLower = char.toLowerCase()
          // Kiểm tra xem char có phải là variant của targetLetter không
          const matchesTarget = targetVariantsLower.includes(charLower) || charLower === targetLower

          if (matchesTarget) {
            return (
              <span
                key={idx}
                className="text-yellow-500 font-black"
              >
                {char}
              </span>
            )
          }
          return <span key={idx} className="text-gray-800">{char}</span>
        })}
      </span>
    )
  }

  return (
    <div className="w-full max-w-5xl flex flex-col items-center gap-8">
      <div className="text-center">
        <p className="text-3xl text-gray-700 font-bold mb-6">Tìm chữ cái:</p>
        <div className="inline-block bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
          <span className="text-7xl font-black text-white drop-shadow-lg">{targetLetter}</span>
        </div>
      </div>

      {!useImageMode && (
        <div ref={wordRef} className="flex flex-col items-center gap-6 transform transition-transform">
          <div className="w-48 h-48 bg-white rounded-3xl shadow-xl flex items-center justify-center overflow-hidden border-4 border-blue-300">
            <img src={word.image || "/placeholder.svg"} alt={word.text} className="w-full h-full object-cover" />
          </div>

          <div className="font-bold text-green-700 bg-white px-8 py-4 rounded-2xl shadow-lg">
            {renderWordWithHighlight()}
          </div>
        </div>
      )}

      {useImageMode ? (
        <>
          <div className="text-2xl text-gray-700 font-bold mb-4">Chọn hình ảnh có chứa chữ "{targetLetter}":</div>
          <div className={`grid ${wordOptions!.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-6 md:gap-8 w-full mt-4`}>
            {wordOptions!.map((option, index) => {
              const isCorrect = wordContainsLetter(option.text, targetLetter)
              const isSelected = selectedWords.has(option.text)
              return (
                <button
                  key={`${word.text}-${targetLetter}-${option.text}-${index}`}
                  ref={(el) => {
                    if (el) imageCardsRef.current[index] = el
                  }}
                  onClick={() => handleImageClick(option, index)}
                  className={`relative rounded-2xl overflow-hidden transition-all transform ${isSelected
                      ? isCorrect
                        ? "border-8 border-green-500 shadow-2xl scale-105"
                        : "border-8 border-red-500"
                      : "border-4 border-blue-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                    } shadow-lg active:scale-95`}
                >
                  <div className="w-full aspect-square bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={option.image || "/placeholder.svg"}
                      alt={option.text}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white px-4 py-2 text-center word-label">
                    {renderWordWithLetterHighlight(option.text, isSelected && isCorrect)}
                  </div>
                </button>
              )
            })}
          </div>

          {wrongSelected && (
            <div className="text-xl font-bold text-red-600 bg-red-100 px-6 py-3 rounded-xl">Thử lại nhé! 🔄</div>
          )}

          {allCorrectSelected && (
            <div className="w-full flex justify-end mt-4">
              <button
                onClick={onNext}
                className="px-12 py-4 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-2xl text-xl shadow-lg transform hover:scale-105 transition-transform"
              >
                Tiếp Theo →
              </button>
            </div>
          )}

        </>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-6 md:gap-8 w-full mt-4">
            {answers.map((answer, index) => {
              const isSelected = selectedAnswer === answer
              const isCorrect = isAnswered && answer === targetLetter
              const showGradient = !isSelected && !isAnswered
              
              return (
                <button
                  key={`${word.text}-${targetLetter}-${answer}-${index}`}
                  ref={(el) => {
                    if (el) answerCardsRef.current[index] = el
                  }}
                  onClick={() => handleAnswerClick(answer, index)}
                  disabled={isAnswered && selectedAnswer !== answer}
                  className={`p-12 rounded-3xl font-black text-8xl transition-all transform ${isSelected
                      ? isCorrect
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-white border-4 border-blue-300 hover:shadow-xl hover:scale-105 cursor-pointer answer-button"
                    } ${isAnswered && selectedAnswer !== answer ? "opacity-50" : ""} shadow-lg active:scale-95`}
                >
                  {showGradient ? (
                    <span 
                      className="answer-letter-gradient"
                      style={{
                        background: 'linear-gradient(90deg, #f59e0b, #f97316, #ef4444, #ec4899, #a855f7, #6366f1, #3b82f6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        backgroundSize: '200% 200%',
                        display: 'inline-block',
                        animation: 'gradient-shift 3s ease infinite',
                      }}
                    >
                      {answer}
                    </span>
                  ) : (
                    <span>{answer}</span>
                  )}
                </button>
              )
            })}
          </div>
          <style>{`
            .answer-letter-gradient {
              transition: all 0.3s ease;
            }
            
            .word-label {
              transition: all 0.3s ease;
            }
            
            button:hover .word-label {
              background: linear-gradient(135deg, #fef3c7, #fde68a, #fcd34d);
            }
            
            @keyframes gradient-shift {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
          `}</style>

          {isAnswered && selectedAnswer !== targetLetter && (
            <div className="text-xl font-bold text-red-600 bg-red-100 px-6 py-3 rounded-xl">Thử lại nhé! 🔄</div>
          )}

          {isAnswered && selectedAnswer === targetLetter && (
            <div className="w-full flex justify-end mt-4">
              <button
                onClick={onNext}
                className="px-12 py-4 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-2xl text-xl shadow-lg transform hover:scale-105 transition-transform"
              >
                Tiếp Theo →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
