'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Plane, ChevronDown, Mail } from 'lucide-react';
import { counties } from '@/data/counties';
import { moldovaRegions } from '@/data/regions-moldova';
import NewsletterForm from '@/components/ui/NewsletterForm';
import WhatsAppChannel from '@/components/ui/WhatsAppChannel';

export default function Footer() {
  const [showAllCounties, setShowAllCounties] = useState(false);
  const [showAllRaioane, setShowAllRaioane] = useState(false);

  const topCounties = counties.slice(0, 10);
  const topRaioane = moldovaRegions.slice(0, 8);

  return (
    <footer className="bg-green-900 text-green-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upper grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand + newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Plane className="w-5 h-5 text-white rotate-45" />
              </div>
              <span className="font-bold text-lg text-white">
                DroneAgricol<span className="text-yellow-400">.ro</span>
              </span>
            </Link>
            <p className="text-sm text-green-300 leading-relaxed mb-5 max-w-sm">
              Cel mai complet director de operatori de drone agricole din România și Moldova. Peste 20 de
              operatori verificați, 41 de județe românești și 35 de raioane moldovenești acoperite.
            </p>

            {/* Newsletter */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-1.5">
                <Mail className="w-4 h-4" />
                Newsletter lunar
              </h3>
              <NewsletterForm />
            </div>

            {/* WhatsApp */}
            <WhatsAppChannel className="mt-3" />
          </div>

          {/* Servicii */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">Servicii</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/servicii/spraying" className="hover:text-white transition-colors">Pulverizare</Link></li>
              <li><Link href="/servicii/spreading" className="hover:text-white transition-colors">Fertilizare</Link></li>
              <li><Link href="/servicii/monitoring" className="hover:text-white transition-colors">Monitorizare NDVI</Link></li>
              <li><Link href="/servicii/mapping" className="hover:text-white transition-colors">Cartografiere</Link></li>
              <li><Link href="/servicii/training" className="hover:text-white transition-colors">Cursuri piloți</Link></li>
              <li><Link href="/servicii/rental" className="hover:text-white transition-colors">Închiriere drone</Link></li>
              <li><Link href="/preturi-pulverizare-drona" className="hover:text-white transition-colors">Prețuri pulverizare</Link></li>
            </ul>
          </div>

          {/* Resurse */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">Resurse</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ghid" className="hover:text-white transition-colors">Toate ghidurile</Link></li>
              <li><Link href="/ghid/cum-sa-devii-operator" className="hover:text-white transition-colors">Cum să devii operator</Link></li>
              <li><Link href="/ghid/legislatie-drone-agricole" className="hover:text-white transition-colors">Legislație AACR</Link></li>
              <li><Link href="/ghid/fonduri-afir-drone" className="hover:text-white transition-colors">Fonduri AFIR</Link></li>
              <li><Link href="/ghid/licenta-pilot-drona" className="hover:text-white transition-colors">Licență pilot</Link></li>
              <li><Link href="/unelte" className="hover:text-white transition-colors">Calculatoare gratuite</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog & noutăți</Link></li>
            </ul>
          </div>

          {/* Directory */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">Directory</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/operatori" className="hover:text-white transition-colors">Toți operatorii</Link></li>
              <li><Link href="/judete" className="hover:text-white transition-colors">Toate județele</Link></li>
              <li><Link href="/moldova" className="hover:text-white transition-colors">Moldova</Link></li>
              <li><Link href="/culturi" className="hover:text-white transition-colors">Toate culturile</Link></li>
              <li><Link href="/drone" className="hover:text-white transition-colors">Modele drone</Link></li>
              <li><Link href="/adauga-operator" className="hover:text-white transition-colors">Adaugă operator</Link></li>
              <li><Link href="/despre" className="hover:text-white transition-colors">Despre noi</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* ── Expandable: All 41 counties ─────────────────── */}
        <div className="border-t border-green-800 pt-6 mb-6">
          <button
            onClick={() => setShowAllCounties(!showAllCounties)}
            className="w-full flex items-center justify-between text-white font-semibold text-sm uppercase tracking-wide mb-3 hover:text-yellow-300 transition-colors"
            aria-expanded={showAllCounties}
          >
            <span>Toate județele din România ({counties.length})</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showAllCounties ? 'rotate-180' : ''}`} />
          </button>

          {showAllCounties ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-1 text-xs text-green-300">
              {counties.map((c) => (
                <Link
                  key={c.slug}
                  href={`/judete/${c.slug}`}
                  className="hover:text-white transition-colors py-0.5"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-1 text-xs text-green-300">
              {topCounties.map((c) => (
                <Link
                  key={c.slug}
                  href={`/judete/${c.slug}`}
                  className="hover:text-white transition-colors py-0.5"
                >
                  {c.name}
                </Link>
              ))}
              <button
                onClick={() => setShowAllCounties(true)}
                className="text-yellow-400 hover:text-yellow-300 font-semibold text-left"
              >
                + Vezi toate {counties.length} →
              </button>
            </div>
          )}
        </div>

        {/* ── Expandable: All Moldova raioane ────────────── */}
        <div className="border-t border-green-800 pt-6 mb-6">
          <button
            onClick={() => setShowAllRaioane(!showAllRaioane)}
            className="w-full flex items-center justify-between text-white font-semibold text-sm uppercase tracking-wide mb-3 hover:text-yellow-300 transition-colors"
            aria-expanded={showAllRaioane}
          >
            <span>Toate raioanele din Moldova ({moldovaRegions.length})</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showAllRaioane ? 'rotate-180' : ''}`} />
          </button>

          {showAllRaioane ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-1 text-xs text-green-300">
              {moldovaRegions.map((r) => (
                <Link
                  key={r.slug}
                  href={`/moldova/${r.slug}`}
                  className="hover:text-white transition-colors py-0.5"
                >
                  {r.name}
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-1 text-xs text-green-300">
              {topRaioane.map((r) => (
                <Link
                  key={r.slug}
                  href={`/moldova/${r.slug}`}
                  className="hover:text-white transition-colors py-0.5"
                >
                  {r.name}
                </Link>
              ))}
              <button
                onClick={() => setShowAllRaioane(true)}
                className="text-yellow-400 hover:text-yellow-300 font-semibold text-left"
              >
                + Vezi toate {moldovaRegions.length} →
              </button>
            </div>
          )}
        </div>

        <div className="border-t border-green-800 mt-4 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-green-400">
          <p>© 2026 DroneAgricol.ro — Toate drepturile rezervate</p>
          <p>Listare gratuită pentru operatori din România și Moldova</p>
        </div>
      </div>
    </footer>
  );
}
