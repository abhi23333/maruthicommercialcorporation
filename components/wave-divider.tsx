export function WaveDivider({
  className = '',
  flip = false,
}: {
  className?: string
  flip?: boolean
}) {
  return (
    <div
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 90"
        className={`h-8 w-full md:h-12 ${flip ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 50 C 240 10, 480 10, 720 45 C 960 80, 1200 80, 1440 40 L 1440 90 L 0 90 Z"
          fill="var(--mcc-blue)"
          opacity="0.9"
        />
        <path
          d="M0 62 C 240 26, 480 26, 720 58 C 960 90, 1200 90, 1440 54"
          stroke="var(--mcc-red)"
          strokeWidth="6"
          fill="none"
        />
      </svg>
    </div>
  )
}

/** The signature MCC dual-swoosh mark — a red + blue crossing ribbon. */
export function SwooshMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      className={className}
      fill="none"
      aria-hidden
    >
      <path
        d="M2 30 C 30 8, 60 8, 92 22 C 104 27, 114 26, 118 20"
        stroke="var(--mcc-blue)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M2 36 C 34 18, 66 18, 100 30 C 110 33, 116 32, 118 29"
        stroke="var(--mcc-red)"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  )
}
