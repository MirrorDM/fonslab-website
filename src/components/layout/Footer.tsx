import Link from "next/link";
import Logo from "@/components/Logo";

const links = [
  { href: "#mandate", label: "Mandate" },
  { href: "#focus", label: "Focus" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-paper">
      <div className="wrap py-14">
        <div className="flex flex-col gap-10 border-b border-line pb-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-ink/55">
              A long-horizon investment partner for China&rsquo;s hard-technology
              leaders, from pre-IPO to the public markets.
            </p>
            <p className="mt-5 text-xs uppercase tracking-label text-sage-600">
              Beijing · Hong Kong · Shanghai · Shenzhen
            </p>
          </div>
          <nav className="flex flex-col gap-3 md:items-end">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink/65 transition-colors hover:text-sage-700"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Legal disclaimer — public-facing, adapted from the offering materials */}
        <p className="mt-8 text-xs leading-relaxed text-ink/45">
          This website is provided for informational purposes only and does not
          constitute an offer to sell, or a solicitation of an offer to buy, any
          security, fund interest, or investment product, nor any form of investment
          advice. Any such offer will be made solely to qualified investors through
          formal offering documents. Past performance is not indicative of future
          results; investing involves risk, including the possible loss of principal.
        </p>

        <p className="mt-8 text-xs text-ink/45">
          © {year} Fonslab Capital. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
