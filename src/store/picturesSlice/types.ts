export type PictureSliceState = {
  pictures: Picture[];
  authors: Authors[];
  locations: Locations[];
};

export type Picture = {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
};

export type Authors = {
  name: string;
  id: number;
};
export type Locations = {
  name: string;
  id: number;
};
