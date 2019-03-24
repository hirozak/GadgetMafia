import store from '../store/configureStore';
import { EntriesActions } from './store/entries';

export { Entry, Feed } from './model';
export { EntriesActions, EntriesState } from './store/entries';

export type RootActions = EntriesActions;
export type RootState = ReturnType<typeof store.getState>;
