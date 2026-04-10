import { Metadata } from 'next';
import { Operator } from '@/data/types';
import { County } from '@/data/types';

const SITE_URL = 'https://droneagricol.ro';
const SITE_NAME = 'DroneAgricol.ro';

export function buildOperatorMetadata(operator: Operator): Metadata {
  const price = operator.priceMinRon
    ? `Prețuri de la ${operator.priceMinRon} RON/ha. `
    : '';
  return {
    title: `${operator.name} | Servicii Drone Agricole ${operator.city} | Prețuri și Contact`,
    description: `${operator.name} — operator de drone agricole din ${operator.city}. ${price}${operator.services.length} servicii disponibile. Acoperire în ${operator.counties.length} județe. Contact direct.`,
    openGraph: {
      title: `${operator.name} | DroneAgricol.ro`,
      description: operator.description.slice(0, 155),
      url: `${SITE_URL}/operatori/${operator.slug}`,
      siteName: SITE_NAME,
      type: 'website',
    },
  };
}

export function buildCountyMetadata(county: County, operatorCount: number): Metadata {
  const crops = county.mainCrops.slice(0, 3).join(', ');
  return {
    title: `Drone Agricole ${county.name} | Operatori și Prețuri 2026`,
    description: `Găsești ${operatorCount} operatori de drone agricole în județul ${county.name}. Prețuri pulverizare, recenzii și contact direct. Servicii pentru ${crops} și alte culturi.`,
    openGraph: {
      title: `Drone Agricole ${county.name} | DroneAgricol.ro`,
      description: `Operatori verificați de drone agricole în ${county.name}. Pulverizare, cartografiere și monitorizare pentru fermieri.`,
      url: `${SITE_URL}/judete/${county.slug}`,
      siteName: SITE_NAME,
      type: 'website',
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Directorul Operatorilor de Drone Agricole din România și Moldova | DroneAgricol.ro',
    template: '%s | DroneAgricol.ro',
  },
  description:
    'Cel mai complet director de operatori de drone agricole din România și Moldova. Găsește operatori verificați pentru pulverizare, cartografiere și monitorizare în toată țara.',
  keywords: [
    'drone agricole', 'operatori drone agricole', 'pulverizare cu drona',
    'tratamente cu drona', 'drone agricole Romania', 'director drone agricole',
  ],
  openGraph: {
    siteName: SITE_NAME,
    type: 'website',
    locale: 'ro_RO',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
};
