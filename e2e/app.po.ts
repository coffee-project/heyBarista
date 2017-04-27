import { browser, element, by } from 'protractor';

export class HeyBaristaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hey-barista-root h1')).getText();
  }
}
