import { Reveal } from './reveal'

const principles = [
  {
    title: 'Versatility',
    body: "A flexible approach that isn't restricted to a single category — we go where genuine value is.",
  },
  {
    title: 'Market Awareness',
    body: 'A grounded understanding of real commercial requirements and shifting market conditions.',
  },
  {
    title: 'Relationships',
    body: 'Business built through credibility, clear communication and long-term relationships.',
  },
  {
    title: 'Execution',
    body: 'A practical, responsive approach that carries every transaction from requirement to completion, including the coordination and movement of goods where logistics is involved.',
  },
]

export function WhyMcc() {
  return (
    <section className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-mcc-red" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-mcc-red">
              Why MCC
            </p>
          </div>

          <h2 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-navy md:text-5xl lg:text-6xl">
            Built on trust. Driven by opportunity.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-border bg-cloud/40 p-7 transition-colors hover:bg-white hover:shadow-[0_14px_40px_rgba(15,25,45,0.08)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-mcc-red to-mcc-blue font-display text-lg font-extrabold text-white">
                  {String(i + 1)}
                </span>

                <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight text-navy">
                  {p.title}
                </h3>

                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
