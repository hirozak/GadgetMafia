import { Action } from 'redux';
import { ActionTypes } from '../../store/actions/actionTypes';
import { Entry } from '../index';

export interface AddEntriesAction extends Action {
  type: ActionTypes.ADD_ENTRIES;
  entries: Entry[];
}

export type EntriesActions = AddEntriesAction;

export interface EntriesState {
  isInitialized: boolean;
  entries: Entry[];
  page: number;
  hasMorePosts: boolean;
  isFetshing: boolean;
}
