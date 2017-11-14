import { async } from '@angular/core/testing';

import {AppState} from './models';


describe('AppState Object', () => {
  let appState: AppState;

  beforeEach(async(() => {
    appState = new AppState();
  }));

  it('should have a "visitCounts" method', async(() => {
    expect(appState.visitCounts).toBeDefined();
  }));

  it('should have a "copyPageCollection" method', async(() => {
    expect(appState.copyPageCollection).toBeDefined();
  }));

  it('should have a "getPageVisitCount" method', async(() => {
    expect(appState.getPageVisitCount).toBeDefined();
  }));

  it('should have a "getNumberOfPages" method', async(() => {
    expect(appState.getNumberOfPages).toBeDefined();
  }));

  it('should have a "addANewPage" method', async(() => {
    expect(appState.addANewPage).toBeDefined();
  }));

  it('should have a "addANewPage" method to a new page to the list', async(() => {
    appState.addANewPage('test');
    expect(appState.getNumberOfPages()).toBe(1);
    expect(appState.getPageVisitCount('test')).toBe(0);
  }));

  it('should have a "visitCounts" method which returns 0 by default', async(() => {
    const numberOfVisits = appState.visitCounts();
    expect(numberOfVisits).toBe(0);
    expect(typeof numberOfVisits).toBe('number');
  }));

  it('should have a "getNumberOfPages" method which returns 0 by default', async(() => {
    const numberOfPages = appState.getNumberOfPages();
    expect(numberOfPages).toBe(0);
    expect(typeof numberOfPages).toBe('number');
  }));

  it('should have a "getPageVisitCount" method which returns 0 by default', async(() => {
    const numberOfVisits = appState.getPageVisitCount(null);
    expect(numberOfVisits).toBe(0);
    expect(typeof numberOfVisits).toBe('number');
  }));

  it('correctly returns number of pages using method "getNumberOfPages"', async(() => {
    const pageCollection = {test: 1, test2: 2};
    appState.copyPageCollection(pageCollection);
    expect(appState.getNumberOfPages()).toBe(Object.keys(pageCollection).length);
    expect(typeof appState.getNumberOfPages()).toBe('number');
  }));

  it('should have page collection when "copyPageCollection" method is invoked', async(() => {
    const pageCollection = {test: 1, test2: 2};
    appState.copyPageCollection(pageCollection);
    expect(appState.getNumberOfPages()).toBe(Object.keys(pageCollection).length);
    expect(appState.getPageVisitCount('test')).toBe(pageCollection.test);
    expect(typeof appState.getPageVisitCount('test')).toBe('number');
    expect(appState.getPageVisitCount('test2')).toBe(pageCollection.test2);
  }));

  it('correctly returns number of visit count using method "visitCounts"', async(() => {
    const pageCollection = {test: 1, test2: 2};
    appState.copyPageCollection(pageCollection);
    expect(appState.visitCounts()).toBe(3);
    expect(typeof appState.visitCounts()).toBe('number');
  }));

  it('correctly returns number of visit count to a page using method "getPageVisitCount"', async(() => {
    const pageCollection = {test: 1, test2: 2};
    appState.copyPageCollection(pageCollection);
    expect(appState.getPageVisitCount('test')).toBe(pageCollection.test);
    expect(typeof appState.getPageVisitCount('test')).toBe('number');
  }));
});
