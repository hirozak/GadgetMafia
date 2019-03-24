import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { EntriesActions, Entry } from '../../types/index';
import { ActionTypes } from './actionTypes';

export const addEntries = (entries: Entry[]): EntriesActions => {
  return {
    type: ActionTypes.ADD_ENTRIES,
    entries
  };
};

export const fetchEntries = (): ThunkAction<
  void,
  undefined,
  undefined,
  EntriesActions
> => {
  return (dispatch: Dispatch<EntriesActions>) => {
    dispatch(addEntries([{ id: 1 }]));
  };
};
