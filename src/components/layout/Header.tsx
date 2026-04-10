'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Plane } from 'lucide-react';

const nav = [
  { href: '/operatori', label: 'Operatori' },
  { href: '/judete', label: 'Județe' },
  { href: '/culturi', label: 'Culturi' },
  { href: '/preturi-pulverizare-drona', label: 'Prețuri' },
  { href: '/moldova', label: 'Moldova' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
              <Plane className="w-5 h-5 text-white rotate-45" />
            </div>
            <span className="font-bold text-xl text-green-900 group-hover:text-green-700 transition-colors">
              DroneAgricol<span className="text-yellow-500">.ro</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/adauga-operator"
              className="ml-2 px-4 py-2 bg-green-700 text-white text-sm font-semibold rounded-lg hover:bg-green-800 transition-colors"
            >
              + Adaugă operator
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-green-700"
            onClick={() => setOpen(!open)}
            aria-label="Meniu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-1">
            <nav className="flex flex-col gap-1 pt-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/adauga-operator"
                className="mt-2 mx-3 px-4 py-2 bg-green-700 text-white text-sm font-semibold rounded-lg text-center hover:bg-green-800 transition-colors"
                onClick={() => setOpen(false)}
              >
                + Adaugă operator
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
