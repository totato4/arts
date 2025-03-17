export type Picture = {
  authorId: number;
  created: string;
  id: 0;
  imageUrl: string;
  locationId: 0;
  name: string;
};

export type Author = {
  id: number;
  name: string;
};

export type Location = {
  id: number;
  location: string;
};

export type AuthorAndLocation = {
  id: number;
  name: string;
};

export type ParamsType = {
  q: string;
  locationId: number | undefined;
  authorId: number | undefined;
  created_gte: string;
  created_lte: string;
  page: number;
  limit: number;
};
