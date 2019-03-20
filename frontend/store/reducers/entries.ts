import { ActionTypes } from '../actions/actionTypes';

import { EntriesActions, EntriesState } from '../../types/index';

const initialState: EntriesState = {
  isInitialized: false,
  entries: [],
  page: 1,
  hasMorePosts: true,
  isFetshing: false
};

const reducer = (
  state: EntriesState = initialState,
  action: EntriesActions
) => {
  switch (action.type) {
    case ActionTypes.ADD_ENTRIES:
      console.log('will add entries');
      return {
        ...state,
        isInitialized: true,
        entries: [...state.entries, ...action.entries],
        page: state.page + 1,
        isFetshing: false
      };
    default:
      return state;
  }
};

export default reducer;
