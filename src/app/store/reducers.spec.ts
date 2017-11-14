import { async } from '@angular/core/testing';

import {rootReducer} from './reducers';
import {INITIAL_STATE} from './models';
import {VISITED} from '../shared/actions';

describe('AppState Object', () => {
  it('should return initial state when no action is provided', async(() => {
    const result = rootReducer(INITIAL_STATE, null);
    expect(result.pages).toBeDefined();
    expect(Object.keys(result.pages).length).toBe(0);
  }));

  it('should return null if initial state is null', async(() => {
    const result = rootReducer(null, null);
    expect(result).toBeNull();
  }));

  it('should change the initial state if a valid state and action are provided', async(() => {
    const result = rootReducer(INITIAL_STATE, {type: VISITED, payload: 'test'});
    expect(result).toBeDefined();
    expect(result.getNumberOfPages()).toBe(1);
    expect(result.getPageVisitCount('test')).toBe(1);
    expect(result.visitCounts()).toBe(1);
  }));
});
