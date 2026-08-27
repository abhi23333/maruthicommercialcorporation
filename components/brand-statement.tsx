import { Reveal } from './reveal'

export function BrandStatement() {
  return (
    <section className="relative flex min-h-[60svh] items-center overflow-hidden bg-navy py-24 text-white md:py-36">
      <span
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center font-display text-[38vw] font-extrabold leading-none text-white/[0.035] [animation:mcc-drift_22s_ease-in-out_infinite]"
        aria-hidden
      >
        MCC
      </span>

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <h2 className="max-w-4xl text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
            Where requirements meet{' '}
            <span className="brand-gradient-text">opportunity.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-10 flex items-center gap-5">
            <span className="h-1 w-16 rounded-full bg-gradient-to-r from-mcc-red to-mcc-blue" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/60">
              Maruthi Commercial Corporation
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
