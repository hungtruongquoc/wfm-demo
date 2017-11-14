import { async } from '@angular/core/testing';
import {RootEpics} from './epics';

describe('Epics Object', () => {
  let epics: RootEpics;

  beforeEach(async(() => {
    epics = new RootEpics();
  }));

  it('should be created', async(() => {
    expect(epics).toBeDefined();
  }));

  it('should have a method "createEpics"', async(() => {
    expect(epics.createEpics).toBeDefined();
  }));

  it('should have a method "createEpics" which returns an empty array as default', async(() => {
    expect(Array.isArray(epics.createEpics())).toBeTruthy();
    expect(epics.createEpics().length).toBe(0);
  }));
});
