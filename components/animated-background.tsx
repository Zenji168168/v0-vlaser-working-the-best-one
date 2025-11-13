"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Color palette
    const bgColor = "#e8eef9"
    const accentColor = "#ffffff"
    const lineColor = "rgba(255, 255, 255, 0.3)"

    // Animation variables
    let animationId: number
    let time = 0

    // Create animated dots
    const dots = Array.from({ length: 25 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.3,
    }))

    // Animation loop
    const animate = () => {
      // Clear with gradient background
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw subtle wave lines at bottom
      ctx.strokeStyle = lineColor
      ctx.lineWidth = 2
      ctx.beginPath()
      for (let i = 0; i < canvas.width; i += 20) {
        const waveOffset = Math.sin(time * 0.005 + i * 0.01) * 15
        const y = canvas.height - 100 + waveOffset
        if (i === 0) {
          ctx.moveTo(i, y)
        } else {
          ctx.lineTo(i, y)
        }
      }
      ctx.stroke()

      // Draw horizontal accent lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
      ctx.lineWidth = 1
      const linePositions = [canvas.height * 0.15, canvas.height * 0.18, canvas.height * 0.8, canvas.height * 0.82]
      linePositions.forEach((y) => {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      })

      // Animate and draw dots
      dots.forEach((dot) => {
        // Update position
        dot.x += dot.vx
        dot.y += dot.vy

        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1

        // Keep in bounds
        dot.x = Math.max(0, Math.min(canvas.width, dot.x))
        dot.y = Math.max(0, Math.min(canvas.height, dot.y))

        // Draw with pulsing opacity
        const pulsing = Math.sin(time * 0.01 + dot.x * 0.001) * 0.3 + 0.7
        ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity * pulsing})`
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw wavy shapes at bottom
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)"
      ctx.beginPath()
      ctx.moveTo(0, canvas.height - 80)
      for (let i = 0; i <= canvas.width; i += 30) {
        const curveOffset = Math.sin(time * 0.003 + i * 0.01) * 30
        ctx.quadraticCurveTo(i + 15, canvas.height - 80 - curveOffset, i + 30, canvas.height - 80)
      }
      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()
      ctx.fill()

      time++
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" style={{ background: "#e8eef9" }} />
}
