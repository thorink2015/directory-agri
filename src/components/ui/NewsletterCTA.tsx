'use client';

import { Bell, Mail, MessageCircle } from 'lucide-react';
import NewsletterForm from './NewsletterForm';
import WhatsAppChannel from './WhatsAppChannel';

interface Props {
  variant?: 'ro' | 'md';
}

export default function NewsletterCTA({ variant = 'ro' }: Props) {
  const isMd = variant === 'md';

  return (
    <section className={`py-14 ${isMd ? 'bg-blue-900' : 'bg-green-800'} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left: copy */}
          <div>
            <div
              className={`inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full mb-5 border ${
                isMd
                  ? 'bg-blue-800/50 border-blue-600 text-blue-200'
                  : 'bg-green-700/50 border-green-500 text-green-200'
              }`}
            >
              <Bell className="w-3.5 h-3.5" />
              {isMd ? 'Noutăți exclusive din Moldova' : 'Noutăți exclusive din România'}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              {isMd
                ? 'Fii primul care află prețurile sezonului 2026'
                : 'Primești lunar cele mai bune prețuri și oferte'}
            </h2>

            <p className={`mb-6 leading-relaxed ${isMd ? 'text-blue-200' : 'text-green-200'}`}>
              {isMd
                ? 'Operatori noi adăugați în Moldova, tarife MDL actualizate, modificări la subvențiile AIPA și ghiduri practice. Gratuit, fără spam.'
                : 'Operatori noi în județul tău, tarife RON/ha actualizate pe culturi, modificări legislative AFIR/AACR și oferte de sezon. Gratuit, fără spam.'}
            </p>

            <ul className={`space-y-2.5 text-sm ${isMd ? 'text-blue-300' : 'text-green-300'}`}>
              {(isMd
                ? [
                    'Prețuri MDL/ha actualizate lunar',
                    'Operatori noi autorizați ANSA în Moldova',
                    'Noutăți despre subvențiile AIPA',
                  ]
                : [
                    'Prețuri RON/ha actualizate lunar pe culturi',
                    'Operatori noi din județul tău',
                    'Modificări legislative AFIR și AACR',
                  ]
              ).map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      isMd ? 'bg-blue-400' : 'bg-green-400'
                    }`}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form + WhatsApp */}
          <div
            className={`rounded-2xl p-6 border ${
              isMd
                ? 'bg-blue-800/40 border-blue-700'
                : 'bg-green-700/40 border-green-600'
            }`}
          >
            <p
              className={`text-sm mb-3 flex items-center gap-2 ${
                isMd ? 'text-blue-200' : 'text-green-200'
              }`}
            >
              <Mail className="w-4 h-4" />
              Abonează-te la newsletter
            </p>

            <NewsletterForm className="mb-5" />

            <div
              className={`border-t pt-5 ${isMd ? 'border-blue-700' : 'border-green-600'}`}
            >
              <p
                className={`text-sm mb-3 flex items-center gap-2 ${
                  isMd ? 'text-blue-200' : 'text-green-200'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Sau urmărește-ne pe WhatsApp
              </p>
              <WhatsAppChannel
                label="Canal WhatsApp DroneAgricol"
                className="w-full justify-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
