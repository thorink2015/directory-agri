import Link from 'next/link';
import { Plane } from 'lucide-react';
import { counties } from '@/data/counties';

const topCounties = [
  'timis', 'constanta', 'braila', 'calarasi', 'ialomita',
  'dolj', 'teleorman', 'prahova', 'iasi', 'arad',
];

export default function Footer() {
  const featuredCounties = counties.filter((c) => topCounties.includes(c.slug));

  return (
    <footer className="bg-green-900 text-green-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Plane className="w-5 h-5 text-white rotate-45" />
              </div>
              <span className="font-bold text-lg text-white">
                DroneAgricol<span className="text-yellow-400">.ro</span>
              </span>
            </Link>
            <p className="text-sm text-green-300 leading-relaxed">
              Cel mai complet director de operatori de drone agricole din România și Moldova.
            </p>
          </div>

          {/* Servicii */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">Servicii</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/culturi/vita-de-vie" className="hover:text-white transition-colors">Tratamente viță de vie</Link></li>
              <li><Link href="/culturi/grau" className="hover:text-white transition-colors">Tratamente grâu</Link></li>
              <li><Link href="/culturi/porumb" className="hover:text-white transition-colors">Tratamente porumb</Link></li>
              <li><Link href="/culturi/rapita" className="hover:text-white transition-colors">Tratamente rapiță</Link></li>
              <li><Link href="/culturi/livada" className="hover:text-white transition-colors">Tratamente livezi</Link></li>
              <li><Link href="/preturi-pulverizare-drona" className="hover:text-white transition-colors">Prețuri pulverizare</Link></li>
            </ul>
          </div>

          {/* Județe */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">Județe principale</h3>
            <ul className="space-y-2 text-sm">
              {featuredCounties.map((county) => (
                <li key={county.slug}>
                  <Link href={`/judete/${county.slug}`} className="hover:text-white transition-colors">
                    Drone agricole {county.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informații */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">Informații</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/operatori" className="hover:text-white transition-colors">Toți operatorii</Link></li>
              <li><Link href="/judete" className="hover:text-white transition-colors">Toate județele</Link></li>
              <li><Link href="/moldova" className="hover:text-white transition-colors">Moldova</Link></li>
              <li><Link href="/adauga-operator" className="hover:text-white transition-colors">Adaugă operator</Link></li>
              <li><Link href="/despre" className="hover:text-white transition-colors">Despre noi</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-green-400">
          <p>© 2026 DroneAgricol.ro — Toate drepturile rezervate</p>
          <p>Listare gratuită pentru operatori de drone agricole din România și Moldova</p>
        </div>
      </div>
    </footer>
  );
}
