import { GenreType, MoviesListViewType } from '../../shared/types';

export enum SortConfigActionTypes {
  SORT_CONFIG_CHANGE = 'SORT_CONFIG_CHANGE',
}

export interface SortConfigState {
  readonly movieGenre: GenreType | string;
  readonly searchParam: string;
  readonly viewType: MoviesListViewType;
}
