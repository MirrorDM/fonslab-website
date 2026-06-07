import Reveal from "@/components/Reveal";

const items = [
  { k: "Headquarters", v: "Beijing" },
  { k: "Offices", v: "Hong Kong · Shanghai · Shenzhen" },
  { k: "Mandate", v: "Pre-IPO to public markets" },
  { k: "Focus", v: "AI · Robotics · Hard-tech" },
];

export default function Credentials() {
  return (
    <section aria-label="Firm at a glance" className="border-y border-line bg-cream">
      <div className="wrap grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
        {items.map((item, i) => (
          <Reveal
            key={item.k}
            delay={i * 80}
            className={`px-2 py-8 lg:px-8 ${
              i % 2 === 0 ? "border-r border-line lg:border-r-0" : ""
            } ${i < 2 ? "border-b border-line lg:border-b-0" : ""}`}
          >
            <p className="text-[11px] font-medium uppercase tracking-label text-sage-600">
              {item.k}
            </p>
            <p className="mt-2 font-serif text-lg text-ink lg:text-xl">{item.v}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
