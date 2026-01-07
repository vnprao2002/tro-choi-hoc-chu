"use client"

import { useEffect, useState } from "react"

interface JumpTextProps {
  text: string
  className?: string
}

export function AnimalJumpText({ text, className = "" }: JumpTextProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <div className={className}>{text}</div>

  return (
    <div className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            animation: `jump 0.6s ease-in-out ${i * 0.05}s infinite`,
          }}
        >
          {char}
        </span>
      ))}
      <style>{`
        @keyframes jump {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}

