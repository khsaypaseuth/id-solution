import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const IconTeam = (p: IconProps) => (
  <svg {...base} {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
export const IconServer = (p: IconProps) => (
  <svg {...base} {...p}><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><path d="M6 6h.01M6 18h.01" /></svg>
);
export const IconShield = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const IconSupport = (p: IconProps) => (
  <svg {...base} {...p}><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>
);
export const IconPrice = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
);
export const IconGlobe = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
);
export const IconMonitor = (p: IconProps) => (
  <svg {...base} {...p}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
);
export const IconCamera = (p: IconProps) => (
  <svg {...base} {...p}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
);
export const IconFingerprint = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 11c0 4-1 7-1 7M7 12a5 5 0 0 1 10 0c0 5-1 7-1 7M4 12a8 8 0 0 1 16 0M9 14c0 2-.5 4-.5 4M14.5 14c0 3 .5 5 .5 5" /></svg>
);
export const IconGate = (p: IconProps) => (
  <svg {...base} {...p}><path d="M3 21V8l9-4 9 4v13M3 21h18M9 21v-6h6v6" /></svg>
);
export const IconBuilding = (p: IconProps) => (
  <svg {...base} {...p}><rect x="4" y="2" width="16" height="20" rx="1" /><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01" /></svg>
);
export const IconBank = (p: IconProps) => (
  <svg {...base} {...p}><path d="m3 10 9-7 9 7M5 10v9M19 10v9M9 10v9M15 10v9M3 21h18" /></svg>
);
export const IconBook = (p: IconProps) => (
  <svg {...base} {...p}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5z" /></svg>
);
export const IconTruck = (p: IconProps) => (
  <svg {...base} {...p}><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
);
export const IconFactory = (p: IconProps) => (
  <svg {...base} {...p}><path d="M2 20h20M4 20V8l6 4V8l6 4V4h4v16" /></svg>
);
export const IconShop = (p: IconProps) => (
  <svg {...base} {...p}><path d="M3 9 4 3h16l1 6M4 9v11h16V9M4 9h16" /></svg>
);
export const IconHotel = (p: IconProps) => (
  <svg {...base} {...p}><path d="M2 20h20M4 20V4h12v16M16 8h4v12M8 8h.01M12 8h.01M8 12h.01M12 12h.01" /></svg>
);
export const IconBriefcase = (p: IconProps) => (
  <svg {...base} {...p}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
);
export const IconPhone = (p: IconProps) => (
  <svg {...base} {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
export const IconMail = (p: IconProps) => (
  <svg {...base} {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>
);
export const IconPin = (p: IconProps) => (
  <svg {...base} {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const IconArrow = (p: IconProps) => (
  <svg {...base} {...p}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
);
export const IconCheck = (p: IconProps) => (
  <svg {...base} {...p}><path d="M20 6 9 17l-5-5" /></svg>
);
