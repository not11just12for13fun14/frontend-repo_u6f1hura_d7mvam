import { useEffect, useRef } from 'react'

// Lightweight mouse trail using canvas particles
export default function MouseTrail() {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const rafRef = useRef(0)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const addParticle = (x, y) => {
      particlesRef.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 1,
        life: 1,
        hue: Math.floor(200 + Math.random() * 60),
      })
      if (particlesRef.current.length > 200) {
        particlesRef.current.splice(0, particlesRef.current.length - 200)
      }
    }

    const onMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      mouseRef.current = { x, y }
      // Add a few particles per move for a smooth trail
      for (let i = 0; i < 3; i++) addParticle(x, y)
    }
    window.addEventListener('mousemove', onMove)

    const tick = () => {
      rafRef.current = requestAnimationFrame(tick)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particlesRef.current) {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.002 // subtle gravity
        p.life *= 0.97

        ctx.beginPath()
        ctx.fillStyle = `hsla(${p.hue}, 90%, 60%, ${p.life})`
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }
      // fade old particles
      particlesRef.current = particlesRef.current.filter((p) => p.life > 0.05)
    }
    tick()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 mix-blend-screen"
      aria-hidden
    />
  )
}
