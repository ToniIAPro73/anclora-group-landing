import { useEffect, useRef, useState } from 'react'

interface SystemRingProps {
  /** Tamaño en px del lienzo cuadrado. */
  size?: number
  /** Etiquetas de graduación en sentido horario, empezando arriba (12h). */
  labels?: string[]
  /** Índice de la etiqueta activa (resalta ese sector del anillo). */
  activeIndex?: number
  className?: string
  /** Texto accesible del SVG (role="img"); debe venir traducido al idioma activo. */
  ariaLabel?: string
}

const TAU = Math.PI * 2

/** Traza una onda sinusoidal suave entre dos extremos horizontales — la
    misma ondulación de las tres ondas plateadas de la medalla oficial de
    Anclora Group, muestreada en segmentos rectos finos (suave a la escala
    de render del anillo, sin depender de curvas bezier). */
function wavePath(centerX: number, y: number, halfWidth: number, amplitude: number, periods: number): string {
  const segments = 40
  let d = ''
  for (let i = 0; i <= segments; i++) {
    const t = i / segments
    const x = centerX - halfWidth + t * halfWidth * 2
    const py = y + amplitude * Math.sin(t * periods * Math.PI * 2)
    d += `${i === 0 ? 'M' : 'L'}${x.toFixed(2)} ${py.toFixed(2)} `
  }
  return d.trim()
}

/** Fracción del radio de etiquetas respecto al tamaño total del SVG: los
    números van FUERA del anillo (labelR = size*0.455), junto al borde, para
    no solaparse nunca con el titular. La usa SonarField para saber cuándo el
    frente del pulso cruza el círculo de los números. */
export const RING_LABEL_FRACTION = 0.455

/**
 * Instrumento de a bordo construido a partir de la medalla de Anclora Group:
 * anillo metálico graduado + tres ondas plateadas convertidas en un indicador
 * vivo. Es el único elemento de la landing con licencia para llamar la
 * atención (ver frontend-design skill: gastar la osadía en un solo sitio).
 *
 * La secuencia de barrido corre una vez al montar y se detiene en el sector
 * activo — nunca gira en bucle. Con prefers-reduced-motion, aparece ya
 * asentada en su estado final.
 */
export default function SystemRing({
  size = 360,
  labels = [],
  activeIndex = 0,
  className,
  ariaLabel = 'Instrumento del ecosistema Anclora Group',
}: SystemRingProps) {
  const [sweepProgress, setSweepProgress] = useState(0)
  const rafRef = useRef<number | undefined>(undefined)

  const targetAngle = labels.length > 0 ? (activeIndex / labels.length) * TAU : TAU * 0.62

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setSweepProgress(1)
      return
    }

    const durationMs = 1100
    const start = performance.now()

    const step = (now: number) => {
      const elapsed = now - start
      const linear = Math.min(elapsed / durationMs, 1)
      // ease-out cúbico, coherente con --ease-out del sistema de tokens
      const eased = 1 - Math.pow(1 - linear, 3)
      setSweepProgress(eased)
      if (linear < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }

    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const center = size / 2
  /* Geometría compactada hacia el centro para dejar una franja exterior libre:
     los números se colocan fuera del campo del anillo, pegados a su borde */
  const outerR = size * 0.4
  const tickR = size * 0.34
  const waveBandTop = size * 0.44
  const waveBandGap = size * 0.06

  const currentAngle = -Math.PI / 2 + targetAngle * sweepProgress
  const arcEnd = {
    x: center + outerR * Math.cos(currentAngle),
    y: center + outerR * Math.sin(currentAngle),
  }
  const largeArc = targetAngle * sweepProgress > Math.PI ? 1 : 0

  const tickCount = Math.max(labels.length, 24)
  const ticks = Array.from({ length: tickCount }, (_, i) => {
    const isLabelTick = labels.length > 0 && i < labels.length
    const angle = -Math.PI / 2 + (i / tickCount) * TAU
    const inner = isLabelTick ? tickR - 10 : tickR - 5
    const x1 = center + inner * Math.cos(angle)
    const y1 = center + inner * Math.sin(angle)
    const x2 = center + tickR * Math.cos(angle)
    const y2 = center + tickR * Math.sin(angle)
    const isActive = isLabelTick && i === activeIndex
    return { x1, y1, x2, y2, isLabelTick, isActive, key: `tick-${i}` }
  })

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <radialGradient id="systemring-field" cx="50%" cy="42%" r="65%">
          <stop offset="0%" stopColor="#152A4D" />
          <stop offset="100%" stopColor="#0A1F3D" />
        </radialGradient>
        {/* Barrido con recorrido azul→púrpura: la señal cambia de frecuencia
            al avanzar, coherente con los pulsos del SonarField */}
        <linearGradient
          id="systemring-sweep"
          x1={center}
          y1={center - outerR}
          x2={center + outerR}
          y2={center + outerR}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#5FA8FF" />
          <stop offset="100%" stopColor="#6C63FF" />
        </linearGradient>
      </defs>

      <circle cx={center} cy={center} r={outerR + size * 0.02} fill="url(#systemring-field)" />

      <circle
        cx={center}
        cy={center}
        r={outerR}
        fill="none"
        stroke="rgba(229, 231, 235, 0.16)"
        strokeWidth={1.5}
      />

      {ticks.map((tick) => (
        <line
          key={tick.key}
          x1={tick.x1}
          y1={tick.y1}
          x2={tick.x2}
          y2={tick.y2}
          stroke={tick.isActive ? '#5FA8FF' : 'rgba(229, 231, 235, 0.32)'}
          strokeWidth={tick.isLabelTick ? 1.75 : 1}
        />
      ))}

      {/* Barrido: sector operativo activo, con degradado azul→púrpura */}
      <path
        d={`M ${center} ${center - outerR} A ${outerR} ${outerR} 0 ${largeArc} 1 ${arcEnd.x} ${arcEnd.y}`}
        fill="none"
        stroke="url(#systemring-sweep)"
        strokeWidth={2.5}
        strokeLinecap="round"
        opacity={0.9}
      />

      {/* Las tres ondas de la medalla oficial, a escala del anillo: misma
          ondulación, mismo grosor y color plateado — respiran juntas como un
          único grupo (ver .systemring-waves en sections.css) para que el
          movimiento sea simultáneo y coherente, nunca desfasado. */}
      <g className="systemring-waves">
        {[0, 1, 2].map((i) => (
          <path
            key={`wave-${i}`}
            d={wavePath(center, waveBandTop + i * waveBandGap, size * 0.16, size * 0.014, 1.5)}
            fill="none"
            stroke="rgba(229, 231, 235, 0.55)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </g>

      {labels.map((label, i) => {
        const angle = -Math.PI / 2 + (i / labels.length) * TAU
        const labelR = size * RING_LABEL_FRACTION
        const x = center + labelR * Math.cos(angle)
        const y = center + labelR * Math.sin(angle)
        return (
          <text
            key={label}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="'JetBrains Mono', monospace"
            fontSize={size * 0.032}
            fill={i === activeIndex ? '#5FA8FF' : 'rgba(229, 231, 235, 0.85)'}
          >
            {String(i + 1).padStart(2, '0')}
          </text>
        )
      })}
    </svg>
  )
}
