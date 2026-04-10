import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, Globe, Link2, Video, MapPin, CheckCircle, Calendar, Plane, Users } from 'lucide-react';
import { operators, getOperatorBySlug } from '@/data/operators';
import { counties } from '@/data/counties';
import { CROP_NAME_MAP } from '@/data/crops';
import { DRONE_NAME_MAP } from '@/data/drone-models';
import { SERVICE_LABELS } from '@/data/types';
import { formatPrice } from '@/lib/utils';
import { buildOperatorMetadata } from '@/lib/seo';
import Breadcrumb from '@/components/layout/Breadcrumb';
import OperatorSchema from '@/components/schema/OperatorSchema';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return operators.map((op) => ({ slug: op.slug }));
}

export async function generateMetadata({ params }: Props) {
  const op = getOperatorBySlug(params.slug);
  if (!op) return {};
  return buildOperatorMetadata(op);
}

export default function OperatorPage({ params }: Props) {
  const operator = getOperatorBySlug(params.slug);
  if (!operator) notFound();

  const coveredCounties = counties.filter((c) => operator.counties.includes(c.slug));

  return (
    <>
      <OperatorSchema operator={operator} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Operatori', href: '/operatori' },
            { label: operator.name },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Plane className="w-8 h-8 text-green-700 rotate-45" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-2xl font-bold text-gray-900">{operator.name}</h1>
                    {operator.verified && (
                      <span className="flex items-center gap-1 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">
                        <CheckCircle className="w-3 h-3" /> Verificat
                      </span>
                    )}
                    {operator.featured && (
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-medium">
                        Recomandat
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{operator.city}{operator.country === 'MD' ? ', Moldova' : ', România'}</span>
                  </div>
                  {operator.founded && (
                    <div className="flex items-center gap-1 text-gray-500 text-sm mt-0.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Fondată {operator.founded}</span>
                    </div>
                  )}
                </div>
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed">{operator.description}</p>
            </div>

            {/* Services */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Servicii oferite</h2>
              <div className="flex flex-wrap gap-2">
                {operator.services.map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-green-50 text-green-800 border border-green-200 rounded-lg text-sm font-medium">
                    {SERVICE_LABELS[s]}
                  </span>
                ))}
              </div>
            </div>

            {/* Crops */}
            {operator.crops.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="font-semibold text-gray-900 mb-4">Culturi tratate</h2>
                <div className="flex flex-wrap gap-2">
                  {operator.crops.map((c) => (
                    <Link
                      key={c}
                      href={`/culturi/${c}`}
                      className="px-3 py-1.5 bg-gray-50 text-gray-700 border border-gray-200 rounded-lg text-sm hover:border-green-300 hover:text-green-700 transition-colors"
                    >
                      {CROP_NAME_MAP[c] || c}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Drones */}
            {operator.drones.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="font-semibold text-gray-900 mb-4">Drone utilizate</h2>
                <div className="flex flex-wrap gap-2">
                  {operator.drones.map((d) => (
                    <span key={d} className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-800 border border-blue-200 rounded-lg text-sm font-medium">
                      <Plane className="w-3.5 h-3.5 rotate-45" />
                      {DRONE_NAME_MAP[d] || d}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {(operator.certAACR || operator.certDJI || operator.certXAG || operator.certANSA) && (
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="font-semibold text-gray-900 mb-4">Certificări și autorizații</h2>
                <div className="space-y-2">
                  {operator.certAACR && (
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Autorizație AACR (Autoritatea Aeronautică Civilă Română)
                    </div>
                  )}
                  {operator.certDJI && (
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Dealer / Partener autorizat DJI
                    </div>
                  )}
                  {operator.certXAG && (
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Dealer autorizat XAG
                    </div>
                  )}
                  {operator.certANSA && (
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Certificare ANSA (Agenția Națională pentru Siguranța Alimentelor — Moldova)
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Coverage */}
            {coveredCounties.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="font-semibold text-gray-900 mb-4">Zone de acoperire ({coveredCounties.length} județe)</h2>
                <div className="flex flex-wrap gap-2">
                  {coveredCounties.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/judete/${c.slug}`}
                      className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs border border-gray-200 rounded hover:border-green-300 hover:text-green-700 transition-colors"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Price */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Prețuri orientative</h3>
              <div className="text-2xl font-bold text-green-700 mb-1">
                {formatPrice(operator.priceMinRon, operator.priceMaxRon)}
              </div>
              {operator.priceMinMdl && (
                <div className="text-lg font-semibold text-green-600">
                  {formatPrice(operator.priceMinMdl, operator.priceMaxMdl, 'MDL')}
                </div>
              )}
              {!operator.priceMinRon && !operator.priceMinMdl && (
                <p className="text-sm text-gray-500">Contactați operatorul pentru ofertă</p>
              )}
              <p className="text-xs text-gray-500 mt-2">* Prețurile pot varia în funcție de cultură și suprafață</p>
            </div>

            {/* Stats */}
            {(operator.haTreated || operator.fleetSize || operator.clientsCount) && (
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Statistici</h3>
                <div className="space-y-2">
                  {operator.haTreated && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Ha tratate cumulat</span>
                      <span className="font-semibold text-gray-900">{operator.haTreated.toLocaleString('ro')}</span>
                    </div>
                  )}
                  {operator.fleetSize && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Număr drone</span>
                      <span className="font-semibold text-gray-900">{operator.fleetSize}</span>
                    </div>
                  )}
                  {operator.clientsCount && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Clienți deserviți</span>
                      <span className="font-semibold text-gray-900">{operator.clientsCount}+</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Contact */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
              <div className="space-y-2">
                {operator.phone && (
                  <a
                    href={`tel:${operator.phone}`}
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-green-600" />
                    {operator.phone}
                  </a>
                )}
                {operator.email && (
                  <a
                    href={`mailto:${operator.email}`}
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700 transition-colors"
                  >
                    <span className="w-4 h-4 text-green-600 text-center">@</span>
                    {operator.email}
                  </a>
                )}
                {operator.website && (
                  <a
                    href={operator.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700 transition-colors"
                  >
                    <Globe className="w-4 h-4 text-green-600" />
                    Website oficial
                  </a>
                )}
                {operator.facebook && (
                  <a
                    href={operator.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700 transition-colors"
                  >
                    <Link2 className="w-4 h-4 text-green-600" />
                    Facebook
                  </a>
                )}
                {operator.youtube && (
                  <a
                    href={operator.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700 transition-colors"
                  >
                    <Video className="w-4 h-4 text-green-600" />
                    YouTube
                  </a>
                )}
              </div>
            </div>

            <Link
              href="/adauga-operator"
              className="block w-full text-center px-4 py-2.5 border border-green-700 text-green-700 rounded-xl text-sm font-medium hover:bg-green-50 transition-colors"
            >
              Corectează informațiile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
