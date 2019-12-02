import { MoviesListViewType } from '../../shared/types';
import { SortConfigActionTypes, SortConfigState } from './types';
import { Reducer, AnyAction } from 'redux';

const initialState: SortConfigState = {
  movieGenre: '',
  searchParam: '',
  viewType: MoviesListViewType.tiles,
};

const reducer: Reducer<SortConfigState> = (
  state: SortConfigState = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case SortConfigActionTypes.SORT_CONFIG_CHANGE: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
