'use client';

import { Menu, X, Layers } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-lg z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Layers className="h-8 w-8 text-brand-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Fonslab</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#home" className="text-gray-900 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="#features" className="text-gray-900 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
                Features
              </Link>
              <Link href="#about" className="text-gray-900 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-brand-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-brand-600">
              Home
            </Link>
            <Link href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-brand-600">
              Features
            </Link>
            <Link href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-brand-600">
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}