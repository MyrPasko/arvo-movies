import { AnyAction } from 'redux';
import { SingleMovie } from '../../shared/types';
import { SingleMovieActionTypes } from './types';

export const setSingleMovie = (singleMovie: SingleMovie): AnyAction => {
  return {
    type: SingleMovieActionTypes.SINGLE_MOVIE_SET,
    payload: singleMovie,
  }
};

export const deleteSingleMovie = (): AnyAction => {
  return {
    type: SingleMovieActionTypes.SINGLE_MOVIE_DELETE,
  }
};
