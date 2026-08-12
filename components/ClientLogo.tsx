'use client';

import { useState } from 'react';
import type { Client } from '@/lib/site';

function clientInitials(client: Client): string {
  if (client.initials) return client.initials;
  return client.name
    .split(' ')
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function InitialsBadge({ client }: { client: Client }) {
  return (
    <div
      className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary/10 text-base font-bold text-brand-primary"
      aria-hidden="true"
    >
      {clientInitials(client)}
    </div>
  );
}

export default function ClientLogo({ client }: { client: Client }) {
  const [failed, setFailed] = useState(false);

  if (!client.logo || failed) {
    return <InitialsBadge client={client} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={client.logo}
      alt={`${client.name} logo`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="max-h-14 max-w-full object-contain"
    />
  );
}
