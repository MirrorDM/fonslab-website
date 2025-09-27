'use client';

import { Layers } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-lg z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Layers className="h-8 w-8 text-brand-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Fonslab</span>
          </div>
          
          {/* desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#home" className="text-gray-900 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="#services" className="text-gray-900 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link href="#about" className="text-gray-900 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="#contact" className="text-gray-900 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* mobile dropdown */}
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <Link href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-brand-600">
                Home
              </Link>
              <Link href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-brand-600">
                Services
              </Link>
              <Link href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-brand-600">
                About
              </Link>
              <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-brand-600">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}