export interface Vehicles {
  objects: Vehicle[];
}

export interface Vehicle {
  discriminator: string;
  platesNumber: string;
  sideNumber: string;
  color: string;
  type: string;
  picture: {
    id: string;
    name: string;
    extension: unknown;
    contentType: unknown;
  };
  rangeKm: number;
  batteryLevelPct: number;
  reservationEnd: unknown;
  reservation: unknown;
  status: string;
  locationDescription: unknown;
  address: unknown;
  mapColor: {
    rgb: string;
    alpha: number;
  };
  promotion: unknown;
  id: string;
  name: string;
  description: unknown;
  location: {
    latitude: number;
    longitude: number;
  };
  metadata: unknown;
}
