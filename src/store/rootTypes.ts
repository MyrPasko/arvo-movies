import { MoviesListState } from './moviesList/types';
import { SingleMovieState } from './singleMovie/types';
import { SortConfigState } from './sortConfig/types';

export interface RootState {
  moviesList: MoviesListState,
  singleMovie: SingleMovieState,
  sortConfig: SortConfigState,
}

