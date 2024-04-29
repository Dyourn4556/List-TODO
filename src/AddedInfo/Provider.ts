import { BasePage } from '../PageObject/BasePage.ts';
import { BaseUrl } from './BaseUrl.ts';

export class Provider extends BasePage{

    async goToResourсe(): Promise<void> {
        await this.page.goto(BaseUrl.QACartUrl);
    }

}