import { Crop } from './types';

export const crops: Crop[] = [
  {
    slug: 'grau',
    name: 'Grâu',
    nameRo: 'Grâu',
    description:
      'Grâul este cea mai cultivată cereală în România, cu aproape 2 milioane de hectare. Tratamentele cu drona pentru grâu includ aplicarea fungicidelor (fuzarioză, septorioză), insecticidelor (păduchi, gândaci) și foliarelor. Dronele pot acoperi 100–250 ha/zi pe terenuri plane.',
    priceMinRon: 70,
    priceMaxRon: 120,
    treatmentMonths: [3, 4, 5],
    haRomania: 1900000,
    haMoldova: 280000,
    icon: '🌾',
  },
  {
    slug: 'porumb',
    name: 'Porumb',
    nameRo: 'Porumb',
    description:
      'Porumbul ocupă peste 2,5 milioane ha în România. Drona este ideală pentru tratamentele de vară, când utilajele terestre nu mai pot intra pe câmp fără să deterioreze culturile. Tratamente pentru sfredelitorul porumbului, păduchi, boli foliare.',
    priceMinRon: 70,
    priceMaxRon: 130,
    treatmentMonths: [6, 7, 8],
    haRomania: 2500000,
    haMoldova: 420000,
    icon: '🌽',
  },
  {
    slug: 'rapita',
    name: 'Rapiță',
    nameRo: 'Rapiță',
    description:
      'România a atins un record de 700.000 ha cultivate cu rapiță în 2025. Tratamentele cu drona sunt esențiale toamna (insecticide la semănat) și primăvara (fungicide, insecticide la florit). Dronele evită tasarea solului umed de primăvară.',
    priceMinRon: 70,
    priceMaxRon: 120,
    treatmentMonths: [3, 4, 9, 10],
    haRomania: 700000,
    haMoldova: 95000,
    icon: '🌻',
  },
  {
    slug: 'floarea-soarelui',
    name: 'Floarea Soarelui',
    nameRo: 'Floarea Soarelui',
    description:
      'Floarea soarelui este principala cultură oleaginoasă din România. Tratamentele cu drona includ fungicide (mana, sclerotinia) și insecticide (buha semănaturilor). Desicanții aplicați cu drona uniformizează maturarea și reduc pierderile la recoltă.',
    priceMinRon: 70,
    priceMaxRon: 120,
    treatmentMonths: [6, 7, 8, 9],
    haRomania: 1200000,
    haMoldova: 350000,
    icon: '🌻',
  },
  {
    slug: 'vita-de-vie',
    name: 'Viță de Vie',
    nameRo: 'Viță de Vie',
    description:
      'Viticultura beneficiază enorm de pe urma dronelor agricole. Terenul accidentat, rândurile dese și necesitatea de tratamente frecvente (8–12 pe sezon) fac drona indispensabilă. Normă: 40–90 L/ha. Regiuni principale: Dealu Mare, Murfatlar, Vrancea, Cotnari.',
    priceMinRon: 120,
    priceMaxRon: 200,
    treatmentMonths: [4, 5, 6, 7, 8, 9],
    haRomania: 178000,
    haMoldova: 100000,
    icon: '🍇',
  },
  {
    slug: 'livada',
    name: 'Livadă (Pomi Fructiferi)',
    nameRo: 'Livadă',
    description:
      'Pomicultura din județul Argeș, Vâlcea, Prahova și Dâmbovița beneficiază de tratamentele cu drona pentru meri, peri, pruni și cireși. Drona navighează precis între rânduri și aplică tratamentele în condiții de vânt redus. Normă: 30–60 L/ha.',
    priceMinRon: 120,
    priceMaxRon: 200,
    treatmentMonths: [3, 4, 5, 6, 7, 8],
    haRomania: 95000,
    haMoldova: 18000,
    icon: '🍎',
  },
  {
    slug: 'cereale',
    name: 'Cereale (General)',
    nameRo: 'Cereale',
    description:
      'Categoria generală pentru culturi cerealiere: grâu, orz, secară, ovăz, triticale. Tratamentele cu drona sunt aplicabile pe toate cerealele de toamnă și de primăvară. Normă recomandată: 8–15 L/ha pentru tratamente foliare.',
    priceMinRon: 70,
    priceMaxRon: 120,
    treatmentMonths: [3, 4, 5, 6],
    haRomania: 5000000,
    haMoldova: 800000,
    icon: '🌾',
  },
  {
    slug: 'soia',
    name: 'Soia',
    nameRo: 'Soia',
    description:
      'Soia câștigă tot mai mult teren în România datorită cererii crescute și prețurilor bune. Tratamentele cu drona vizează afidele, buha semănaturilor și bolile foliare. Dronele sunt ideale pentru aplicarea tratamentelor pe culturi înalte, fără tasarea solului.',
    priceMinRon: 75,
    priceMaxRon: 125,
    treatmentMonths: [6, 7, 8],
    haRomania: 280000,
    haMoldova: 65000,
    icon: '🫘',
  },
];

export function getCropBySlug(slug: string): Crop | undefined {
  return crops.find((c) => c.slug === slug);
}

export const CROP_NAME_MAP: Record<string, string> = Object.fromEntries(
  crops.map((c) => [c.slug, c.name])
);
