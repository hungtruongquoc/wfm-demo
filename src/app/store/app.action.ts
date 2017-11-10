import {IAppState} from './models';

export class AppActions {
  constructor(private state: IAppState, private action: any) {

  }
  markVisit() {
    const newState = {
      ...this.state
    };
    if (newState.pages.hasOwnProperty(this.action.payload)) {
      newState.pages[this.action.payload]++;
    }
    else {
      newState.pages[this.action.payload] = 1;
    }
    return newState;
  }
}
