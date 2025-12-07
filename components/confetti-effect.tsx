"use client"

import { useEffect, useRef, forwardRef, useImperativeHandle } from "react"

const ConfettiEffect = forwardRef((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<any[]>([])

  useImperativeHandle(ref, () => ({
    trigger: (count = 50) => {
      if (canvasRef.current) {
        createConfetti(count)
      }
    },
    triggerVictory: () => {
      if (canvasRef.current) {
        // Trigger nhiều lần với delay để tạo hiệu ứng liên tục
        createConfetti(200)
        setTimeout(() => createConfetti(150), 200)
        setTimeout(() => createConfetti(100), 400)
        setTimeout(() => createConfetti(100), 600)
      }
    },
    clear: () => {
      particlesRef.current = []
      const canvas = canvasRef.current
      if (canvas) {
        const ctx = canvas.getContext("2d")
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
      }
    },
  }))

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i]

        p.x += p.vx
        p.y += p.vy
        p.vy += 0.1 // gravity
        p.rotation += p.rotationSpeed

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
        ctx.restore()

        p.life--
        if (p.life <= 0) {
          particlesRef.current.splice(i, 1)
        }
      }

      if (particlesRef.current.length > 0) {
        requestAnimationFrame(animate)
      }
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const createConfetti = (count = 50, fromTop = false) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const colors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#95E1D3", "#F38181", "#FF9FF3", "#54A0FF", "#5F27CD", "#00D2D3", "#FF9F43"]

    const startX = fromTop ? Math.random() * canvas.width : canvas.width / 2
    const startY = fromTop ? 0 : canvas.height / 2

    for (let i = 0; i < count; i++) {
      particlesRef.current.push({
        x: startX,
        y: startY,
        vx: (Math.random() - 0.5) * (fromTop ? 8 : 10),
        vy: fromTop ? Math.random() * 5 + 2 : (Math.random() - 0.5) * 10 - 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.4,
        life: fromTop ? 150 : 100,
      })
    }

    // Trigger animation
    const animate = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i]

        p.x += p.vx
        p.y += p.vy
        p.vy += 0.1
        p.rotation += p.rotationSpeed

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
        ctx.restore()

        p.life--
        if (p.life <= 0) {
          particlesRef.current.splice(i, 1)
        }
      }

      if (particlesRef.current.length > 0) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }

  return <canvas ref={canvasRef} className="fixed top-0 left-0 pointer-events-none" />
})

ConfettiEffect.displayName = "ConfettiEffect"

export default ConfettiEffect
