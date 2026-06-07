import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Mark } from "@/components/Logo";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[72px]">
      {/* Faint oversized mark watermark */}
      <Mark className="pointer-events-none absolute -left-24 top-10 h-[520px] w-auto text-sage-500/[0.05] select-none" />

      <div className="wrap relative grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
        {/* Left — copy */}
        <div className="relative">
          <Reveal>
            <span className="eyebrow">Long-Horizon Technology Capital</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display mt-7 text-[2.6rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              Backing China&rsquo;s hard-technology leaders,{" "}
              <span className="text-sage-600 italic">from pre-IPO to the public markets.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/65">
              Fonslab Capital invests across the full company lifecycle — partnering
              with founders, industrial capital, and family offices to compound value
              through every stage of the public-market journey.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#mandate"
                className="group inline-flex items-center gap-2 rounded-full bg-sage-700 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-sage-800"
              >
                Our mandate
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-ink/70 transition-colors hover:text-sage-700"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Right — architectural image */}
        <Reveal delay={160} className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-[0_30px_60px_-30px_rgba(27,28,26,0.4)]">
            <Image
              src="/images/hero-towers.jpg"
              alt="Low-angle view of glass office towers"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sage-950/30 via-transparent to-transparent" />
          </div>
          {/* Offset sage frame — editorial layering from the deck */}
          <div className="absolute -bottom-5 -right-5 -z-10 hidden h-32 w-32 border border-sage-300 sm:block" />
        </Reveal>
      </div>
    </section>
  );
}
