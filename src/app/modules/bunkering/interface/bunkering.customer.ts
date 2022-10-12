export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Customer {
  id: number;
  code: string;
  date: string;
  supplier: string;
  vessel: string;
  company: string;
  quantityFo: number;
  quantityGo: number;
  barging: number;
  buyer: string;
  totalCOGS: number;
  totalSell: number;
  status: string;
}

export interface City {
  name: string;
  code: string;
}
