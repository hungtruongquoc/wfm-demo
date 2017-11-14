export interface IPageInfo {
  [name: string]: number;
}

export interface IAppState {
  pages: IPageInfo;
  routes?: any;
  feedback?: any;

  visitCounts(): number;

  getPageVisitCount(pageName: string): number;

  copyPageCollection(oldCollection: IPageInfo): void;

  getNumberOfPages(): number;
}

export class AppState implements IAppState {
  pages = {};

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
}

export const INITIAL_STATE: AppState = new AppState();
