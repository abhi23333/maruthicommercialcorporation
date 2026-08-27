import { Reveal } from './reveal'
import { SwooshMark } from './wave-divider'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-white pt-28 pb-20 md:pt-32"
    >
      {/* Background: brand swoosh field */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -right-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-mcc-blue/[0.06] blur-3xl" />
        <div className="absolute -bottom-52 -left-40 h-[36rem] w-[36rem] rounded-full bg-mcc-red/[0.06] blur-3xl" />
        <svg
          className="absolute inset-x-0 bottom-0 h-[45vh] w-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
        >
          <path
            d="M-50 470 C 300 330, 620 330, 940 440 C 1160 515, 1330 510, 1500 430"
            stroke="var(--mcc-blue)"
            strokeWidth="3"
            opacity="0.16"
            fill="none"
          />
          <path
            d="M-50 520 C 320 380, 640 380, 980 490 C 1200 560, 1360 555, 1520 480"
            stroke="var(--mcc-red)"
            strokeWidth="3"
            opacity="0.16"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-cloud/60 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-mcc-red" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-navy/70">
                Miryalaguda &middot; Telangana &middot; India
              </span>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-8 font-display text-[3.15rem] font-extrabold leading-[0.98] tracking-[-0.02em] text-navy sm:text-6xl md:text-7xl lg:text-[5.75rem]">
              Building{' '}
              <span className="brand-gradient-text">Connections.</span>
              <br />
              Moving{' '}
              <span className="relative inline-block text-mcc-blue">
                Opportunities.
                <SwooshMark className="absolute -bottom-5 left-0 h-5 w-40 md:-bottom-7 md:h-7 md:w-64" />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-12 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Maruthi Commercial Corporation is a diversified commercial
              enterprise built on trust, market insight and relationships — we
              understand what the market needs and bring the right parties
              together to make it happen.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#business"
                className="inline-flex items-center justify-center rounded-full bg-mcc-red px-8 py-4 text-base font-bold text-white shadow-lg shadow-mcc-red/20 transition-transform hover:-translate-y-0.5 hover:bg-mcc-red/90"
              >
                Explore Our Business
              </a>
              <a
                href="#promoters"
                className="inline-flex items-center justify-center rounded-full border-2 border-navy/15 px-8 py-4 text-base font-bold text-navy transition-colors hover:border-mcc-blue hover:text-mcc-blue"
              >
                Meet the Promoters
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: 'Two', v: 'Generations of leadership' },
                { k: 'Multi', v: 'Sector commercial focus' },
                { k: 'Trust', v: 'At the core of every deal' },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl font-extrabold text-mcc-blue md:text-3xl">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground md:text-sm">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
