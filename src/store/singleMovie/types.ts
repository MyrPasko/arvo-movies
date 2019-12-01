import { SingleMovie } from '../../shared/types';

export enum SingleMovieActionTypes {
  SINGLE_MOVIE_SET = 'SINGLE_MOVIE_SET',
  SINGLE_MOVIE_DELETE = 'SINGLE_MOVIE_DELETE',
}

export interface SingleMovieState {
  readonly singleMovie: SingleMovie | undefined;
}
