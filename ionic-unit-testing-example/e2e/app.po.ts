import { browser, by, element, ElementFinder } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getElementByCss(css: string): ElementFinder {
    return element(by.css(css));
  }

  timeout(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
}
