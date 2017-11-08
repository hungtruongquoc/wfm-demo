import { AppPage } from './app.po';
import {browser, by, element} from 'protractor';
import {LoginPage} from './login.po';
import {TestPage} from './test.po';

describe('Test navigation to all pages', () => {
  let page: AppPage;
  let loginPage: LoginPage;
  let testPage: TestPage;

  beforeEach(() => {

  });

  it('should navigate to home page', () => {
    page = new AppPage();
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Embedded App');
  });

  it('should automatically redirect to "login"', () => {
    page = new AppPage();
    page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('should navigate to "test"', () => {
    testPage = new TestPage();
    testPage.navigateTo();
    expect(browser.getCurrentUrl()).toContain('/test');
  });

  it('should navigate to "login"', () => {
    loginPage = new LoginPage();
    loginPage.navigateTo();
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('should navigate to 404 page', () => {
    browser.get('/the-no-found-page');
    const elementTitle = element(by.css('h3'));
    expect(elementTitle.getText()).toContain('Page cannot be found');
    expect(elementTitle.getAttribute('class')).toContain('text-danger');
  });
});

