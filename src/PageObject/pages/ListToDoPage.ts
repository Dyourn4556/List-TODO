import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { ListToDoPageLocators } from '../locator/ListToDoPageLocator';


export class ListToDoPage extends BasePage{

    async assertHeaderOfToDoListIsVisible(): Promise<void> {
        expect(this.page.locator(ListToDoPageLocators.listToDoPageHeaderXpath)).toBeVisible;
    }

}