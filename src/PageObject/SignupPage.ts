import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { SignupPageLocators } from './Locator/SignupPageLocator';


export class SignupPage extends BasePage{

    async assertingOfHeaderIsVisible(): Promise<void> {
        expect(this.page.locator(SignupPageLocators.headerOfPage)).toBeVisible;
    }

    async fillFakeFirstName(firstName: string): Promise<void> {
        await this.page.locator(SignupPageLocators.firstNameField).fill(firstName);
    }

    async fillFakeLastName(lastName: string): Promise<void> {
        await this.page.locator(SignupPageLocators.lastNameField).fill(lastName);
    }

    async fillFakeEmail(email: string): Promise<void> {
        await this.page.locator(SignupPageLocators.emailField).fill(email);
    }

    async fillFakePassword(password: string): Promise<void> {
        await this.page.locator(SignupPageLocators.passwordField).fill(password);
    }

    async confirmFakePassword(confirmPassword: string): Promise<void> {
        await this.page.locator(SignupPageLocators.confirmPasswordField).fill(confirmPassword);
    }

    async pressSignupButton(): Promise<void> {
        await this.page.locator(SignupPageLocators.signupButton).click();
    }
}