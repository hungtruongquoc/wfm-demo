import { browser, by, element } from 'protractor';

export class TestPage {
  navigateTo() {
    return browser.get('/test');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
