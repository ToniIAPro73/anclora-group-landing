interface AnchorMarkProps {
  /** 'field': gran motivo de fondo para el hero. 'mono': monograma pequeño
      para la placa de autoridad del founder. Mismo lenguaje de trazo. */
  variant?: 'field' | 'mono'
  className?: string
}

/**
 * Activo de marca propietario: el ancla de Anclora reducida a su geometría
 * mínima — vástago, arco de caña y arco de uñas — dibujada como instrumento
 * de línea fina, no como icono literal. Comparte lenguaje con SystemRing
 * (trazo único, currentColor, sin relleno) para que hero y founder lean
 * como un mismo sistema visual.
 */
export default function AnchorMark({ variant = 'field', className }: AnchorMarkProps) {
  if (variant === 'mono') {
    return (
      <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
        <circle cx="32" cy="32" r="29" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.45" />
        <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M32 16v17" />
          <path d="M25.5 21a6.5 6.5 0 0 1 13 0" />
          <circle cx="32" cy="16" r="2.6" />
          <path d="M20 32a12 12 0 0 0 24 0" />
        </g>
        <text
          x="32"
          y="47"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="8.5"
          letterSpacing="1"
          fill="currentColor"
        >
          AB
        </text>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 800 800" className={className} aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <circle cx="400" cy="400" r="362" strokeWidth="1" opacity="0.4" />
        <circle cx="400" cy="400" r="296" strokeWidth="0.75" opacity="0.24" />
        <path d="M400 158v250" strokeWidth="1.75" opacity="0.65" />
        <path d="M338 216a62 62 0 0 1 124 0" strokeWidth="1.75" opacity="0.65" />
        <circle cx="400" cy="158" r="19" strokeWidth="1.75" opacity="0.65" />
        <path d="M232 418a168 168 0 0 0 336 0" strokeWidth="1.75" opacity="0.65" />
        <path d="M400 408l-96 42" strokeWidth="1.25" opacity="0.45" />
        <path d="M400 408l96 42" strokeWidth="1.25" opacity="0.45" />
      </g>
    </svg>
  )
}
