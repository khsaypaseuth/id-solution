// Central, language-neutral site configuration & data.
// Editing contact details, partners, clients, etc. happens here.

export const SITE = {
  name: 'Saypaseuth Advance Co., Ltd.',
  shortName: 'Saypaseuth',
  url: 'https://saypaseuth.com',
  address: {
    lines: [
      'Hongkair Village',
      'Saysettha District',
      'Vientiane Capital, Lao PDR',
    ],
  },
  phone: '020 59916868',
  phoneHref: 'tel:+8562059916868',
  email: 'info@saypaseuth.com',
  facebook: 'http://facebook.com/saypaseuth',
  whatsapp: {
    number: '+8562059916868',
    prefilled:
      'Hello Saypaseuth, I would like to request information about your products and services.',
  },
  map: {
    lat: 17.970886,
    lng: 102.636734,
    link: 'https://www.google.com/maps?q=17.970886,102.636734',
    embed:
      'https://www.google.com/maps?q=17.970886,102.636734&hl=en&z=16&output=embed',
  },
  // Get a free access key at https://web3forms.com — emails submissions to your inbox.
  // Set via NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY — see .env.example
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? 'YOUR_WEB3FORMS_ACCESS_KEY',
};

/** Toggle Team in header/footer nav. The /team page stays available either way. */
export const SHOW_TEAM_NAV = false;

export function whatsappLink(message: string = SITE.whatsapp.prefilled): string {
  const num = SITE.whatsapp.number.replace(/[^\d]/g, '');
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

/** Featured items for the home page previews. */
export const HOME_FEATURED = {
  portfolio: [3, 7, 13, 46, 53, 38],
  clients: ['mmg', 'unicef', 'sacombank', 'ntpc', 'undp', 'lsx', 'japan-embassy', 'moes'],
};

// --- Partners ---
// Each brand has a `slug` used for its logo file under /public/partners/<slug>.(svg|png).
// The BrandLogo component falls back svg -> png -> brand name text.
export type Brand = { name: string; slug: string };

export const PARTNER_CATEGORIES: { key: string; brands: Brand[] }[] = [
  {
    key: 'enterpriseInfrastructure',
    brands: [
      { name: 'Dell Technologies', slug: 'dell' },
      { name: 'HPE', slug: 'hpe' },
      { name: 'Lenovo', slug: 'lenovo' },
      { name: 'Cisco', slug: 'cisco' },
      { name: 'Huawei', slug: 'huawei' },
      { name: 'Juniper', slug: 'juniper' },
      { name: 'Aruba', slug: 'aruba' },
      { name: 'Ubiquiti', slug: 'ubiquiti' },
      { name: 'MikroTik', slug: 'mikrotik' },
    ],
  },
  {
    key: 'endUserComputing',
    brands: [
      { name: 'Dell', slug: 'dell' },
      { name: 'HP', slug: 'hp' },
      { name: 'Lenovo', slug: 'lenovo' },
      { name: 'Acer', slug: 'acer' },
      { name: 'Asus', slug: 'asus' },
      { name: 'MSI', slug: 'msi' },
      { name: 'Apple', slug: 'apple' },
    ],
  },
  {
    key: 'security',
    brands: [
      { name: 'Fortinet', slug: 'fortinet' },
      { name: 'Sophos', slug: 'sophos' },
      { name: 'Palo Alto Networks', slug: 'paloalto' },
      { name: 'Kaspersky', slug: 'kaspersky' },
      { name: 'ESET', slug: 'eset' },
      { name: 'Bitdefender', slug: 'bitdefender' },
      { name: 'Trend Micro', slug: 'trendmicro' },
    ],
  },
  {
    key: 'printing',
    brands: [
      { name: 'HP', slug: 'hp' },
      { name: 'Canon', slug: 'canon' },
      { name: 'Epson', slug: 'epson' },
      { name: 'Brother', slug: 'brother' },
      { name: 'Fuji Xerox', slug: 'fujixerox' },
    ],
  },
  {
    key: 'cctv',
    brands: [
      { name: 'Hikvision', slug: 'hikvision' },
      { name: 'Dahua', slug: 'dahua' },
      { name: 'HiLook', slug: 'hilook' },
      { name: 'Uniview', slug: 'uniview' },
      { name: 'Tiandy', slug: 'tiandy' },
    ],
  },
  {
    key: 'accessControl',
    brands: [
      { name: 'ZKTeco', slug: 'zkteco' },
      { name: 'HIP', slug: 'hip' },
      { name: 'Suprema', slug: 'suprema' },
      { name: 'Hikvision', slug: 'hikvision' },
      { name: 'Dahua', slug: 'dahua' },
    ],
  },
  {
    key: 'upsPower',
    brands: [
      { name: 'APC', slug: 'apc' },
      { name: 'Eaton', slug: 'eaton' },
      { name: 'Vertiv', slug: 'vertiv' },
      { name: 'Delta', slug: 'delta' },
      { name: 'Santak', slug: 'santak' },
    ],
  },
  {
    key: 'softwareCloud',
    brands: [
      { name: 'Microsoft', slug: 'microsoft' },
      { name: 'Google Workspace', slug: 'googleworkspace' },
      { name: 'Adobe', slug: 'adobe' },
      { name: 'VMware', slug: 'vmware' },
      { name: 'Veeam', slug: 'veeam' },
    ],
  },
];

// --- Clients ---
export type Client = {
  name: string;
  slug: string;
  /** Logo path under /public, e.g. /clients/mmg.svg */
  logo?: string;
  /** Shown when no logo image is available */
  initials?: string;
  /** Optional project / technology summary */
  summary?: string;
};

export const CLIENTS: Client[] = [
  { name: 'MMG', slug: 'mmg', logo: '/clients/mmg.svg' },
  { name: 'Sacombank Lao', slug: 'sacombank', logo: '/clients/sacombank.png' },
  { name: 'Champa IT', slug: 'champa-it', logo: '/clients/champa-it.png' },
  { name: 'Japan Embassy Lao', slug: 'japan-embassy', logo: '/clients/japan-embassy.svg' },
  { name: 'UNICEF', slug: 'unicef', logo: '/clients/unicef.svg' },
  { name: 'UNDP', slug: 'undp', logo: '/clients/undp.svg' },
  { name: 'Ministry of Education and Sports', slug: 'moes', logo: '/clients/moes.png' },
  { name: 'Thanalaeng Dry Port', slug: 'thanaleng', logo: '/clients/thanaleng.png' },
  { name: 'Idea Trading', slug: 'idea-trading', logo: '/images/ideaTradinglogo.png' },
  { name: 'MK Express and Logistic', slug: 'mk-express', logo: '/images/mklogo.png' },
  {
    name: 'Lao Securities Exchange (LSX)',
    slug: 'lsx',
    logo: '/clients/lsx.png',
  },
  {
    name: 'Nam Theun Power Company (NTPC)',
    slug: 'ntpc',
    logo: '/clients/ntpc.png',
  },
  {
    name: 'RHB Bank Lao Limited',
    slug: 'rhb',
    logo: '/clients/rhb.png',
  },
  {
    name: 'Banque Franco-Lao (BFL)',
    slug: 'bfl',
    logo: '/clients/bfl.png',
  },
  {
    name: 'ANZ Bank (Lao) Limited',
    slug: 'anz',
    logo: '/clients/anz.svg',
  },
];

// --- Team roles (names/bios live in dictionaries; photos in /public/team) ---
export const TEAM = [
  { id: 'managingDirector', photo: '/team/member-1.jpg' },
  { id: 'salesExecutive1', photo: '/team/member-2.jpg' },
  { id: 'salesExecutive2', photo: '/team/member-3.jpg' },
  { id: 'itEngineer1', photo: '/team/member-4.jpg' },
  { id: 'itEngineer2', photo: '/team/member-5.jpg' },
  { id: 'itEngineer3', photo: '/team/member-6.jpg' },
  { id: 'adminAccountant', photo: '/team/member-7.jpg' },
];

// --- Portfolio categories (images in /public/portfolio) ---
export const PORTFOLIO_CATEGORIES = [
  'itEquipmentSupply',
  'serverInstallation',
  'networkInfrastructure',
  'cctvInstallation',
  'accessControlProjects',
  'enterpriseSolutions',
  'electricalProtection',
  'solarInstallation',
  'droneSurvey',
];
