import { Metadata } from 'next';
import OperatoriClient from './OperatoriClient';
import { operators } from '@/data/operators';
import { counties } from '@/data/counties';

export const metadata: Metadata = {
  title: 'Toți Operatorii de Drone Agricole din România',
  description:
    'Caută și filtrează toți operatorii de drone agricole din România. Filtrare după județ, serviciu și tipul de cultură.',
  alternates: { canonical: '/operatori' },
  openGraph: {
    title: 'Toți Operatorii de Drone Agricole | TerraDron.ro',
    description: 'Lista completă: 20 operatori verificați din România. Filtrare după județ și serviciu.',
    url: 'https://terradron.ro/operatori',
  },
};

export default function OperatoriPage() {
  return <OperatoriClient operators={operators} counties={counties} />;
}
