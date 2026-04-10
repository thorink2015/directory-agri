import Link from 'next/link';
import { MapPin, Phone, Globe, CheckCircle, Plane } from 'lucide-react';
import { Operator, SERVICE_LABELS } from '@/data/types';
import { formatPrice, addUtmParams } from '@/lib/utils';

interface OperatorCardProps {
  operator: Operator;
  showCounty?: boolean;
}

export default function OperatorCard({ operator, showCounty = true }: OperatorCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-green-300 transition-all group">
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <Plane className="w-6 h-6 text-green-700 rotate-45" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <Link
              href={`/operatori/${operator.slug}`}
              className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors line-clamp-1"
            >
              {operator.name}
            </Link>
            {operator.verified && (
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" aria-label="Verificat" />
            )}
            {operator.featured && (
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-medium">
                Recomandat
              </span>
            )}
          </div>
          {showCounty && (
            <div className="flex items-center gap-1 text-sm text-gray-500 mt-0.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{operator.city}{operator.country === 'MD' ? ', Moldova' : ''}</span>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{operator.description}</p>

      {/* Services */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {operator.services.slice(0, 4).map((service) => (
          <span
            key={service}
            className="text-xs bg-green-50 text-green-800 px-2 py-0.5 rounded-full border border-green-200"
          >
            {SERVICE_LABELS[service]}
          </span>
        ))}
        {operator.services.length > 4 && (
          <span className="text-xs text-gray-400">+{operator.services.length - 4}</span>
        )}
      </div>

      {/* Stats row */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-gray-100">
        <div className="text-sm font-semibold text-green-700">
          {formatPrice(operator.priceMinRon, operator.priceMaxRon)}
          {operator.priceMinMdl && !operator.priceMinRon && formatPrice(operator.priceMinMdl, operator.priceMaxMdl, 'MDL')}
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          {operator.haTreated && (
            <span>{(operator.haTreated / 1000).toFixed(0)}K ha tratate</span>
          )}
          {operator.counties.length > 0 && (
            <span>{operator.counties.length} județe</span>
          )}
        </div>
      </div>

      {/* Contact row */}
      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
        <Link
          href={`/operatori/${operator.slug}`}
          className="flex-1 text-center px-3 py-1.5 bg-green-700 text-white text-sm font-medium rounded-lg hover:bg-green-800 transition-colors"
        >
          Vezi profil
        </Link>
        {operator.phone && (
          <a
            href={`tel:${operator.phone}`}
            className="p-1.5 text-gray-500 hover:text-green-700 transition-colors"
            aria-label="Telefon"
          >
            <Phone className="w-4 h-4" />
          </a>
        )}
        {operator.website && (
          <a
            href={addUtmParams(operator.website, operator.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-gray-500 hover:text-green-700 transition-colors"
            aria-label="Website"
          >
            <Globe className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
