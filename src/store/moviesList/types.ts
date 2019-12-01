import { MoviesList } from '../../shared/types';

export enum MoviesListActionTypes {
  MOVIES_LIST_START = 'MOVIES_LIST_START',
  MOVIES_LIST_SUCCESS = 'MOVIES_LIST_SUCCESS',
  MOVIES_LIST_FAILED = 'MOVIES_LIST_FAILED',
}

export interface MoviesListState {
  readonly list: MoviesList;
  readonly loading: Boolean;
  readonly error: Boolean;
}
