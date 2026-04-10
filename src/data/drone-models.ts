import { DroneModel } from './types';

export const droneModels: DroneModel[] = [
  {
    slug: 'dji-agras-t50',
    name: 'DJI Agras T50',
    manufacturer: 'DJI',
    tankCapacityL: 40,
    coverageHaPerHour: 21,
    priceEurMin: 15000,
    priceEurMax: 19000,
    afirEligible: false,
  },
  {
    slug: 'dji-agras-t25p',
    name: 'DJI Agras T25P',
    manufacturer: 'DJI',
    tankCapacityL: 16,
    coverageHaPerHour: 16,
    priceEurMin: 8000,
    priceEurMax: 11000,
    afirEligible: false,
  },
  {
    slug: 'dji-agras-t100',
    name: 'DJI Agras T100',
    manufacturer: 'DJI',
    tankCapacityL: 80,
    coverageHaPerHour: 40,
    priceEurMin: 28000,
    priceEurMax: 35000,
    afirEligible: false,
  },
  {
    slug: 'xag-p100',
    name: 'XAG P100 Pro',
    manufacturer: 'XAG',
    tankCapacityL: 50,
    coverageHaPerHour: 22,
    priceEurMin: 16000,
    priceEurMax: 20000,
    afirEligible: false,
  },
  {
    slug: 'appia-adt-50p',
    name: 'ADT Falcon 50P (Appia)',
    manufacturer: 'Appia Drone Tech',
    tankCapacityL: 50,
    coverageHaPerHour: 18,
    priceEurMin: 18000,
    priceEurMax: 22000,
    afirEligible: true,
  },
];

export function getDroneBySlug(slug: string): DroneModel | undefined {
  return droneModels.find((d) => d.slug === slug);
}

export const DRONE_NAME_MAP: Record<string, string> = Object.fromEntries(
  droneModels.map((d) => [d.slug, d.name])
);
