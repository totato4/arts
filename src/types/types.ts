export interface Author {
  name: string;
  id: number;
}

export interface Location {
  location: string;
  id: number;
}

export type AuthorAndLocation = {
  name: string;
  id: number;
};
