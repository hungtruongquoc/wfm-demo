import { async } from '@angular/core/testing';
import {AppActions} from './app.action';
import {AppState} from './models';
import {VISITED} from '../shared/actions';

describe('App Actions', () => {
  let appActionList: AppActions;

  it('should have a "markVisit" method', async(() => {
    appActionList = new AppActions(new AppState(), {});
    expect(appActionList.markVisit).toBeDefined();
  }));

  it('should increase the count of the "test" page when the "markVisit" method is called', async(() => {
    appActionList = new AppActions(new AppState(), {type: VISITED, payload: 'test'});
    const newState = appActionList.markVisit();
    expect(newState.getPageVisitCount('test')).toBe(1);
  }));

  it('should increase the count of the same "test" page when the "markVisit" method is called', async(() => {
    const oldState = new AppState();
    oldState.addANewPage('test');
    appActionList = new AppActions(oldState, {type: VISITED, payload: 'test'});
    const newState = appActionList.markVisit();
    expect(newState.getPageVisitCount('test')).toBe(1);
  }));
});
