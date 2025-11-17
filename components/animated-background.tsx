"use client"

import { useEffect, useRef, useState } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
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

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.5 + 0.2,
    }))

    const shapes = Array.from({ length: 8 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 40 + 20,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.01,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      type: Math.random() > 0.5 ? 'square' : 'diamond',
      opacity: Math.random() * 0.15 + 0.05,
    }))

    const lightLines = Array.from({ length: 8 }, (_, i) => ({
      y: (canvas.height / 8) * i,
      speed: Math.random() * 0.5 + 0.3,
      opacity: Math.random() * 0.15 + 0.05,
    }))

    const animate = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#f8fafc")
      gradient.addColorStop(0.5, "#f1f5f9")
      gradient.addColorStop(1, "#f8fafc")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw light horizontal lines with parallax
      lightLines.forEach((line) => {
        const parallaxOffset = (scrollY * line.speed * 0.1) % canvas.height
        const y = (line.y + parallaxOffset) % canvas.height
        
        ctx.strokeStyle = `rgba(59, 130, 246, ${line.opacity})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      })

      shapes.forEach((shape) => {
        shape.x += shape.vx
        shape.y += shape.vy
        shape.rotation += shape.rotationSpeed

        if (shape.x < -50 || shape.x > canvas.width + 50) shape.vx *= -1
        if (shape.y < -50 || shape.y > canvas.height + 50) shape.vy *= -1

        shape.x = Math.max(-50, Math.min(canvas.width + 50, shape.x))
        shape.y = Math.max(-50, Math.min(canvas.height + 50, shape.y))

        ctx.save()
        ctx.translate(shape.x, shape.y)
        ctx.rotate(shape.rotation)

        if (shape.type === 'square') {
          ctx.strokeStyle = `rgba(59, 130, 246, ${shape.opacity})`
          ctx.lineWidth = 2
          ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
        } else {
          // Diamond
          ctx.strokeStyle = `rgba(147, 51, 234, ${shape.opacity})`
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(0, -shape.size / 2)
          ctx.lineTo(shape.size / 2, 0)
          ctx.lineTo(0, shape.size / 2)
          ctx.lineTo(-shape.size / 2, 0)
          ctx.closePath()
          ctx.stroke()
        }

        ctx.restore()
      })

      // Draw particles with glow
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        const pulsing = Math.sin(time * 0.02 + particle.x * 0.01) * 0.3 + 0.7
        
        ctx.shadowBlur = 20
        ctx.shadowColor = `rgba(59, 130, 246, ${particle.opacity * pulsing})`
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity * pulsing})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      })

      // Draw connections between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.12 * (1 - distance / 120)})`
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
