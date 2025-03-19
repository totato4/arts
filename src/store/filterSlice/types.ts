export type FilterSliceState = {
  q: string;
  locationId: number | null;
  authorId: number | null;
  created_gte: "";
  created_lte: "";
  page: number;
  limit: number;
};
