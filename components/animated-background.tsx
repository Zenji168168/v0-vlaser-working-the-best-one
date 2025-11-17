"use client"

import { useEffect, useRef, useState } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationId: number
    let time = 0

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.2,
    }))

    const lightLines = Array.from({ length: 8 }, (_, i) => ({
      y: (canvas.height / 8) * i,
      speed: Math.random() * 0.5 + 0.3,
      opacity: Math.random() * 0.15 + 0.05,
    }))

    const animate = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#0a0e27")
      gradient.addColorStop(0.5, "#141b3d")
      gradient.addColorStop(1, "#0f1629")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      lightLines.forEach((line) => {
        const parallaxOffset = (scrollY * line.speed * 0.1) % canvas.height
        const y = (line.y + parallaxOffset) % canvas.height
        
        ctx.strokeStyle = `rgba(102, 126, 234, ${line.opacity})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      })

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        const pulsing = Math.sin(time * 0.02 + particle.x * 0.01) * 0.3 + 0.7
        
        // Glow effect
        ctx.shadowBlur = 15
        ctx.shadowColor = `rgba(102, 126, 234, ${particle.opacity * pulsing})`
        ctx.fillStyle = `rgba(102, 126, 234, ${particle.opacity * pulsing})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      })

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.strokeStyle = `rgba(102, 126, 234, ${0.1 * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      time++
      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollY])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}
