import {Action, combineReducers} from 'redux';
import {IAppState, INITIAL_STATE} from './models';
import {VISITED} from '../shared/actions';
import {AppActions} from './app.action';

// import { composeReducers, defaultFormReducer } from '@angular-redux/form';
// import { routerReducer } from '@angular-redux/router';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export function rootReducer(state: IAppState = INITIAL_STATE, action: any) {
  const appAction = new AppActions(state, action);
  switch (action.type) {
    case VISITED: return appAction.markVisit();
  }
  return state;
}
// composeReducers(
// defaultFormReducer(),
// combineReducers({
//   router: routerReducer
// })
// );
