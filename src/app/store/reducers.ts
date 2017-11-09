import {Action, combineReducers} from 'redux';
import {IAppState, INITIAL_STATE} from './models';

// import { composeReducers, defaultFormReducer } from '@angular-redux/form';
// import { routerReducer } from '@angular-redux/router';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = combineReducers<IAppState>({
  app: (state: IAppState = INITIAL_STATE, action: Action) => {
    switch (action.type) {
      case 'visited':
        return {
          ...state
        };
    }
    return state;
  }
});
  // composeReducers(
  // defaultFormReducer(),
  // combineReducers({
  //   router: routerReducer
  // })
// );
