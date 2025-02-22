export type PictureSliceState = {
  pictures: Picture[];
};

export type Picture = {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
};
