import { SingleMovieActionTypes, SingleMovieState } from './types';
import { Reducer, AnyAction } from 'redux';

const initialState: SingleMovieState = {
  singleMovie: undefined,
};

const reducer: Reducer<SingleMovieState> = (
  state: SingleMovieState = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case SingleMovieActionTypes.SINGLE_MOVIE_SET: {
      return { ...state, singleMovie: action.payload }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
