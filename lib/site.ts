// Central, language-neutral site configuration & data.
// Editing contact details, partners, clients, etc. happens here.

export const SITE = {
  name: 'ID Solution Sole Co., Ltd.',
  shortName: 'ID Solution',
  url: 'https://idsolution.la',
  address: {
    lines: [
      'Souphanouvong Road',
      'Sibounhueang Village',
      'Sikhottabong District',
      'Vientiane Capital, Lao PDR',
    ],
  },
  phone: '020 59127664',
  phoneHref: 'tel:+8562059127664',
  email: 'info@idsolution.la',
  facebook: 'http://facebook.com/idsolution.la',
  whatsapp: {
    number: '+8562022258998',
    prefilled:
      'Hello ID Solution, I would like to request information about your products and services.',
  },
  map: {
    lat: 17.973423,
    lng: 102.556946,
    link: 'https://www.google.com/maps?q=17.973423,102.556946',
    embed:
      'https://www.google.com/maps?q=17.973423,102.556946&hl=en&z=16&output=embed',
  },
  // Get a free access key at https://web3forms.com — emails submissions to your inbox.
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
};

export function whatsappLink(message: string = SITE.whatsapp.prefilled): string {
  const num = SITE.whatsapp.number.replace(/[^\d]/g, '');
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

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

// --- Clients (add more here in future) ---
export const CLIENTS: { name: string; logo?: string }[] = [
  { name: 'Thanalaeng Dry Port' },
  { name: 'Sithi Logistics' },
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
];
