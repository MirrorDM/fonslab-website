import Image from "next/image";
import Reveal from "@/components/Reveal";

const edges = [
  {
    t: "A proven team",
    d: "Our partners come from leading USD funds, corporate venture arms, investment banks, and industry — several with publications in top international journals.",
  },
  {
    t: "Complex deal architecture",
    d: "Deep, hands-on experience in cross-border structuring, exit pathways, and transaction optimization.",
  },
  {
    t: "Ecosystem activation",
    d: "Through our capital and resource partners we help companies secure orders, customers, supply-chain access, scenario validation, and follow-on financing.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="scroll-mt-20 py-24 sm:py-28">
      <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Layered framed image — editorial composition from the deck */}
        <Reveal className="relative order-last lg:order-first">
          <div className="absolute -left-5 -top-5 h-40 w-40 bg-sage-500/15" aria-hidden="true" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border-[6px] border-paper shadow-[0_30px_60px_-30px_rgba(27,28,26,0.45)]">
            <Image
              src="/images/boardroom.jpg"
              alt="A refined meeting room"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 border border-sage-300" aria-hidden="true" />
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Our Edge</span>
            <h2 className="display mt-6 text-3xl leading-tight sm:text-4xl">
              Institutional depth, an operator&rsquo;s network.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            {edges.map((e, i) => (
              <Reveal key={e.t} delay={i * 90} className="flex gap-5">
                <span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-sage-500" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-ink">{e.t}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink/60">{e.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
