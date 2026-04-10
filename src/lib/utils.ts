import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(min?: number, max?: number, currency = 'RON'): string {
  if (!min && !max) return 'Preț la cerere';
  if (min && max) return `${min}–${max} ${currency}/ha`;
  if (min) return `de la ${min} ${currency}/ha`;
  return `până la ${max} ${currency}/ha`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ă/g, 'a')
    .replace(/â/g, 'a')
    .replace(/î/g, 'i')
    .replace(/ș/g, 's')
    .replace(/ț/g, 't')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

export function formatHa(ha?: number): string {
  if (!ha) return 'N/A';
  if (ha >= 1000000) return `${(ha / 1000000).toFixed(1)} mil. ha`;
  if (ha >= 1000) return `${(ha / 1000).toFixed(0)}.000 ha`;
  return `${ha} ha`;
}
