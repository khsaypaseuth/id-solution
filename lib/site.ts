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
  email: 'Id7.Solution@gmail.com',
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

// --- Partners (logos sourced/replaced under /public/partners) ---
export const PARTNER_CATEGORIES: { key: string; brands: string[] }[] = [
  {
    key: 'enterpriseInfrastructure',
    brands: ['Dell Technologies', 'HPE', 'Lenovo', 'Cisco', 'Huawei', 'Juniper', 'Aruba', 'Ubiquiti', 'MikroTik'],
  },
  {
    key: 'endUserComputing',
    brands: ['Dell', 'HP', 'Lenovo', 'Acer', 'Asus', 'MSI', 'Apple'],
  },
  {
    key: 'security',
    brands: ['Fortinet', 'Sophos', 'Palo Alto Networks', 'Kaspersky', 'ESET', 'Bitdefender', 'Trend Micro'],
  },
  {
    key: 'printing',
    brands: ['HP', 'Canon', 'Epson', 'Brother', 'Fuji Xerox'],
  },
  {
    key: 'cctv',
    brands: ['Hikvision', 'Dahua', 'HiLook', 'Uniview', 'Tiandy'],
  },
  {
    key: 'accessControl',
    brands: ['ZKTeco', 'HIP', 'Suprema', 'Hikvision', 'Dahua'],
  },
  {
    key: 'upsPower',
    brands: ['APC', 'Eaton', 'Vertiv', 'Delta', 'Santak'],
  },
  {
    key: 'softwareCloud',
    brands: ['Microsoft', 'Google Workspace', 'Adobe', 'VMware', 'Veeam'],
  },
];

// --- Clients (add more here in future) ---
export const CLIENTS: { name: string; logo?: string }[] = [
  { name: 'Thanalaeng Dry Port' },
  { name: 'Sithi Logistics' },
];

// --- Team roles (names/bios live in dictionaries; photos in /public/team) ---
export const TEAM = [
  { id: 'managingDirector', photo: '/team/member-1.svg' },
  { id: 'salesExecutive1', photo: '/team/member-2.svg' },
  { id: 'salesExecutive2', photo: '/team/member-3.svg' },
  { id: 'itEngineer1', photo: '/team/member-4.svg' },
  { id: 'itEngineer2', photo: '/team/member-5.svg' },
  { id: 'itEngineer3', photo: '/team/member-6.svg' },
  { id: 'adminAccountant', photo: '/team/member-7.svg' },
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
