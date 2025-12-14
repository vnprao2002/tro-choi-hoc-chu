"use client"

import { useEffect, useState } from "react"

interface VictoryEffectsProps {
  score: number
  totalRounds: number
}

export default function VictoryEffects({ score, totalRounds }: VictoryEffectsProps) {
  const [emojis, setEmojis] = useState<Array<{ id: number; emoji: string; x: number; y: number; vx: number; vy: number }>>([])

  useEffect(() => {
    // Tạo emoji bay lên
    const emojiList = ["🎉", "🎊", "⭐", "🌟", "✨", "🏆", "👏", "🎈", "🎁", "💫"]
    const newEmojis = []
    
    for (let i = 0; i < 20; i++) {
      newEmojis.push({
        id: i,
        emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
        x: Math.random() * 100,
        y: 100 + Math.random() * 20,
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * 3 - 2,
      })
    }
    
    setEmojis(newEmojis)

    // Play victory sound
    playVictorySound()

    // Cleanup after animation
    const timer = setTimeout(() => {
      setEmojis([])
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const playVictorySound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      
      // Tạo chuỗi nốt nhạc vui vẻ
      const notes = [523.25, 659.25, 783.99, 1046.50] // C, E, G, C (quãng tám)
      
      notes.forEach((freq, index) => {
        setTimeout(() => {
          const oscillator = audioContext.createOscillator()
          const gainNode = audioContext.createGain()
          
          oscillator.connect(gainNode)
          gainNode.connect(audioContext.destination)
          
          oscillator.frequency.value = freq
          oscillator.type = "sine"
          
          gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
          
          oscillator.start(audioContext.currentTime)
          oscillator.stop(audioContext.currentTime + 0.3)
        }, index * 100)
      })
    } catch (e) {
      // Audio not supported
    }
  }

  return (
    <>
      <style>{`
        @keyframes floatUp {
          to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {emojis.map((emoji) => (
          <div
            key={emoji.id}
            className="absolute text-4xl"
            style={{
              left: `${emoji.x}%`,
              top: `${emoji.y}%`,
              animation: `floatUp 3s ease-out forwards`,
            }}
          >
            {emoji.emoji}
          </div>
        ))}
      </div>
    </>
  )
}

