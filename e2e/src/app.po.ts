import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getgetTitleText() {
    return element(by.css('ion-title')).getText();
  }
}
