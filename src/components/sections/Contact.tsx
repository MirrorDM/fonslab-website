import { Mail, ArrowUpRight } from "lucide-react";
import { Mark } from "@/components/Logo";
import Reveal from "@/components/Reveal";

const offices = ["Beijing (HQ)", "Hong Kong", "Shanghai", "Shenzhen"];
const EMAIL = "contact@fonslab.com";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-sage-900 text-white">
      <Mark className="pointer-events-none absolute -right-20 -top-16 h-[460px] w-auto text-white/[0.04] select-none" />

      <div className="wrap relative grid gap-14 py-24 sm:py-28 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <span className="eyebrow !text-sage-300 before:!bg-sage-400">Get in touch</span>
          <h2 className="display mt-6 text-3xl leading-tight text-white sm:text-4xl">
            Speak with our team.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
            Fonslab Capital works with qualified investors and partners aligned with a
            long-term horizon. For enquiries, we would be glad to hear from you.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-sage-900 transition-colors hover:bg-sage-100"
          >
            <Mail className="h-4 w-4" />
            {EMAIL}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        <Reveal delay={120} className="lg:pt-2">
          <p className="text-[11px] font-medium uppercase tracking-label text-sage-300">
            Offices
          </p>
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10">
            {offices.map((o) => (
              <div key={o} className="bg-sage-900 px-6 py-7">
                <p className="font-serif text-xl text-white">{o}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
