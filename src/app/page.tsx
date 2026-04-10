import Link from 'next/link';
import { ArrowRight, MapPin, CheckCircle, Sprout, BarChart3, Plane, Leaf } from 'lucide-react';
import { getFeaturedOperators, operators } from '@/data/operators';
import { counties } from '@/data/counties';
import { crops } from '@/data/crops';
import { pricingFAQs, generalFAQs } from '@/data/faqs';
import OperatorCard from '@/components/operators/OperatorCard';
import CountyCard from '@/components/counties/CountyCard';
import SearchBar from '@/components/search/SearchBar';
import FAQAccordion from '@/components/ui/FAQAccordion';
import HomeSchema from '@/components/schema/HomeSchema';

const services = [
  { icon: '💧', name: 'Pulverizare', desc: 'Tratamente fitosanitare precise', href: '/operatori' },
  { icon: '🌿', name: 'Fertilizare', desc: 'Fertilizare foliară uniformă', href: '/operatori' },
  { icon: '🗺️', name: 'Cartografiere', desc: 'Hărți NDVI și topografice', href: '/operatori' },
  { icon: '👁️', name: 'Monitorizare', desc: 'Supraveghere culturi în timp real', href: '/operatori' },
  { icon: '🌱', name: 'Semănat', desc: 'Semănat de precizie cu drona', href: '/operatori' },
  { icon: '🚁', name: 'Închiriere', desc: 'Închiriezi dronă agricolă', href: '/operatori' },
];

export default function HomePage() {
  const featured = getFeaturedOperators();
  const totalHa = operators.reduce((sum, op) => sum + (op.haTreated || 0), 0);
  const topCounties = counties.slice(0, 12);
  const allFaqs = [...pricingFAQs.slice(0, 2), ...generalFAQs];

  return (
    <>
      <HomeSchema />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-green-100 text-sm px-4 py-1.5 rounded-full mb-6 border border-white/20">
            <CheckCircle className="w-4 h-4 text-yellow-400" />
            Listare gratuită pentru operatori
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
            Directorul Operatorilor de
            <span className="text-yellow-400"> Drone Agricole</span>
            <br />din România și Moldova
          </h1>

          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Găsește rapid operatori verificați de drone agricole în județul tău.
            Servicii de pulverizare, cartografiere și monitorizare pentru fermieri.
          </p>

          <SearchBar />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-green-200">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-400" />
              {operators.length}+ operatori listați
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-green-400" />
              41 județe acoperite
            </span>
            <span className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-green-400" />
              {(totalHa / 1000).toFixed(0)}K+ ha tratate
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: `${operators.length}+`, label: 'Operatori listați', icon: Plane },
              { value: '41', label: 'Județe acoperite', icon: MapPin },
              { value: `${(totalHa / 1000).toFixed(0)}K+`, label: 'Hectare tratate', icon: Sprout },
              { value: '70–200', label: 'RON/ha medie', icon: BarChart3 },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <stat.icon className="w-6 h-6 text-green-600 mb-1" />
                <div className="text-3xl font-bold text-green-800">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Servicii disponibile</h2>
          <p className="text-gray-500 text-center mb-8">Alege tipul de serviciu de care ai nevoie</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-sm transition-all text-center group"
              >
                <span className="text-3xl">{s.icon}</span>
                <span className="font-semibold text-sm text-gray-900 group-hover:text-green-700">{s.name}</span>
                <span className="text-xs text-gray-500 hidden sm:block">{s.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured operators */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Operatori recomandați</h2>
              <p className="text-gray-500 mt-1">Verificați și cu experiență dovedită</p>
            </div>
            <Link
              href="/operatori"
              className="flex items-center gap-1 text-green-700 font-medium text-sm hover:text-green-800 transition-colors"
            >
              Toți operatorii <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((op) => (
              <OperatorCard key={op.slug} operator={op} />
            ))}
          </div>
        </div>
      </section>

      {/* Crops */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Culturi tratate cu drona</h2>
              <p className="text-gray-500 mt-1">Ghiduri complete pe tip de cultură</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {crops.map((crop) => (
              <Link
                key={crop.slug}
                href={`/culturi/${crop.slug}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-sm transition-all group"
              >
                <span className="text-2xl">{crop.icon}</span>
                <div>
                  <div className="font-medium text-gray-900 group-hover:text-green-700 text-sm">{crop.name}</div>
                  <div className="text-xs text-gray-500">{crop.priceMinRon}–{crop.priceMaxRon} RON/ha</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Counties */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Caută după județ</h2>
              <p className="text-gray-500 mt-1">Operatori în toate cele 41 de județe</p>
            </div>
            <Link
              href="/judete"
              className="flex items-center gap-1 text-green-700 font-medium text-sm hover:text-green-800 transition-colors"
            >
              Toate județele <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {topCounties.map((county) => (
              <CountyCard key={county.slug} county={county} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Cum funcționează</h2>
          <p className="text-gray-500 text-center mb-10">Simplu și rapid</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Alege județul', desc: 'Selectează județul din România sau Moldova în care se află ferma ta.', icon: MapPin },
              { step: '2', title: 'Compară operatorii', desc: 'Vizualizează profiluri, prețuri, servicii și zone de acoperire ale operatorilor din zona ta.', icon: Plane },
              { step: '3', title: 'Contactează direct', desc: 'Ia legătura direct cu operatorul ales prin telefon, email sau formularul de contact.', icon: CheckCircle },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Întrebări frecvente</h2>
          <p className="text-gray-500 text-center mb-8">Tot ce trebuie să știi despre dronele agricole</p>
          <FAQAccordion faqs={allFaqs} />
          <div className="text-center mt-6">
            <Link href="/preturi-pulverizare-drona" className="text-green-700 font-medium text-sm hover:underline">
              Vezi ghidul complet de prețuri →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-green-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ești operator de drone agricole?</h2>
          <p className="text-green-100 mb-8 leading-relaxed">
            Adaugă afacerea ta în cel mai complet director de drone agricole din România și Moldova.
            Listarea este <strong className="text-white">100% gratuită</strong> și procesată în 48 de ore.
          </p>
          <Link
            href="/adauga-operator"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-800 font-bold rounded-xl hover:bg-green-50 transition-colors"
          >
            Adaugă-te gratuit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
