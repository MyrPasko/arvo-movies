import { MoviesListActionTypes } from './types';
import { AnyAction } from 'redux';
import { MoviesList } from '../../shared/types';

export const setMoviesListStart = (): AnyAction => {
  return {
    type: MoviesListActionTypes.MOVIES_LIST_START,
  }
};

export const setMoviesListSuccess = (moviesList: MoviesList): AnyAction => {
  return {
    type: MoviesListActionTypes.MOVIES_LIST_SUCCESS,
    payload: moviesList,
  }
};

export const setMoviesListFailed = (): AnyAction => {
  return {
    type: MoviesListActionTypes.MOVIES_LIST_FAILED,
  }
};
