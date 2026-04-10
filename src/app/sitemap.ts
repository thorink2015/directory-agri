import { MetadataRoute } from 'next';
import { operators } from '@/data/operators';
import { counties } from '@/data/counties';
import { crops } from '@/data/crops';
import { moldovaRegions } from '@/data/regions-moldova';

const BASE_URL = 'https://droneagricol.ro';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/operatori`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/judete`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/culturi`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/moldova`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/preturi-pulverizare-drona`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/adauga-operator`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/despre`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ];

  const operatorPages: MetadataRoute.Sitemap = operators.map((op) => ({
    url: `${BASE_URL}/operatori/${op.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const countyPages: MetadataRoute.Sitemap = counties.flatMap((c) => [
    {
      url: `${BASE_URL}/judete/${c.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/judete/${c.slug}/operatori`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
  ]);

  const cropPages: MetadataRoute.Sitemap = crops.map((c) => ({
    url: `${BASE_URL}/culturi/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const moldovaPages: MetadataRoute.Sitemap = moldovaRegions.map((r) => ({
    url: `${BASE_URL}/moldova/${r.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [
    ...staticPages,
    ...operatorPages,
    ...countyPages,
    ...cropPages,
    ...moldovaPages,
  ];
}
