import { SortConfigActionTypes } from './types';
import { SortConfigParam } from '../../shared/types';
import { AnyAction } from 'redux';

export const changeSortConfig = (configParam: SortConfigParam): AnyAction => {
  return {
    type: SortConfigActionTypes.SORT_CONFIG_CHANGE,
    payload: configParam,
  }
};
