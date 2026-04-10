import { notFound } from 'next/navigation';
import Link from 'next/link';
import { moldovaRegions, getMoldovaRegionBySlug } from '@/data/regions-moldova';
import { getMdOperators } from '@/data/operators';
import Breadcrumb from '@/components/layout/Breadcrumb';
import OperatorCard from '@/components/operators/OperatorCard';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return moldovaRegions.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props) {
  const region = getMoldovaRegionBySlug(params.slug);
  if (!region) return {};
  return {
    title: `Drone Agricole ${region.name}, Moldova | Operatori și Prețuri 2026`,
    description: `Operatori de drone agricole în ${region.name}, Moldova. Servicii de pulverizare${region.vineyardHa ? ', tratamente viticole' : ''} și monitorizare. Prețuri 170–240 MDL/ha.`,
  };
}

export default function MoldovaRegionPage({ params }: Props) {
  const region = getMoldovaRegionBySlug(params.slug);
  if (!region) notFound();

  const ops = getMdOperators();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: 'Moldova', href: '/moldova' },
          { label: region.name },
        ]}
      />

      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        Drone agricole în {region.name}, Moldova
      </h1>

      {region.vineyardHa && (
        <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 text-sm px-3 py-1.5 rounded-full mb-6">
          🍇 Zonă viticolă: {(region.vineyardHa / 1000).toFixed(0)}K ha
        </div>
      )}

      <p className="text-gray-600 mb-8">
        Toți operatorii de drone agricole din Moldova acoperă întreaga țară, inclusiv {region.name}.
        Contactează direct operatorii de mai jos pentru disponibilitate și prețuri.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        {ops.map((op) => (
          <OperatorCard key={op.slug} operator={op} />
        ))}
      </div>

      <div className="text-center mt-4">
        <Link href="/moldova" className="text-blue-700 font-medium text-sm hover:underline">
          ← Înapoi la toate regiunile din Moldova
        </Link>
      </div>
    </div>
  );
}
