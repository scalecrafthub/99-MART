const address = 'Road, Rajiv Nagar, Tarakulawa, Pharenda, Maharajganj, Uttar Pradesh 273303';

export const business = {
  name: '99 Mart',
  category: 'Household goods wholesaler',
  address,
  addressLines: ['Road, Rajiv Nagar, Tarakulawa', 'Pharenda, Maharajganj', 'Uttar Pradesh 273303'],
  hours: 'Monday – Sunday',
  hoursTime: '9:00 AM – 10:00 PM',
  hoursShort: 'Daily, 9 AM – 10 PM',
  rating: '4.8',
  reviews: 430,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `99 Mart, ${address}`
  )}`,
};

// Original photographs from inside the store.
export const photos = {
  cookware:
    'https://base44.app/api/apps/6aedf4a50dfb0781bc58b2ab/files/mp/public/6aedf4a50dfb0781bc58b2ab/23ebf7f9a_cookware.jpg',
  cleaning:
    'https://base44.app/api/apps/6aedf4a50dfb0781bc58b2ab/files/mp/public/6aedf4a50dfb0781bc58b2ab/594b400aa_cleaning.jpg',
  rugs:
    'https://base44.app/api/apps/6aedf4a50dfb0781bc58b2ab/files/mp/public/6aedf4a50dfb0781bc58b2ab/9c0e68f99_rugs.jpg',
  trays:
    'https://base44.app/api/apps/6aedf4a50dfb0781bc58b2ab/files/mp/public/6aedf4a50dfb0781bc58b2ab/7395bfdba_trays.jpg',
};

export const tickerItems = [
  'Stocked daily',
  'Wholesale prices',
  'Steel serving sets',
  'Non-stick cookware',
  'Cleaning & utility',
  'Floor mats & rugs',
  '4.8 ★ from 430+ shoppers',
  'Open 9 AM – 10 PM',
];

// Foot traffic through the day, 9 AM to 10 PM.
export const peakHours = [
  { from: '9 AM', to: '12 PM', label: 'Quiet', width: 23, intensity: 22 },
  { from: '12 PM', to: '4 PM', label: 'Steady', width: 31, intensity: 45 },
  { from: '4 PM', to: '7 PM', label: 'Busy', width: 23, intensity: 76 },
  { from: '7 PM', to: '10 PM', label: 'Busiest', width: 23, intensity: 100 },
];