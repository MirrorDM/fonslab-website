import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fonslab.com"),
  title: {
    default: "Fonslab Capital — Long-Horizon Technology Capital",
    template: "%s · Fonslab Capital",
  },
  description:
    "Fonslab Capital is a long-horizon investment partner for China's hard-technology leaders — investing across the full lifecycle, from pre-IPO rounds and Hong Kong cornerstone placements to long-term ownership in the public markets.",
  openGraph: {
    title: "Fonslab Capital",
    description:
      "A long-horizon investment partner for China's hard-technology leaders, from pre-IPO to the public markets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${newsreader.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-paper text-ink antialiased flex flex-col"
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
