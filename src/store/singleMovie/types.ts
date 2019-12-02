import { SingleMovie } from '../../shared/types';

export enum SingleMovieActionTypes {
  SINGLE_MOVIE_SET = 'SINGLE_MOVIE_SET',
}

export interface SingleMovieState {
  readonly singleMovie: SingleMovie | undefined;
}
