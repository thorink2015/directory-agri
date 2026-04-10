'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Operator, SERVICE_LABELS, ServiceType } from '@/data/types';
import { County } from '@/data/types';
import OperatorCard from '@/components/operators/OperatorCard';
import Breadcrumb from '@/components/layout/Breadcrumb';

interface Props {
  operators: Operator[];
  counties: County[];
}

export default function OperatoriClient({ operators, counties }: Props) {
  const [search, setSearch] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceType | ''>('');
  const [country, setCountry] = useState<'RO' | 'MD' | ''>('');

  const filtered = useMemo(() => {
    return operators.filter((op) => {
      if (country && op.country !== country) return false;
      if (selectedCounty && !op.counties.includes(selectedCounty)) return false;
      if (selectedService && !op.services.includes(selectedService)) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          op.name.toLowerCase().includes(q) ||
          op.city.toLowerCase().includes(q) ||
          op.description.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [operators, country, selectedCounty, selectedService, search]);

  const hasFilters = search || selectedCounty || selectedService || country;

  function clearFilters() {
    setSearch('');
    setSelectedCounty('');
    setSelectedService('');
    setCountry('');
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Operatori' }]} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Operatori de Drone Agricole
        </h1>
        <p className="text-gray-600">
          {filtered.length} operatori{selectedCounty ? ` în ${counties.find(c => c.slug === selectedCounty)?.name || selectedCounty}` : ' din România și Moldova'}
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
        <div className="flex flex-wrap gap-3">
          {/* Search */}
          <div className="relative flex-1 min-w-48">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Caută operator..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Country */}
          <select
            value={country}
            onChange={(e) => { setCountry(e.target.value as 'RO' | 'MD' | ''); setSelectedCounty(''); }}
            className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          >
            <option value="">Toate țările</option>
            <option value="RO">România</option>
            <option value="MD">Moldova</option>
          </select>

          {/* County */}
          {country !== 'MD' && (
            <select
              value={selectedCounty}
              onChange={(e) => setSelectedCounty(e.target.value)}
              className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
            >
              <option value="">Toate județele</option>
              {counties.map((c) => (
                <option key={c.slug} value={c.slug}>{c.name}</option>
              ))}
            </select>
          )}

          {/* Service */}
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value as ServiceType | '')}
            className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          >
            <option value="">Toate serviciile</option>
            {Object.entries(SERVICE_LABELS).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 px-3 py-2.5 text-sm text-gray-500 hover:text-red-600 border border-gray-200 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" /> Resetează
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((op) => (
            <OperatorCard key={op.slug} operator={op} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Filter className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg mb-2">Niciun operator găsit</p>
          <p className="text-gray-400 text-sm mb-4">Încearcă să modifici filtrele</p>
          <button
            onClick={clearFilters}
            className="text-green-700 font-medium text-sm hover:underline"
          >
            Resetează filtrele
          </button>
        </div>
      )}
    </div>
  );
}
