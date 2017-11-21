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

  it('should have a "isUserAuthenticated" method', async(() => {
    expect(appState.isUserAuthenticated).toBeDefined();
  }));

  it('should have a "setUserAuthenitcated" method', async(() => {
    expect(appState.setUserAuthenticated).toBeDefined();
  }));

  it('should have a "isUserAuthenticated" method which returns FALSE by default', async(() => {
    expect(appState.isUserAuthenticated()).toBeFalsy();
  }));

  it('should have a "routeGuardEnabled" property', async(() => {
    expect(appState.routeGuardEnabled).toBeDefined();
  }));

  it('should have a "routeGuardEnabled" property which returns FALSE by default', async(() => {
    expect(appState.routeGuardEnabled).toBeFalsy();
  }));

  it('should have a "isLoading" property', async(() => {
    expect(appState.isLoading).toBeDefined();
  }));

  it('should have a "isLoading" property which to be TRUE by default', async(() => {
      expect(appState.isLoading).toBeTruthy();
  }));

  it('should have a "setGuardEnabled" method', async(() => {
    expect(appState.setGuardEnabled).toBeDefined();
  }));

  it('should have a "setGuardEnabled" method which sets the status to FALSE by default', async(() => {
    appState.setGuardEnabled();
    expect(appState.routeGuardEnabled).toBeFalsy();
  }));

  it('should have a "setGuardEnabled" method which updates the status', async(() => {
    appState.setGuardEnabled(true);
    expect(appState.routeGuardEnabled).toBeTruthy();
  }));

  it('should have a "setUserAuthenticated" method which alters the authentication status to FALSE when no value provided', async(() => {
    appState.setUserAuthenticated(true);
    appState.setUserAuthenticated();
    expect(appState.isUserAuthenticated()).toBeFalsy();
  }));

  it('should have a "setUserAuthenticated" method which can alter the value of authentication status', async(() => {
    expect(appState.isUserAuthenticated()).toBeFalsy();
    appState.setUserAuthenticated(true);
    expect(appState.isUserAuthenticated()).toBeTruthy();
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
