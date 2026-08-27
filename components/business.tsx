import { Reveal } from './reveal'

const pillars = [
  {
    n: '01',
    title: 'Trading & Commerce',
    body: 'Sourcing, supplying and moving goods where they are needed — matching demand with the right supply across categories.',
  },
  {
    n: '02',
    title: 'Deal Origination',
    body: 'Identifying genuine commercial opportunities early and structuring transactions that work for every party involved.',
  },
  {
    n: '03',
    title: 'Partnerships & Networks',
    body: 'Connecting buyers, sellers, partners and resources through a trusted network built over years of relationships.',
  },
  {
    n: '04',
    title: 'Diversified Ventures',
    body: 'Staying flexible across sectors so the enterprise can act on opportunity wherever real value emerges.',
  },
]

export function Business() {
  return (
    <section id="business" className="relative bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-mcc-red" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-mcc-red">
              What We Do
            </p>
          </div>
          <h2 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-navy md:text-5xl lg:text-6xl">
            Versatile by design.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            MCC works across a spectrum of commercial activity rather than a
            single line of business — an approach that keeps us responsive to
            what the market actually needs.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={(i % 2) * 120}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-mcc-blue/40 hover:shadow-[0_18px_45px_rgba(15,25,45,0.10)] md:p-10">
                <div className="flex items-start justify-between gap-6">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
                    {p.title}
                  </h3>
                  <span className="font-display text-4xl font-extrabold text-cloud transition-colors group-hover:text-mcc-red/20 md:text-5xl">
                    {p.n}
                  </span>
                </div>
                <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
                <span className="mt-8 block h-1 w-12 rounded-full bg-gradient-to-r from-mcc-red to-mcc-blue transition-all duration-300 group-hover:w-24" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
