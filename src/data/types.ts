export type ServiceType =
  | 'spraying'
  | 'spreading'
  | 'monitoring'
  | 'mapping'
  | 'training'
  | 'rental'
  | 'sales'
  | 'seeding'
  | 'consultancy'
  | 'emergency';

export const SERVICE_LABELS: Record<ServiceType, string> = {
  spraying: 'Pulverizare',
  spreading: 'Fertilizare',
  monitoring: 'Monitorizare',
  mapping: 'Cartografiere',
  training: 'Formare piloți',
  rental: 'Închiriere drone',
  sales: 'Vânzare echipamente',
  seeding: 'Semănat',
  consultancy: 'Consultanță agricolă',
  emergency: 'Intervenție rapidă',
};

export interface Operator {
  slug: string;
  name: string;             // Full legal name (used on profile page)
  shortName?: string;       // Short name for listings (max ~18 chars)
  tagline?: string;         // 1-line pitch (max ~60 chars)
  description: string;
  country: 'RO' | 'MD';
  counties: string[];
  moldovaRaioane?: string[]; // Moldova: raion slugs covered
  city: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  tiktok?: string;
  youtube?: string;
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
  pilotsCount?: number;
  clientsCount?: number;
  responseTimeHours?: number;     // Average response time
  coverageRadiusKm?: number;      // Radius from base
  languagesSpoken?: string[];     // ['ro', 'en', 'hu', 'ru']
  paymentMethods?: string[];      // ['cash', 'transfer', 'card', 'leasing']
  acceptsAfirFunds?: boolean;     // Accepts AFIR-funded payments
  emergencyService?: boolean;     // 24/7 emergency service
  certAACR?: boolean;
  certDJI?: boolean;
  certXAG?: boolean;
  certANSA?: boolean;             // Moldova
  iso9001?: boolean;              // Quality certification
  gdprCompliant?: boolean;
  cui?: string;                   // Romanian tax ID
  regCom?: string;                // Registry number
  featured?: boolean;
  verified?: boolean;
  logoUrl?: string;               // Path to logo image
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
  region: string;               // North, Center, South, Găgăuzia, Transnistria
  lat: number;
  lng: number;
  agriculturalLandHa?: number;
  vineyardHa?: number;
  orchardHa?: number;
  mainCrops?: string[];
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

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: 'top-lists' | 'guide' | 'news' | 'case-study' | 'legislation';
  country?: 'RO' | 'MD';       // defaults to 'RO' if absent
  publishedAt: string;          // ISO date
  updatedAt?: string;
  author: string;
  readMinutes: number;
  tags: string[];
  relatedCounties?: string[];
  relatedCrops?: string[];
  relatedServices?: ServiceType[];
  content: string;              // Markdown
  featuredImage?: string;
}
