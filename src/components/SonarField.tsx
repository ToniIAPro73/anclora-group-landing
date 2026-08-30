import { useEffect, useRef, type RefObject } from 'react'
import { RING_LABEL_FRACTION } from './SystemRing'

interface SonarFieldProps {
  /** Puntero normalizado (-1..1) compartido con el hero; el centro del sonar
      deriva unos píxeles con él (paralaje sutil, nunca agresivo). */
  pointerRef: RefObject<{ x: number; y: number }>
  className?: string
}

interface Pulse {
  born: number
  duration: number
}

interface Particle {
  x: number
  y: number
  r: number
  speed: number
  drift: number
  alpha: number
  blue: boolean
}

const PULSE_INTERVAL = 3400
const PULSE_DURATION = 6800
const MAX_PULSES = 3
const PARTICLE_COUNT = 26

/** Ventana (px) alrededor del círculo de números en la que el frente del
    pulso los enciende en dorado. Dimensionada para que el encendido dure un
    poco más que la transición CSS (260ms) y el dorado llegue a asentarse. */
const LABEL_LIT_WINDOW = 62

/* Recorrido cromático del pulso: nace en signal-blue, cruza command-purple y
   muere en plata — la señal cambia de "frecuencia" al alejarse del centro. */
const PULSE_STOPS: Array<[number, [number, number, number]]> = [
  [0, [95, 168, 255]],
  [0.55, [108, 99, 255]],
  [1, [229, 231, 235]],
]

function pulseColor(t: number, alpha: number): string {
  let a = PULSE_STOPS[0]
  let b = PULSE_STOPS[PULSE_STOPS.length - 1]
  for (let i = 0; i < PULSE_STOPS.length - 1; i++) {
    if (t >= PULSE_STOPS[i][0] && t <= PULSE_STOPS[i + 1][0]) {
      a = PULSE_STOPS[i]
      b = PULSE_STOPS[i + 1]
      break
    }
  }
  const local = (t - a[0]) / (b[0] - a[0] || 1)
  const mix = (i: number) => Math.round(a[1][i] + (b[1][i] - a[1][i]) * local)
  return `rgba(${mix(0)}, ${mix(1)}, ${mix(2)}, ${alpha.toFixed(3)})`
}

/**
 * Capa atmosférica del hero: pulsos de sonar que nacen del centro del anillo y
 * partículas de profundidad a la deriva. Es atmósfera, no efecto — opacidades
 * bajas, tiempos largos, un solo bucle de rAF que se pausa fuera de pantalla o
 * con la pestaña oculta. Con prefers-reduced-motion pinta tres anillos
 * estáticos y no anima nada.
 */
export default function SonarField({ pointerRef, className }: SonarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let raf = 0
    let running = false
    let inView = true
    const pulses: Pulse[] = []
    const particles: Particle[] = []
    let lastPulse = 0

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    /* El frente del pulso enciende los números del SystemRing al cruzar su
       círculo: medimos el radio de ese círculo en px reales de pantalla */
    const heroEl = canvas.closest('section')
    const ringLayer = heroEl?.querySelector('.hero__ring-layer')
    let labelRadiusPx = 0
    /* El origen del pulso debe coincidir con el centro real del anillo — no
       con el centro del hero — para que la onda nazca inequívocamente del
       centro del sistema, sin importar el desplazamiento asimétrico del
       anillo en desktop. */
    let ringCenterX = 0
    let ringCenterY = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      if (ringLayer) {
        const ringRect = ringLayer.getBoundingClientRect()
        labelRadiusPx = ringRect.width * RING_LABEL_FRACTION
        ringCenterX = ringRect.left - rect.left + ringRect.width / 2
        ringCenterY = ringRect.top - rect.top + ringRect.height / 2
      } else {
        labelRadiusPx = 0
        ringCenterX = width / 2
        ringCenterY = height * 0.44
      }
    }

    const seedParticles = () => {
      particles.length = 0
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random(),
          y: Math.random(),
          r: 0.8 + Math.random() * 1.4,
          speed: 0.006 + Math.random() * 0.014,
          drift: (Math.random() - 0.5) * 0.008,
          alpha: 0.1 + Math.random() * 0.28,
          blue: Math.random() < 0.3,
        })
      }
    }

    const center = () => {
      const p = pointerRef.current ?? { x: 0, y: 0 }
      return {
        x: ringCenterX + p.x * 10,
        y: ringCenterY + p.y * 10,
      }
    }

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height)
      const c = center()
      const maxR = Math.hypot(width, height) * 0.55
      let labelsLit = false

      // Pulsos de sonar: anillo que se expande, cambia de color y se apaga.
      // Doble trazo: halo ancho tenue + filo fino, para leer el degradado.
      for (let i = pulses.length - 1; i >= 0; i--) {
        const t = (now - pulses[i].born) / pulses[i].duration
        if (t >= 1) {
          pulses.splice(i, 1)
          continue
        }
        const eased = 1 - Math.pow(1 - t, 3)
        const radius = eased * maxR
        const fade = 1 - eased

        if (labelRadiusPx > 0 && Math.abs(radius - labelRadiusPx) < LABEL_LIT_WINDOW) {
          labelsLit = true
        }

        ctx.beginPath()
        ctx.arc(c.x, c.y, radius, 0, Math.PI * 2)
        ctx.strokeStyle = pulseColor(eased, 0.1 * fade)
        ctx.lineWidth = 7
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(c.x, c.y, radius, 0, Math.PI * 2)
        ctx.strokeStyle = pulseColor(eased, 0.3 * fade)
        ctx.lineWidth = 1.5
        ctx.stroke()
      }

      heroEl?.classList.toggle('hero--labels-lit', labelsLit)

      // Partículas de profundidad: deriva lenta, parpadeo casi imperceptible
      for (const p of particles) {
        p.y -= p.speed / 100
        p.x += p.drift / 100
        if (p.y < -0.02) p.y = 1.02
        if (p.x < -0.02) p.x = 1.02
        if (p.x > 1.02) p.x = -0.02
        const twinkle = 0.75 + 0.25 * Math.sin(now / 1400 + p.x * 40)
        ctx.beginPath()
        ctx.arc(p.x * width, p.y * height, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.blue
          ? `rgba(95, 168, 255, ${(p.alpha * twinkle).toFixed(3)})`
          : `rgba(229, 231, 235, ${(p.alpha * 0.7 * twinkle).toFixed(3)})`
        ctx.fill()
      }
    }

    const tick = (now: number) => {
      if (!running) return
      if (now - lastPulse > PULSE_INTERVAL && pulses.length < MAX_PULSES) {
        pulses.push({ born: now, duration: PULSE_DURATION })
        lastPulse = now
      }
      draw(now)
      raf = requestAnimationFrame(tick)
    }

    const start = () => {
      if (running || !inView || document.hidden) return
      running = true
      lastPulse = performance.now() - PULSE_INTERVAL // primer pulso inmediato
      raf = requestAnimationFrame(tick)
    }

    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    resize()
    seedParticles()

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      // Estado asentado: tres anillos concéntricos tenues, uno por color del
      // recorrido del pulso, sin movimiento
      const c = { x: ringCenterX, y: ringCenterY }
      const maxR = Math.hypot(width, height) * 0.55
      const staticRings: Array<[number, string]> = [
        [0.35, 'rgba(95, 168, 255, 0.08)'],
        [0.6, 'rgba(108, 99, 255, 0.07)'],
        [0.85, 'rgba(229, 231, 235, 0.05)'],
      ]
      for (const [f, color] of staticRings) {
        ctx.beginPath()
        ctx.arc(c.x, c.y, f * maxR, 0, Math.PI * 2)
        ctx.strokeStyle = color
        ctx.lineWidth = 1
        ctx.stroke()
      }
      return
    }

    const resizeObserver = new ResizeObserver(() => {
      resize()
      seedParticles()
    })
    resizeObserver.observe(canvas)

    const viewObserver = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? true
        if (inView) start()
        else stop()
      },
      { threshold: 0 },
    )
    viewObserver.observe(canvas)

    const onVisibility = () => {
      if (document.hidden) stop()
      else start()
    }
    document.addEventListener('visibilitychange', onVisibility)

    start()

    return () => {
      stop()
      resizeObserver.disconnect()
      viewObserver.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      heroEl?.classList.remove('hero--labels-lit')
    }
  }, [pointerRef])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
