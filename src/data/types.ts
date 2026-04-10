export type ServiceType =
  | 'spraying'
  | 'spreading'
  | 'monitoring'
  | 'mapping'
  | 'training'
  | 'rental'
  | 'sales'
  | 'seeding';

export const SERVICE_LABELS: Record<ServiceType, string> = {
  spraying: 'Pulverizare',
  spreading: 'Fertilizare',
  monitoring: 'Monitorizare',
  mapping: 'Cartografiere',
  training: 'Formare piloți',
  rental: 'Închiriere drone',
  sales: 'Vânzare echipamente',
  seeding: 'Semănat',
};

export interface Operator {
  slug: string;
  name: string;
  description: string;
  country: 'RO' | 'MD';
  counties: string[];
  city: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  facebook?: string;
  youtube?: string;
  instagram?: string;
  founded?: number;
  services: ServiceType[];
  drones: string[];
  crops: string[];
  priceMinRon?: number;
  priceMaxRon?: number;
  priceMinMdl?: number;
  priceMaxMdl?: number;
  haTreated?: number;
  fleetSize?: number;
  clientsCount?: number;
  certAACR?: boolean;
  certDJI?: boolean;
  certXAG?: boolean;
  certANSA?: boolean;
  featured?: boolean;
  verified?: boolean;
  lat?: number;
  lng?: number;
}

export interface County {
  slug: string;
  name: string;
  nameRo: string;
  region: string;
  lat: number;
  lng: number;
  agriculturalLandHa: number;
  mainCrops: string[];
  vineyardHa?: number;
  orchardHa?: number;
}

export interface MoldovaRegion {
  slug: string;
  name: string;
  lat: number;
  lng: number;
  agriculturalLandHa?: number;
  vineyardHa?: number;
}

export interface Crop {
  slug: string;
  name: string;
  nameRo: string;
  description: string;
  priceMinRon: number;
  priceMaxRon: number;
  treatmentMonths: number[];
  haRomania?: number;
  haMoldova?: number;
  icon: string;
}

export interface DroneModel {
  slug: string;
  name: string;
  manufacturer: string;
  tankCapacityL: number;
  coverageHaPerHour: number;
  priceEurMin?: number;
  priceEurMax?: number;
  afirEligible?: boolean;
}
