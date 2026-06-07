import Image from "next/image";
import { Cpu, Bot, CircuitBoard, Layers } from "lucide-react";
import Reveal from "@/components/Reveal";

const pillars = [
  {
    icon: Cpu,
    t: "AI Infrastructure",
    d: "Compute, model, and data infrastructure underpinning the AI economy.",
  },
  {
    icon: Bot,
    t: "Embodied Intelligence & Robotics",
    d: "Embodied intelligence and the robotics platforms bringing it into the physical world.",
  },
  {
    icon: CircuitBoard,
    t: "Semiconductors & Core Components",
    d: "Semiconductors and the core components at the heart of advanced systems.",
  },
  {
    icon: Layers,
    t: "Advanced Materials & Manufacturing",
    d: "New materials and advanced manufacturing for next-generation industry.",
  },
];

export default function Focus() {
  return (
    <section id="focus" className="scroll-mt-20 bg-cream py-24 sm:py-28">
      <div className="wrap">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="eyebrow">Investment Focus</span>
            <h2 className="display mt-6 text-3xl leading-tight sm:text-4xl">
              Systematic exposure across the hard-technology stack.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-ink/65">
              We build conviction across the AI, robotics, and hard-technology value
              chains — from foundational infrastructure to the components and materials
              that make them possible.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal
                key={p.t}
                delay={i * 80}
                className="group flex gap-5 rounded-sm border border-line bg-paper p-7 transition-all hover:border-sage-300 hover:shadow-[0_20px_40px_-28px_rgba(27,28,26,0.35)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-sage-50 text-sage-600 transition-colors group-hover:bg-sage-600 group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{p.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/55">{p.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Architectural band */}
        <Reveal delay={120} className="mt-14">
          <div className="relative h-56 w-full overflow-hidden rounded-sm sm:h-72">
            <Image
              src="/images/towers-detail.jpg"
              alt="Detail of modern and classical building façades"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-sage-900/45 mix-blend-multiply" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
