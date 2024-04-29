import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { HomePageLocators } from './Locator/HomePageLocator';


export class HomePage extends BasePage{

    async goToHomePage(): Promise<void> {
        await this.page.locator(HomePageLocators.linkToHomePage).click();
    }

    async assertingOfSiteIconIsVisible(): Promise<void> {
        expect(this.page.locator(HomePageLocators.imageOfSite)).toBeVisible;
    }

    async goToLoginPage(): Promise<void> {
        await this.page.locator(HomePageLocators.linkToLoginPage).click();
    }

    async goToSignPage(): Promise<void> {
        await this.page.locator(HomePageLocators.linkToSignUpPage).click();
    }

}