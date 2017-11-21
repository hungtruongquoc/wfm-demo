import {AppState, IAppState} from './models';

export class AppActions {
  constructor(private state: IAppState, private action: any) {

  }

  private createNewAppState(): AppState {
    const newState = new AppState();
    newState.copyPageCollection(this.state.pages);
    newState.setGuardEnabled(this.state.routeGuardEnabled);
    newState.isLoading = this.state.isLoading;
    newState.setUserAuthenticated(this.state.isAuthenticated);
    return newState;
  }

  markVisit() {
    const newState = this.createNewAppState();

    if (newState.pages.hasOwnProperty(this.action.payload)) {
      newState.pages[this.action.payload]++;
    }
    else {
      newState.pages[this.action.payload] = 1;
    }

    return newState;
  }

  markLoadingGlobalCompleted() {
    const newState = this.createNewAppState();
    newState.isLoading = false;
    return newState;
  }
}
