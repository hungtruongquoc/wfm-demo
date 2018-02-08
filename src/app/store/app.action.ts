import {AppState} from './models';
import {Injectable} from '@angular/core';
import {dispatch} from "@angular-redux/store";
import {FluxStandardAction} from "flux-standard-action";


export abstract class CustomActions {

  constructor(protected state: AppState) { }

  protected createNewAppState(): AppState {
    const newState = new AppState();
    newState.copyPageCollection(this.state.pages);
    newState.setGuardEnabled(this.state.routeGuardEnabled);
    newState.isLoading = this.state.isLoading;
    newState.setUserAuthenticated(this.state.isAuthenticated);
    return newState;
  }
}

@Injectable()
export class AppActions extends CustomActions {

  constructor(state: AppState, private action: any) {
    super(state);
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

export interface StoreAction {};

@Injectable()
export class StoreActions extends CustomActions {
  static readonly LOAD_TIMEOFF_BIDDING = 'LOAD_TIMEOFF_BIDDING';
  static readonly LOAD_TIMEOFF_BIDDING_SUCCESS = 'LOAD_TIMEOFF_BIDDING_SUCCESS';

  constructor(appState: AppState) {
    super(appState);
  }

  @dispatch()
  loadTimeOffBiddingList(): StoreAction {
    return { type: StoreActions.LOAD_TIMEOFF_BIDDING, payload: null, meta: null};
  }

  loadTimeOffBiddingSuccess(payload: Array<any>) {
    const newState = this.createNewAppState();
    debugger;
    newState.timeOffBiddingList = payload;
    return newState;
  }

  loadTimeOffBiddingFailed(error) {
    debugger;
    const newState = this.createNewAppState();
    newState.timeOffBiddingList = [];
    return newState;
  }
}
