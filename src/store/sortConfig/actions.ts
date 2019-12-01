import { SortConfigActionTypes } from './types';
import { SortConfigParam } from '../../shared/types';
import { AnyAction } from 'redux';

// TODO Remove this if necessary
// export const getSortConfig = () => {
//   return {
//     type: SortConfigActionTypes.SORT_CONFIG_GET,
//   }
// };

export const changeSortConfig = (configParam: SortConfigParam): AnyAction => {
  return {
    type: SortConfigActionTypes.SORT_CONFIG_CHANGE,
    payload: configParam,
  }
}
