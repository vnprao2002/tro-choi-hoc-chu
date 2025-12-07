"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import CardGame from "./card-game"
import GameHeader from "./game-header"
import ConfettiEffect from "./confetti-effect"
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

  const handleNext = () => {
    const newScore = score + 1

    if (currentRound >= settings.roundCount) {
      setScore(newScore)
      setGameState("gameOver")
    } else {
      setCurrentRound(currentRound + 1)
      setScore(newScore)
      selectNewWord(words)
    }
  }

  const playSound = (type: "success" | "error") => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      if (type === "success") {
        oscillator.frequency.value = 800
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.3)
      }
    } catch (e) {
      // Audio not supported
    }
  }

  if (gameState === "gameOver") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-md">
          <h2 className="text-5xl font-black text-blue-600 mb-6">🎉 Tuyệt Vời! 🎉</h2>
          <p className="text-5xl text-green-600 font-black mb-8">
            {score}/{settings.roundCount}
          </p>
          <p className="text-2xl text-gray-700 mb-10">Bạn đã hoàn thành trò chơi!</p>
          <div className="flex gap-4">
            <Button
              onClick={() => window.location.reload()}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-2xl text-lg"
            >
              Chơi Lại
            </Button>
            <Button
              onClick={onBackToHome}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-2xl text-lg"
            >
              Trang Chủ
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-green-300 to-yellow-300 overflow-hidden">
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
            onNext={handleNext}
            wordOptions={wordOptions}
          />
          )}
        </div>
        
        {/* Footer */}
        <div className="text-center py-4 text-sm text-gray-600">
          Giáo viên Hà Thị Thanh Hăng - Trường Mầm non Hoa Sữa
        </div>
      </div>
    </div>
  )
}
