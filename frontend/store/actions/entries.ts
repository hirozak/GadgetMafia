import { Action, ActionCreator, Dispatch } from 'redux';

import { EntriesActions, Entry } from '../../types/index';
import { ActionTypes } from './actionTypes';

export const addEntries = (entries: Entry[]): EntriesActions => {
  return {
    type: ActionTypes.ADD_ENTRIES,
    entries
  };
};
