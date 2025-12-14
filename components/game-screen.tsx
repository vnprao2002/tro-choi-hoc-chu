"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import CardGame from "./card-game"
import GameHeader from "./game-header"
import ConfettiEffect from "./confetti-effect"
import VictoryEffects from "./victory-effects"
import { getWordsWithAnyLetter, generateWordOptions, getWordPool, wordContainsLetter } from "@/lib/word-pools"

interface GameScreenProps {
  settings: {
    category: string | string[]
    roundCount: number
    selectedLetters: string[]
    isUppercase: boolean
  }
  onBackToHome: () => void
}

export default function GameScreen({ settings, onBackToHome }: GameScreenProps) {
  const [gameState, setGameState] = useState<"playing" | "gameOver">("playing")
  const [currentRound, setCurrentRound] = useState(1)
  const [currentWord, setCurrentWord] = useState<any>(null)
  const [currentTargetLetter, setCurrentTargetLetter] = useState<string>("")
  const [wordOptions, setWordOptions] = useState<any[]>([])
  const [score, setScore] = useState(0)
  const [words, setWords] = useState<any[]>([])
  const [usedWords, setUsedWords] = useState<Set<string>>(new Set()) // Track các từ đã dùng
  const confettiRef = useRef<any>(null)
  const correctSoundRef = useRef<HTMLAudioElement | null>(null)
  const wrongSoundRef = useRef<HTMLAudioElement | null>(null)
  const victorySoundRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const validWords = getWordsWithAnyLetter(settings.category, settings.selectedLetters)

    if (validWords.length === 0) {
      alert("Không có từ nào chứa chữ cái được chọn!")
      onBackToHome()
      return
    }

    setWords(validWords)
    selectNewWord(validWords)
  }, [settings.category, settings.selectedLetters])

  const selectNewWord = (wordPool: any[], retryCount = 0) => {
    // Clear confetti khi chuyển câu
    if (confettiRef.current) {
      confettiRef.current.clear()
    }
    
    // Tránh vòng lặp vô hạn
    if (retryCount > 10) {
      // Fallback: chọn từ đầu tiên và chữ cái đầu tiên
      const fallbackWord = wordPool[0]
      const fallbackLetter = settings.selectedLetters[0]
      setCurrentWord(fallbackWord)
      setCurrentTargetLetter(settings.isUppercase ? fallbackLetter.toUpperCase() : fallbackLetter)
      const allWords = getWordPool(settings.category)
      const options = generateWordOptions(fallbackWord, fallbackLetter, allWords, 3)
      setWordOptions(options)
      setUsedWords(prev => new Set(prev).add(fallbackWord.text))
      return
    }
    
    const allWords = getWordPool(settings.category)
    
    // Ưu tiên chọn từ chưa dùng, nếu đã dùng hết thì reset
    const unusedWords = wordPool.filter(w => !usedWords.has(w.text))
    const wordsToChooseFrom = unusedWords.length > 0 ? unusedWords : wordPool
    
    // Nếu đã dùng hết, reset lại
    if (unusedWords.length === 0 && usedWords.size > 0) {
      setUsedWords(new Set())
    }
    
    // Shuffle các chữ cái đã chọn để random chữ cái được chọn
    const shuffledLetters = [...settings.selectedLetters].sort(() => Math.random() - 0.5)
    
    // Tìm tất cả các chữ cái có thể dùng (có ít nhất 1 từ chứa chữ cái đó trong wordsToChooseFrom)
    const availableLetters: Array<{letter: string, word: any}> = []
    
    for (const letter of shuffledLetters) {
      const targetLower = letter.toLowerCase()
      const wordsWithLetter = allWords.filter((w) => {
        const wordLower = w.text.toLowerCase()
        // Kiểm tra exact match hoặc base letter match
        return wordLower.includes(targetLower) || wordContainsLetter(w.text, letter)
      })
      
      // Tìm từ đầu tiên chứa chữ cái này mà có trong wordsToChooseFrom
      for (const word of wordsWithLetter) {
        if (wordsToChooseFrom.some(w => w.text === word.text)) {
          availableLetters.push({ letter, word })
          break // Chỉ cần 1 từ cho mỗi chữ cái
        }
      }
    }
    
    // Random chọn 1 chữ cái từ danh sách có thể dùng
    if (availableLetters.length === 0) {
      selectNewWord(wordPool, retryCount + 1)
      return
    }
    
    const randomIndex = Math.floor(Math.random() * availableLetters.length)
    const selected = availableLetters[randomIndex]
    const targetLetter = selected.letter
    const targetWord = selected.word
    
    // Đánh dấu từ đã dùng
    setUsedWords(prev => new Set(prev).add(targetWord.text))
    
    setCurrentWord(targetWord)
    setCurrentTargetLetter(settings.isUppercase ? targetLetter.toUpperCase() : targetLetter)
    
    // Tạo 3 từ làm đáp án (hình ảnh), có thể có nhiều đáp án đúng
    // Tìm tất cả các từ chứa targetLetter
    const wordsWithLetter = allWords.filter((w) => {
      const wordLower = w.text.toLowerCase()
      const targetLower = targetLetter.toLowerCase()
      return wordLower.includes(targetLower) || wordContainsLetter(w.text, targetLetter)
    })
    
    // Tìm các từ KHÔNG chứa targetLetter để làm đáp án sai
    const wordsWithoutLetter = allWords.filter((w) => {
      if (w.text === targetWord.text) return false
      return !wordContainsLetter(w.text, targetLetter)
    })
    
    // Tạo danh sách đáp án: 1-2 đáp án đúng + 1-2 đáp án sai (tổng 3 đáp án)
    const options: any[] = []
    
    // Thêm từ đúng (targetWord)
    options.push(targetWord)
    
    // Có thể thêm thêm 1 đáp án đúng khác nếu có (random)
    const otherCorrectWords = wordsWithLetter.filter(w => w.text !== targetWord.text)
    if (otherCorrectWords.length > 0 && Math.random() > 0.5) {
      const randomCorrect = otherCorrectWords[Math.floor(Math.random() * otherCorrectWords.length)]
      options.push(randomCorrect)
    }
    
    // Thêm đáp án sai để đủ 3 đáp án
    const numWrongAnswers = Math.min(3 - options.length, wordsWithoutLetter.length)
    const shuffledWrong = [...wordsWithoutLetter].sort(() => Math.random() - 0.5)
    for (let i = 0; i < numWrongAnswers; i++) {
      if (shuffledWrong[i]) {
        options.push(shuffledWrong[i])
      }
    }
    
    // Đảm bảo có ít nhất 1 đáp án đúng và ít nhất 1 đáp án sai
    const finalCorrectCount = options.filter((w) => {
      const wordLower = w.text.toLowerCase()
      const targetLower = targetLetter.toLowerCase()
      return wordLower.includes(targetLower) || wordContainsLetter(w.text, targetLetter)
    }).length
    
    if (finalCorrectCount >= 1 && options.length >= 2) {
      setWordOptions(options.sort(() => Math.random() - 0.5))
    } else {
      // Nếu không đủ điều kiện, thử lại với chữ cái khác
      selectNewWord(wordPool, retryCount + 1)
    }
  }

  const handleCorrectAnswer = () => {
    playSound("success")

    if (confettiRef.current) {
      confettiRef.current.trigger()
    }
  }

  const handleWrongAnswer = () => {
    playSound("error")
  }

  const handleNext = () => {
    const newScore = score + 1

    if (currentRound >= settings.roundCount) {
      setScore(newScore)
      setGameState("gameOver")
      playSound("victory")
      // Trigger victory confetti
      if (confettiRef.current) {
        confettiRef.current.triggerVictory()
      }
    } else {
      setCurrentRound(currentRound + 1)
      setScore(newScore)
      selectNewWord(words)
    }
  }

  // Initialize audio elements
  useEffect(() => {
    if (typeof window !== "undefined") {
      correctSoundRef.current = new Audio("/games/nong-trai/assets/correct.mp3")
      wrongSoundRef.current = new Audio("/games/nong-trai/assets/wrong.mp3")
      victorySoundRef.current = new Audio("/games/nong-trai/assets/victory.mp3")
      
      // Set volume
      if (correctSoundRef.current) correctSoundRef.current.volume = 0.7
      if (wrongSoundRef.current) wrongSoundRef.current.volume = 0.7
      if (victorySoundRef.current) victorySoundRef.current.volume = 0.8
    }
  }, [])

  const playSound = (type: "success" | "error" | "victory") => {
    try {
      if (type === "success" && correctSoundRef.current) {
        correctSoundRef.current.currentTime = 0
        correctSoundRef.current.play().catch(() => {})
      } else if (type === "error" && wrongSoundRef.current) {
        wrongSoundRef.current.currentTime = 0
        wrongSoundRef.current.play().catch(() => {})
      } else if (type === "victory" && victorySoundRef.current) {
        victorySoundRef.current.currentTime = 0
        victorySoundRef.current.play().catch(() => {})
      }
    } catch (e) {
      // Audio not supported
    }
  }

  if (gameState === "gameOver") {
    const percentage = Math.round((score / settings.roundCount) * 100)
    const isPerfect = score === settings.roundCount

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 via-yellow-100 to-blue-100 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>✨</div>
        <div className="absolute top-20 right-20 text-5xl opacity-20 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>⭐</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '1s' }}>🎈</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '0.3s' }}>🎨</div>
        <ConfettiEffect ref={confettiRef} />
        <VictoryEffects score={score} totalRounds={settings.roundCount} />
        
        {/* Sparkle effects */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            />
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-md relative z-10 animate-bounce-in">
          {/* Title with animation */}
          <div className="mb-6">
            <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-600 to-purple-600 mb-2 animate-pulse">
              {isPerfect ? "🏆 Hoàn Hảo! 🏆" : "🎉 Tuyệt Vời! 🎉"}
            </h2>
            {isPerfect && (
              <div className="text-4xl animate-bounce">⭐ ⭐ ⭐</div>
            )}
          </div>

          {/* Score with glow effect */}
          <div className="mb-8 relative">
            <div className="text-7xl font-black text-green-600 drop-shadow-lg animate-scale-in">
              {score}/{settings.roundCount}
            </div>
            <div className="text-3xl font-bold text-purple-600 mt-2">
              {percentage}% Đúng
            </div>
            {isPerfect && (
              <div className="mt-4 text-2xl font-bold text-yellow-500 animate-pulse">
                🎯 Tất cả đều đúng!
              </div>
            )}
          </div>

          {/* Message with animation */}
          <p className="text-2xl text-gray-700 mb-10 animate-fade-in">
            {isPerfect 
              ? "Bạn là người chiến thắng xuất sắc!" 
              : "Bạn đã hoàn thành trò chơi!"}
          </p>

          {/* Buttons with hover effects */}
          <div className="flex gap-4">
            <Button
              onClick={() => window.location.reload()}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-2xl text-lg transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              🔄 Chơi Lại
            </Button>
            <Button
              onClick={onBackToHome}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-2xl text-lg transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              🏠 Trang Chủ
            </Button>
          </div>
          
          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm font-medium text-gray-600">Giáo viên Hà Thị Thanh Hằng - Trường Mầm non Hoa Sữa</p>
          </div>
        </div>

        <style>{`
          @keyframes bounce-in {
            0% {
              transform: scale(0.3);
              opacity: 0;
            }
            50% {
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes scale-in {
            0% {
              transform: scale(0);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }

          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-bounce-in {
            animation: bounce-in 0.6s ease-out;
          }

          .animate-scale-in {
            animation: scale-in 0.8s ease-out;
            animation-delay: 0.2s;
            animation-fill-mode: both;
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out;
            animation-delay: 0.4s;
            animation-fill-mode: both;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 via-yellow-100 to-blue-100 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-5xl opacity-15 animate-bounce" style={{ animationDuration: '3s' }}>✨</div>
      <div className="absolute top-20 right-20 text-4xl opacity-15 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>⭐</div>
      <div className="absolute bottom-20 left-20 text-4xl opacity-15 animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '1s' }}>🎈</div>
      <div className="absolute bottom-10 right-10 text-5xl opacity-15 animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '0.3s' }}>🎨</div>
      <ConfettiEffect ref={confettiRef} />

      <GameHeader 
        currentRound={currentRound} 
        totalRounds={settings.roundCount} 
        score={score} 
        onBack={onBackToHome}
      />

      <div className="flex flex-col min-h-[calc(100vh-120px)]">
        <div className="flex items-center justify-center flex-1 p-4">
          {currentWord && currentTargetLetter && (
            <CardGame 
              key={`${currentWord.text}-${currentTargetLetter}-${currentRound}`}
              word={currentWord} 
              targetLetter={currentTargetLetter} 
              onCardClick={handleCorrectAnswer}
              onWrongAnswer={handleWrongAnswer}
            onNext={handleNext}
            wordOptions={wordOptions}
          />
          )}
        </div>
        
        {/* Footer */}
        <div className="text-center py-4 text-sm text-gray-600 relative z-10">
          Giáo viên Hà Thị Thanh Hằng - Trường Mầm non Hoa Sữa
        </div>
      </div>
    </div>
  )
}
