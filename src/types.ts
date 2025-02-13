export interface FilterParamsType {
  q: string;
  locationId: string;
  authorId: string;
  created_gte: string;
  created_lte: string;
  page: number;
  limit: string;
}

export interface Author {
  name: string;
  id: number;
}

export interface Location {
  location: string;
  id: number;
}
