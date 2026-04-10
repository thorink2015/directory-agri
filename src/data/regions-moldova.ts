import { MoldovaRegion } from './types';

export const moldovaRegions: MoldovaRegion[] = [
  { slug: 'chisinau', name: 'Chișinău', lat: 47.0105, lng: 28.8638, agriculturalLandHa: 42000 },
  { slug: 'balti', name: 'Bălți', lat: 47.7557, lng: 27.9291, agriculturalLandHa: 165000 },
  { slug: 'cahul', name: 'Cahul', lat: 45.9052, lng: 28.1954, agriculturalLandHa: 115000, vineyardHa: 8000 },
  { slug: 'comrat', name: 'Comrat (Găgăuzia)', lat: 46.3023, lng: 28.6611, agriculturalLandHa: 140000 },
  { slug: 'ungheni', name: 'Ungheni', lat: 47.2137, lng: 27.8151, agriculturalLandHa: 98000, vineyardHa: 5000 },
  { slug: 'valul-lui-traian', name: 'Valul lui Traian (Cahul)', lat: 45.8700, lng: 28.7200, agriculturalLandHa: 45000, vineyardHa: 15000 },
  { slug: 'codru', name: 'Codru (Centru)', lat: 47.0000, lng: 28.5000, agriculturalLandHa: 120000, vineyardHa: 25000 },
  { slug: 'stefan-voda', name: 'Ștefan Vodă', lat: 46.5213, lng: 29.6611, agriculturalLandHa: 72000, vineyardHa: 6000 },
];

export function getMoldovaRegionBySlug(slug: string): MoldovaRegion | undefined {
  return moldovaRegions.find((r) => r.slug === slug);
}
