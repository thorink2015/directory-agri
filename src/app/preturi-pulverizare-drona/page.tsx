import { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, Info } from 'lucide-react';
import { pricingFAQs } from '@/data/faqs';
import { getFeaturedOperators } from '@/data/operators';
import Breadcrumb from '@/components/layout/Breadcrumb';
import FAQAccordion from '@/components/ui/FAQAccordion';
import OperatorCard from '@/components/operators/OperatorCard';

export const metadata: Metadata = {
  title: 'Cât Costă Pulverizarea cu Drona Agricolă? | Prețuri 2026',
  description:
    'Prețurile pulverizării cu drona în România: 70–120 RON/ha pentru culturi de câmp și 120–200 RON/ha pentru vii și livezi. Ghid complet cu tabele și factori de influență.',
  alternates: { canonical: '/preturi-pulverizare-drona' },
  openGraph: {
    title: 'Prețuri Pulverizare Dronă 2026 | 70–200 RON/ha | DroneAgricol.ro',
    description: 'Cât costă pulverizarea cu drona? Tabele complete cu prețuri RON/ha pe culturi, regiuni și factori de influență.',
    url: 'https://droneagricol.ro/preturi-pulverizare-drona',
  },
};

const pricingData = [
  { cultura: 'Grâu', min: 70, med: 90, max: 120, note: 'Sezon: martie–mai' },
  { cultura: 'Porumb', min: 70, med: 95, max: 130, note: 'Sezon: iunie–august' },
  { cultura: 'Rapiță', min: 70, med: 90, max: 120, note: 'Sezon: mart.–apr., sept.–oct.' },
  { cultura: 'Floarea soarelui', min: 70, med: 90, max: 120, note: 'Sezon: iun.–septembrie' },
  { cultura: 'Soia', min: 75, med: 95, max: 125, note: 'Sezon: iunie–august' },
  { cultura: 'Viță de vie', min: 120, med: 150, max: 200, note: 'Sezon: apr.–septembrie' },
  { cultura: 'Livezi (pomi fructiferi)', min: 120, med: 160, max: 200, note: 'Sezon: mar.–august' },
  { cultura: 'Moldova (general, MDL)', min: 170, med: 200, max: 240, note: 'Tarif în MDL/ha' },
];

const factors = [
  { factor: 'Suprafața totală', impact: 'Suprafețele > 200 ha primesc reduceri de 10–20%', icon: '📐' },
  { factor: 'Tipul de cultură', impact: 'Vii și livezi costă 50–70% mai mult decât câmpul', icon: '🌿' },
  { factor: 'Distanța față de baza operatorului', impact: 'Distanțele > 50 km pot adăuga 10–15% cost', icon: '🗺️' },
  { factor: 'Tipul de substanță', impact: 'Substanțele vâscoase sau corozive pot crește prețul', icon: '🧪' },
  { factor: 'Condiții de teren', impact: 'Terenurile cu obstacole sau pantă majoră cresc costul', icon: '⛰️' },
  { factor: 'Sezonul de aplicare', impact: 'Perioadele de vârf (mai, iulie) pot fi mai scumpe', icon: '📅' },
];

export default function PricingPage() {
  const featured = getFeaturedOperators().slice(0, 3);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pricingFAQs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: 'Prețuri pulverizare cu drona' }]} />

        {/* Hero answer capsule */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Cât costă pulverizarea cu drona agricolă în România?
          </h1>
          <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r-xl">
            <p className="text-gray-800 text-lg leading-relaxed">
              <strong>Prețul mediu pentru pulverizarea cu drona este de 100 RON/ha (~€20/ha)</strong> pentru culturi de câmp (grâu, porumb, rapiță, floarea soarelui). Pentru vii și livezi prețul ajunge la 120–200 RON/ha. În Moldova prețurile sunt 170–240 MDL/ha (~€8.50–12/ha).
            </p>
          </div>
        </div>

        {/* Pricing table */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
          <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-100 bg-gray-50">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <h2 className="font-semibold text-gray-900">Prețuri pulverizare cu drona 2026 — pe tip de cultură</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Cultură</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700">Preț minim</th>
                  <th className="text-center px-4 py-3 font-semibold text-green-800 bg-green-100">Preț mediu</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700">Preț maxim</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Sezon</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pricingData.map((row) => (
                  <tr key={row.cultura} className="hover:bg-gray-50">
                    <td className="px-5 py-3 font-medium text-gray-900">{row.cultura}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{row.min} {row.cultura.includes('MDL') ? 'MDL' : 'RON'}/ha</td>
                    <td className="px-4 py-3 text-center font-bold text-green-700 bg-green-50">{row.med} {row.cultura.includes('MDL') ? 'MDL' : 'RON'}/ha</td>
                    <td className="px-4 py-3 text-center text-gray-600">{row.max} {row.cultura.includes('MDL') ? 'MDL' : 'RON'}/ha</td>
                    <td className="px-4 py-3 text-gray-500 hidden sm:table-cell text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="px-5 py-3 text-xs text-gray-500 border-t border-gray-100 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5" />
            Prețuri orientative bazate pe date de piață din 2026. Contactați operatorul pentru ofertă exactă.
          </p>
        </div>

        {/* Factors */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Factori care influențează prețul</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {factors.map((f) => (
              <div key={f.factor} className="flex gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                <span className="text-2xl flex-shrink-0">{f.icon}</span>
                <div>
                  <div className="font-medium text-gray-900 text-sm">{f.factor}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{f.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison: drone vs airplane */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
          <div className="px-5 py-4 border-b border-gray-100 bg-gray-50">
            <h2 className="font-semibold text-gray-900">Dronă vs. avion agricol — comparație costuri</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Criteriu</th>
                  <th className="text-center px-4 py-3 font-semibold text-green-800">Dronă agricolă</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700">Avion agricol</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Preț mediu/ha', '100 RON (~€20)', '80 RON (~€16)'],
                  ['Precizie GPS', '> 95%', '85–90%'],
                  ['Suprafața minimă', 'Orice suprafață', '> 50 ha recomandat'],
                  ['Tasare sol', 'Zero', 'Zero'],
                  ['Acces terenuri fragmentate', '✅ Excelent', '❌ Limitat'],
                  ['Vii și livezi', '✅ Da', '❌ Nu'],
                  ['Disponibilitate', 'Rapid (1–2 zile)', 'Planificare 1–2 săptămâni'],
                ].map(([criteriu, drona, avion]) => (
                  <tr key={criteriu} className="hover:bg-gray-50">
                    <td className="px-5 py-3 text-gray-700 font-medium">{criteriu}</td>
                    <td className="px-4 py-3 text-center text-green-700">{drona}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{avion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Întrebări frecvente despre prețuri</h2>
          <FAQAccordion faqs={pricingFAQs} />
        </div>

        {/* Featured operators */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Solicită ofertă de la operatori</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featured.map((op) => (
              <OperatorCard key={op.slug} operator={op} />
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/operatori" className="text-green-700 font-medium text-sm hover:underline">
              Vezi toți operatorii →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
