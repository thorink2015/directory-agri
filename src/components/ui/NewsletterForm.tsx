'use client';

import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

interface Props {
  variant?: 'default' | 'compact';
  className?: string;
}

/**
 * Newsletter signup form backed by Formspree.
 * Uses the same NEXT_PUBLIC_FORMSPREE_ID env var as the operator form.
 * Add a separate endpoint ID (NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID) if you want
 * a dedicated list.
 */
export default function NewsletterForm({ variant = 'default', className = '' }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const formspreeId =
    process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID ||
    process.env.NEXT_PUBLIC_FORMSPREE_ID ||
    '';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !formspreeId) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, source: 'newsletter_signup' }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={`bg-green-900/30 border border-green-700/40 rounded-xl p-4 flex items-center gap-3 ${className}`}>
        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
        <span className="text-sm text-green-100">
          Mulțumim! Verifică emailul pentru confirmare.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {variant === 'default' && (
        <div className="text-xs text-green-300 mb-2 flex items-center gap-1.5">
          <Mail className="w-3.5 h-3.5" />
          Primește lunar cele mai bune prețuri și oferte de la operatori
        </div>
      )}
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email-ul tău"
          required
          className="flex-1 min-w-0 bg-white/10 text-white border border-green-700/50 rounded-lg px-3 py-2 text-sm placeholder:text-green-300 focus:bg-white/20 focus:border-yellow-400 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-yellow-400 text-green-900 px-4 py-2 text-sm font-semibold rounded-lg hover:bg-yellow-300 transition-colors disabled:opacity-60"
        >
          {status === 'loading' ? '...' : 'Abonează'}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-xs text-red-300 mt-2">A apărut o eroare. Încearcă din nou.</p>
      )}
    </form>
  );
}
