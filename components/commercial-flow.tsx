import { Reveal } from './reveal'

const stages = [
  { n: '01', title: 'Understand', body: 'Understand the requirement in full — what is needed, why, and by when.' },
  { n: '02', title: 'Identify', body: 'Identify the right opportunity and the parties best placed to deliver.' },
  { n: '03', title: 'Connect', body: 'Bring the right people, products and resources together.' },
  { n: '04', title: 'Execute', body: 'Move the transaction forward efficiently and transparently.' },
  { n: '05', title: 'Build', body: 'Turn individual transactions into lasting, repeatable relationships.' },
]

export function CommercialFlow() {
  return (
    <section id="approach" className="bg-cloud py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-mcc-red" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-mcc-red">
              The Approach
            </p>
          </div>
          <h2 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-navy md:text-5xl lg:text-6xl">
            From requirement to relationship.
          </h2>
        </Reveal>

        <ol className="mt-16 border-t border-border">
          {stages.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 80}>
              <div className="group grid grid-cols-1 items-center gap-4 border-b border-border py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="flex items-center gap-4 md:col-span-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white font-display text-lg font-extrabold text-mcc-blue shadow-sm transition-colors group-hover:bg-mcc-blue group-hover:text-white md:h-14 md:w-14 md:text-xl">
                    {s.n}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
                    {s.title}
                  </h3>
                </div>
                <div className="md:col-span-6">
                  <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
