'use client';

import { useState } from 'react';
import type { Dictionary } from '@/i18n/dictionaries';
import { SITE } from '@/lib/site';

type Variant = 'contact' | 'quote';

export default function InquiryForm({
  variant,
  dict,
}: {
  variant: Variant;
  dict: Dictionary;
}) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const t = variant === 'quote' ? dict.quote.form : dict.contact.form;
  const categories = dict.quote.form.categories;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (SITE.web3formsKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      setStatus('error');
      return;
    }

    setStatus('sending');
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', SITE.web3formsKey);
    formData.append('from_name', SITE.name);
    formData.append(
      'subject',
      variant === 'quote' ? dict.quote.form.subjectQuote : dict.quote.form.subjectContact,
    );

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputClass = 'input-premium';
  const labelClass = 'mb-1.5 block text-sm font-medium text-ink/80';

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-base font-medium text-green-800">
          {variant === 'quote' ? dict.quote.form.success : dict.contact.form.success}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {variant === 'contact' ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="name">{dict.contact.form.fullName}</label>
              <input id="name" name="name" required className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="company">{dict.contact.form.company}</label>
              <input id="company" name="company" className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="phone">{dict.contact.form.phone}</label>
              <input id="phone" name="phone" type="tel" className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="email">{dict.contact.form.email}</label>
              <input id="email" name="email" type="email" required className={inputClass} />
            </div>
          </div>
          <div>
            <label className={labelClass} htmlFor="subject">{dict.contact.form.subject}</label>
            <input id="subject" name="user_subject" className={inputClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor="message">{dict.contact.form.message}</label>
            <textarea id="message" name="message" rows={5} required className={inputClass} />
          </div>
        </>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="q-name">{dict.quote.form.name}</label>
              <input id="q-name" name="name" required className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="q-company">{dict.quote.form.company}</label>
              <input id="q-company" name="company" className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="q-phone">{dict.quote.form.phone}</label>
              <input id="q-phone" name="phone" type="tel" className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="q-email">{dict.quote.form.email}</label>
              <input id="q-email" name="email" type="email" required className={inputClass} />
            </div>
          </div>
          <div>
            <label className={labelClass} htmlFor="q-category">{dict.quote.form.category}</label>
            <select id="q-category" name="category" required className={inputClass} defaultValue="">
              <option value="" disabled>{dict.quote.form.categoryPlaceholder}</option>
              {Object.entries(categories).map(([key, label]) => (
                <option key={key} value={label}>{label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="q-product">{dict.quote.form.product}</label>
            <input id="q-product" name="product" className={inputClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor="q-desc">{dict.quote.form.description}</label>
            <textarea id="q-desc" name="message" rows={5} required className={inputClass} />
          </div>
        </>
      )}

      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      {status === 'error' && (
        <p className="text-sm text-red-600">{t.error}</p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
        {status === 'sending'
          ? t.sending
          : variant === 'quote'
            ? dict.quote.form.submit
            : dict.contact.form.submit}
      </button>
    </form>
  );
}
