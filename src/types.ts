export interface SearchParamsType {
  q: string;
  locationId: number | undefined;
  authorId: number | undefined;
  created_gte: string;
  created_lte: string;
  page: number;
  limit: number;
}

export interface FilterType {
  location: string;
  author: string;
  created_gte: string;
  created_lte: string;
}

export interface Author {
  name: string;
  id: number;
}

export interface Location {
  location: string;
  id: number;
}
