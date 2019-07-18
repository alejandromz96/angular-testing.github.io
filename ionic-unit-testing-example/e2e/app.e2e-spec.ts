import * as faker from 'faker';
import { Page } from './app.po';
import { ElementFinder, browser } from 'protractor';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have right title in Page Home', async (done) => {
      let title: string = await page.getElementByCss('.homeTitle').getText();
      let expectedText: string = `Angular Testing Warriors`;
      expect(title.replace(/(\r\n|\n|\r)/gm, " ")).toEqual(expectedText.trim());
      done();
    });

    it('should do right navigation from Page Home to Page Angular using the menu', async (done) => {
      let menuButton: ElementFinder = page.getElementByCss('#menuButton');
      menuButton.click();
      await page.timeout(1000);
      let menuListAngular: ElementFinder = page.getElementByCss('.menuListAngular');
      menuListAngular.click();
      await page.timeout(1500);
      let currentUrl: string = await browser.getCurrentUrl();
      expect(currentUrl).toContain("page-angular.component");
      done();
    });

    it('should do right navigation from Page Home to Page Ionic using the menu', async (done) => {
      let menuButton: ElementFinder = page.getElementByCss('#menuButton');
      menuButton.click();
      await page.timeout(1000);
      let menuListIonic: ElementFinder = page.getElementByCss('.menuListIonic');
      menuListIonic.click();
      await page.timeout(1500);
      let currentUrl: string = await browser.getCurrentUrl();
      expect(currentUrl).toContain("page-ionic.component");
      done();
    });

    it('should do right navigation from Page Home to Page Jasmine using the menu', async (done) => {
      let menuButton: ElementFinder = page.getElementByCss('#menuButton');
      menuButton.click();
      await page.timeout(1000);
      let menuListJasmine: ElementFinder = page.getElementByCss('.menuListJasmine');
      menuListJasmine.click();
      await page.timeout(1500);
      let currentUrl: string = await browser.getCurrentUrl();
      expect(currentUrl).toContain("page-jasmine.component");
      done();
    });

    it('should do right navigation from Page Home to Page Protractor using the menu', async (done) => {
      let menuButton: ElementFinder = page.getElementByCss('#menuButton');
      menuButton.click();
      await page.timeout(1000);
      let menuListProtractor: ElementFinder = page.getElementByCss('.menuListProtractor');
      menuListProtractor.click();
      await page.timeout(1500);
      let currentUrl: string = await browser.getCurrentUrl();
      expect(currentUrl).toContain("page-protractor.component");
      done();
    });

    it('should do right navigation from Page Home to Page Testing using the menu', async (done) => {
      let menuButton: ElementFinder = page.getElementByCss('#menuButton');
      menuButton.click();
      await page.timeout(1000);
      let menuListTesting: ElementFinder = page.getElementByCss('.menuListTesting');
      menuListTesting.click();
      await page.timeout(1500);
      let currentUrl: string = await browser.getCurrentUrl();
      expect(currentUrl).toContain("page-testing.component");
      done();
    });

    it('should create warrior correctly in PageTesting', async (done) => {
      let menuButton: ElementFinder = page.getElementByCss('#menuButton');
      menuButton.click();
      await page.timeout(1000);
      let menuListTesting: ElementFinder = page.getElementByCss('.menuListTesting');
      menuListTesting.click();
      await page.timeout(1500);
      
      let fakeName: string = faker.name.firstName();
      let nameField: ElementFinder = page.getElementByCss('#NameField input');
      nameField.sendKeys(fakeName);

      let classFieldButton: ElementFinder = page.getElementByCss('#ClassField button');
      await classFieldButton.click();
      await page.timeout(1000);
      let classFieldOption: ElementFinder = page.getElementByCss('ion-popover button');
      await classFieldOption.click();
      await page.timeout(1000);

      let weaponFieldButton: ElementFinder = page.getElementByCss('#WeaponField button');
      await weaponFieldButton.click();
      await page.timeout(1000);
      let weaponFieldOption: ElementFinder = page.getElementByCss('ion-popover button');
      await weaponFieldOption.click();
      await page.timeout(1000);
      
      let fakeDescription: string = faker.name.firstName();
      let descriptionField: ElementFinder = page.getElementByCss('#DescriptionField textarea');
      descriptionField.sendKeys(fakeDescription);
      let createWarriorButton: ElementFinder = page.getElementByCss('.testingButton');
      await createWarriorButton.click();
      await page.timeout(1000);
      let warriorComponent: ElementFinder = page.getElementByCss('warrior-component');
      let warriorText: string = await warriorComponent.getText();
      expect(warriorText).toContain(fakeName);  
      expect(warriorText).toContain(fakeDescription);  
      done();
    });

  })
});
