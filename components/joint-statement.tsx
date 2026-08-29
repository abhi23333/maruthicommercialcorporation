import { Reveal } from './reveal'

export function JointStatement() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white md:py-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <svg
          className="absolute inset-x-0 top-1/2 h-40 w-full -translate-y-1/2"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 120 C 300 40, 620 40, 940 120 C 1160 175, 1330 170, 1500 100"
            stroke="var(--mcc-blue)"
            strokeWidth="2"
            opacity="0.35"
          />
          <path
            d="M-60 150 C 260 70, 580 70, 900 150 C 1120 205, 1300 200, 1480 130"
            stroke="var(--mcc-red)"
            strokeWidth="2"
            opacity="0.35"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-white/50">
            One Foundation &middot; One Vision
          </p>
        </Reveal>
        <Reveal delay={120}>
          <blockquote className="mx-auto mt-10 max-w-4xl text-balance font-display text-3xl font-extrabold leading-[1.12] tracking-tight md:text-5xl lg:text-[3.5rem]">
            &ldquo;Experience gives us the perspective to know what matters.{' '}
            <span className="brand-gradient-text">Vision</span> gives us the
            courage to pursue what comes next.&rdquo;
          </blockquote>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <span className="h-1 w-16 rounded-full bg-gradient-to-r from-mcc-red to-mcc-blue" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/50">
              Maaruthi Commercial Corporation
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
