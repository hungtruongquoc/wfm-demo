import { AppPage } from './app.po';
import {browser} from 'protractor';

describe('wfm-demo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Embedded App');
  });

  it('should automatically redirect to "login"', () => {
    page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('/login');
  });
});
