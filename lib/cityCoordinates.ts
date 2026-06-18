// Geographic coordinates for all mapped cities (WGS84).
export const CITY_COORDINATES = {
  balotra: { lat: 25.8324, lng: 72.241 },
  jaisalmer: { lat: 26.9157, lng: 70.9083 },
  jodhpur: { lat: 26.2389, lng: 73.0243 },
  jaipur: { lat: 26.9124, lng: 75.7873 },
  udaipur: { lat: 24.5854, lng: 73.7125 },
  ahmedabad: { lat: 23.0225, lng: 72.5714 },
  vadodara: { lat: 22.3072, lng: 73.1812 },
  "statue-of-unity": { lat: 21.838, lng: 73.7191 },
  surat: { lat: 21.1702, lng: 72.8311 },
  daman: { lat: 20.4143, lng: 72.8328 },
  mumbai: { lat: 19.076, lng: 72.8777 },
  lonavala: { lat: 18.7481, lng: 73.4072 },
  alibagh: { lat: 18.6414, lng: 72.8722 },
  goa: { lat: 15.2993, lng: 74.124 },
  punjab: { lat: 31.1471, lng: 75.3412 },
  chandigarh: { lat: 30.7333, lng: 76.7794 },
  delhi: { lat: 28.6139, lng: 77.209 },
  spiti: { lat: 32.2464, lng: 78.0501 },
  rishikesh: { lat: 30.0869, lng: 78.2676 },
  haridwar: { lat: 29.9457, lng: 78.1642 },
  nainital: { lat: 29.3803, lng: 79.4636 },
  bhimtal: { lat: 29.3444, lng: 79.5633 },
  "jim-corbett": { lat: 29.53, lng: 79.129 },
  hyderabad: { lat: 17.385, lng: 78.4867 },
  bangalore: { lat: 12.9716, lng: 77.5946 },
  coorg: { lat: 12.4244, lng: 75.7382 },
  chennai: { lat: 13.0827, lng: 80.2707 },
  pondicherry: { lat: 11.9416, lng: 79.8083 },
  kerala: { lat: 10.8505, lng: 76.2711 },
  bhubaneswar: { lat: 20.2961, lng: 85.8245 },
  gangtok: { lat: 27.3389, lng: 88.6065 },
  darjeeling: { lat: 27.036, lng: 88.2627 }
} as const;

export type CityCoordinateKey = keyof typeof CITY_COORDINATES;

export function getCityCoordinates(key: CityCoordinateKey) {
  return CITY_COORDINATES[key];
}
