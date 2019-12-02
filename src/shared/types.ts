export type SingleMovie = {
  id: number;
  key: string;
  name: string;
  description: string;
  genres: Array<GenreType>;
  rate: string;
  length: number;
  img: string;
}

export type MoviesList = Array<SingleMovie>;

export enum GenreType {
  action = 'Action',
  adventure = 'Adventure',
  comedy = 'Comedy',
  crime = 'Crime',
  history = 'History',
  drama = 'Drama',
  biography = 'Biography',
  sport = 'Sport',
  mystery = 'Mystery',
  thriller = 'Thriller',
  scifi = 'SciFi',
}

export enum MoviesListViewType {
  tiles = 'Tiles',
  list = 'List',
}

export enum HelperTexts {
  loading = 'LOADING...',
  requestError = 'Error during uploading data.',
  noResults = 'NO RESULTS',
}

export type SearchResult = string;

export type SortConfigValue = MoviesListViewType | SearchResult | undefined;

export type SortConfigParam = {
  [key: string]: SortConfigValue,
};
