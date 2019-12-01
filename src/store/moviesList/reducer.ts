import { MoviesListState, MoviesListActionTypes } from './types';
import { Reducer, AnyAction } from 'redux';

const initialState: MoviesListState = {
  list: [],
  loading: false,
  error: false,
};

const reducer: Reducer<MoviesListState> = (
  state: MoviesListState = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case MoviesListActionTypes.MOVIES_LIST_START: {
      return { ...state, loading: true };
    }
    case MoviesListActionTypes.MOVIES_LIST_SUCCESS: {
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: false,
      }
    }
    case MoviesListActionTypes.MOVIES_LIST_FAILED: {
      return { ...state, loading: false, error: true }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
