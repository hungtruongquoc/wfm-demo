export interface IPageInfo {
  [name: string]: number;
}

export interface IAppState {
  pages: IPageInfo;
  routes?: any;
  feedback?: any;
}

export const INITIAL_STATE: IAppState = {
  pages: {}
};
