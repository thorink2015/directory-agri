'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, Plane, ChevronDown } from 'lucide-react';

interface NavItem {
  href?: string;
  label: string;
  dropdown?: { href: string; label: string; description?: string }[];
}

const nav: NavItem[] = [
  { href: '/operatori', label: 'Operatori' },
  { href: '/judete', label: 'Județe' },
  {
    label: 'Culturi & Servicii',
    dropdown: [
      { href: '/culturi', label: 'Culturi tratate', description: 'Grâu, porumb, viță de vie, livezi' },
      { href: '/servicii', label: 'Servicii drone', description: 'Pulverizare, fertilizare, monitorizare' },
      { href: '/drone', label: 'Modele drone', description: 'DJI Agras, XAG, ADT' },
      { href: '/regiuni-viticole', label: 'Regiuni viticole', description: 'Dealu Mare, Murfatlar, Cotnari' },
    ],
  },
  {
    label: 'Ghiduri & Unelte',
    dropdown: [
      { href: '/ghid', label: 'Ghiduri', description: 'Legislație, AFIR, licență pilot' },
      { href: '/blog', label: 'Blog', description: 'Topuri, studii de caz, știri' },
      { href: '/unelte', label: 'Calculatoare', description: 'Preț, hectare, comparator' },
      { href: '/preturi-pulverizare-drona', label: 'Prețuri', description: 'Tarife RON/ha actualizate' },
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
              <Plane className="w-5 h-5 text-white rotate-45" />
            </div>
            <span className="font-bold text-xl text-green-900 group-hover:text-green-700 transition-colors">
              DroneAgricol<span className="text-yellow-500">.ro</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-1">
            {nav.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-green-700 transition-colors"
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="absolute left-0 top-full mt-1 w-72 bg-white border border-gray-200 rounded-xl shadow-lg p-2 z-10">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block p-3 rounded-lg hover:bg-green-50 transition-colors"
                        >
                          <div className="font-semibold text-sm text-gray-900">{sub.label}</div>
                          {sub.description && (
                            <div className="text-xs text-gray-500 mt-0.5">{sub.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-green-700 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}

            {/* Moldova — distinct blue treatment (per user request) */}
            <Link
              href="/moldova"
              className="ml-1 px-3 py-2 text-sm font-medium text-blue-700 hover:text-blue-900 border-l border-gray-200 flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Moldova
            </Link>

            <Link
              href="/adauga-operator"
              className="ml-2 px-4 py-2 bg-green-700 text-white text-sm font-semibold rounded-lg hover:bg-green-800 transition-colors"
            >
              + Adaugă operator
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-green-700"
            onClick={() => setOpen(!open)}
            aria-label="Meniu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4 border-t border-gray-100 mt-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="flex flex-col gap-1 pt-3">
              {nav.map((item) =>
                item.dropdown ? (
                  <details key={item.label} className="group">
                    <summary className="cursor-pointer px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-green-50 rounded-lg flex items-center justify-between">
                      {item.label}
                      <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="ml-3 mt-1 space-y-0.5">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-3 py-1.5 text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-lg"
                          onClick={() => setOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}

              <Link
                href="/moldova"
                className="px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-1.5 mt-2 border-t border-gray-100 pt-3"
                onClick={() => setOpen(false)}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Moldova (director separat)
              </Link>

              <Link
                href="/adauga-operator"
                className="mt-3 mx-3 px-4 py-2 bg-green-700 text-white text-sm font-semibold rounded-lg text-center hover:bg-green-800 transition-colors"
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
