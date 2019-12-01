import { GenreType, MoviesListViewType } from '../../shared/types';

export enum SortConfigActionTypes {
  // TODO Remove this if necessary
  // SORT_CONFIG_GET = 'SORT_CONFIG_GET',
  SORT_CONFIG_CHANGE = 'SORT_CONFIG_CHANGE',
}

export interface SortConfigState {
  readonly movieGenre: string | undefined;
  readonly searchParam: string;
  readonly viewType: MoviesListViewType;
}
