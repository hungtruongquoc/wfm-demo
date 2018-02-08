import {Observable} from "rxjs/Observable";

export {ManagementUnitModel} from './management-unit';
export {ManagementUnit} from './management-unit';

export interface IPageInfo {
  [name: string]: number;
}

export interface IAppState {
  pages: IPageInfo;
  timeOffBiddingList: any[];
  routes?: any;
  feedback?: any;
  isAuthenticated: boolean;
  routeGuardEnabled: boolean;
  isLoading: boolean;
  agents: Array<any>;
  visitCounts(): number;
  getPageVisitCount(pageName: string): number;
  copyPageCollection(oldCollection: IPageInfo): void;
  getNumberOfPages(): number;
}

export class AppState implements IAppState {
  pages = {};
  isAuthenticated = false;
  _routeGuardEnabled = false;
  _isLoading = true;
  agents = [];
  timeOffBiddingList = [];

  get routeGuardEnabled() {
    return this._routeGuardEnabled;
  }

  get isLoading() {
    return this._isLoading;
  }

  set isLoading(value: boolean) {
    this._isLoading = value;
  }

  setGuardEnabled(status: boolean = false) {
    this._routeGuardEnabled = status;
  }

  copyPageCollection(oldCollection: IPageInfo) {
    this.pages = JSON.parse(JSON.stringify(oldCollection));
  }

  visitCounts() {
    if (Object.keys(this.pages).length > 0) {
      const keys = Object.keys(this.pages);
      return keys.reduce((count, key) => {
        count += this.pages[key];
        return count;
      }, 0);
    }
    return 0;
  }

  getPageVisitCount(pageName: string) {
    if (this.pages.hasOwnProperty(pageName)) {
      return this.pages[pageName];
    }
    return 0;
  }

  getNumberOfPages() {
    return Object.keys(this.pages).length;
  }

  addANewPage(pageName: string) {
    this.pages[pageName] = 0;
  }

  isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  setUserAuthenticated(value: boolean = false) {
    this.isAuthenticated = value;
  }
}

export const INITIAL_STATE: AppState = new AppState();
