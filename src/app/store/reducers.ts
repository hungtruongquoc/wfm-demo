// import {Action, combineReducers} from 'redux';
import {AppState, INITIAL_STATE} from './models';
import {GLOBAL_LOADING_COMPLETED, VISITED} from '../shared/actions';
import {AppActions, StoreActions} from './app.action';
import {isNullOrUndefined} from 'util';

// import { composeReducers, defaultFormReducer } from '@angular-redux/form';
// import { routerReducer } from '@angular-redux/router';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export function rootReducer(state: AppState = INITIAL_STATE, action: any) {
  if (!isNullOrUndefined(action) && !isNullOrUndefined(state)) {
    const appAction = new AppActions(state, action);
    const storeAction = new StoreActions(state);

    switch (action.type) {
      case VISITED: return appAction.markVisit();
      case GLOBAL_LOADING_COMPLETED: return appAction.markLoadingGlobalCompleted();
      case StoreActions.LOAD_TIMEOFF_BIDDING_SUCCESS: return storeAction.loadTimeOffBiddingSuccess(action.payload);
    }
  }
  return state;
}
// composeReducers(
// defaultFormReducer(),
// combineReducers({
//   router: routerReducer
// })
// );
