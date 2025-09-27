import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const spartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-spartan',
});

export const metadata: Metadata = {
  title: 'Fonslab — Practical AI for Industry & Everyday Life',
  description:
    'Fonslab provides enterprise AI model services and an AI companion toy focused on helpful, human-centered interactions.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={spartan.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-purple-50 to-blue-50 flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}