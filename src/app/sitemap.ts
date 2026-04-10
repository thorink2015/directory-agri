import { MetadataRoute } from 'next';
import { operators } from '@/data/operators';
import { counties } from '@/data/counties';
import { crops } from '@/data/crops';
import { moldovaRegions } from '@/data/regions-moldova';
import { services } from '@/data/services';
import { droneModels } from '@/data/drone-models';
import { cities } from '@/data/cities';
import { wineRegions } from '@/data/wine-regions';
import { SERVICE_LABELS } from '@/data/types';

const BASE_URL = 'https://droneagricol.ro';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ─── Static pages ────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/operatori`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/judete`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/culturi`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/servicii`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/drone`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/regiuni-viticole`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/moldova`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/preturi-pulverizare-drona`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/adauga-operator`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/despre`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ];

  // ─── Operator profiles (19 RO + 4 MD = 23) ──────────────────────────────
  const operatorPages: MetadataRoute.Sitemap = operators.map((op) => ({
    url: `${BASE_URL}/operatori/${op.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // ─── County pages (41 × 3 = 123) ─────────────────────────────────────────
  const countyPages: MetadataRoute.Sitemap = counties.flatMap((c) => [
    {
      url: `${BASE_URL}/judete/${c.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/judete/${c.slug}/operatori`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
  ]);

  // ─── County + Crop pages (41 × 8 = 328) ──────────────────────────────────
  const countyCropPages: MetadataRoute.Sitemap = counties.flatMap((county) =>
    crops.map((crop) => ({
      url: `${BASE_URL}/judete/${county.slug}/culturi/${crop.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  // ─── County + Service pages (41 × 6 = 246) ───────────────────────────────
  const serviceKeys = Object.keys(SERVICE_LABELS);
  const countyServicePages: MetadataRoute.Sitemap = counties.flatMap((county) =>
    serviceKeys.map((serviceKey) => ({
      url: `${BASE_URL}/judete/${county.slug}/servicii/${serviceKey}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  // ─── Crop pages (8) ───────────────────────────────────────────────────────
  const cropPages: MetadataRoute.Sitemap = crops.map((c) => ({
    url: `${BASE_URL}/culturi/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ─── Service pages (6) ───────────────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/servicii/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // ─── Drone model pages (5) ───────────────────────────────────────────────
  const dronePages: MetadataRoute.Sitemap = droneModels.map((d) => ({
    url: `${BASE_URL}/drone/${d.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));

  // ─── City pages (20) ─────────────────────────────────────────────────────
  const cityPages: MetadataRoute.Sitemap = cities
    .filter((c) => !c.county.includes('-md')) // RO cities only (MD handled separately)
    .map((c) => ({
      url: `${BASE_URL}/orase/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  // ─── Wine region pages (6) ───────────────────────────────────────────────
  const wineRegionPages: MetadataRoute.Sitemap = wineRegions.map((r) => ({
    url: `${BASE_URL}/regiuni-viticole/${r.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.72,
  }));

  // ─── Moldova region pages (8) ────────────────────────────────────────────
  const moldovaPages: MetadataRoute.Sitemap = moldovaRegions.map((r) => ({
    url: `${BASE_URL}/moldova/${r.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [
    ...staticPages,       // 12
    ...operatorPages,     // 23
    ...countyPages,       // 82
    ...countyCropPages,   // 328
    ...countyServicePages,// 246 (using 6 SERVICE_LABELS keys)
    ...cropPages,         // 8
    ...servicePages,      // 6
    ...dronePages,        // 5
    ...cityPages,         // ~18
    ...wineRegionPages,   // 6
    ...moldovaPages,      // 8
    // Total: ~742+ URLs
  ];
}
