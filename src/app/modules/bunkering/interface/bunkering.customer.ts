export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Bunkering {
  id: number;
  code: string;
  deliveryDate: string;
  suplier: any;
  vessel: any;
  detail: any;
  company: string;
  status: string;
}

export interface City {
  name: string;
  code: string;
}
export interface VesselList {
  name: string;
  value: string;
}
export interface BuyerList {
  name: string;
  value: string;
}

export interface SuplierList {
  name: string;
  value: string;
}
