import Reveal from "@/components/Reveal";

const path = [
  { n: "01", t: "Pre-IPO", d: "Early conviction positions ahead of listing." },
  { n: "02", t: "IPO Cornerstone", d: "Cornerstone participation in Hong Kong offerings." },
  { n: "03", t: "Anchor Participation", d: "Anchoring in priority, high-conviction transactions." },
  { n: "04", t: "Post-Listing", d: "Continued accumulation in the secondary market." },
  { n: "05", t: "Long-Term Hold", d: "Enduring ownership and ecosystem support." },
];

export default function Mandate() {
  return (
    <section id="mandate" className="scroll-mt-20 py-24 sm:py-28">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow">Our Mandate</span>
            <h2 className="display mt-6 text-3xl leading-tight sm:text-4xl">
              From pre-IPO to long-term public ownership.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-lg leading-relaxed text-ink/65 lg:pt-2">
              <p>
                We focus on Hong Kong capital-market opportunities for China&rsquo;s
                leading technology companies — connecting founders with industrial
                capital, family offices, and strategic resource partners.
              </p>
              <p>
                Our capital follows the company through every stage of its journey,
                from the first pre-IPO round to long-term ownership and ecosystem
                empowerment in the public markets.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Investment path */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {path.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 70}
              className="group flex flex-col bg-paper p-6 transition-colors hover:bg-cream lg:p-7"
            >
              <span className="font-serif text-2xl text-sage-500">{step.n}</span>
              <span className="mt-4 h-px w-8 bg-sage-400 transition-all group-hover:w-12" />
              <h3 className="mt-4 text-base font-semibold text-ink">{step.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">{step.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
