export class SignupPageLocators {

    static readonly headerOfPage: string ="//h2[@data-testid='header']";
    
    static readonly firstNameField: string = "//input[@aria-invalid='false'] [@data-testid='first-name']";
    static readonly lastNameField: string = "//input[@aria-invalid='false'] [@data-testid='last-name']";
    static readonly emailField: string = "//input[@aria-invalid='false'] [@data-testid='email']";
    static readonly passwordField: string = "//input[@aria-invalid='false'] [@data-testid='password']";
    static readonly confirmPasswordField: string = "//input[@aria-invalid='false'] [@data-testid='confirm-password']";

    static readonly signupButton: string = "//span[@class='MuiButton-label']";

    static readonly doYouHaveAnAccountLink: string ="//h2[@data-testid='go-login']";

}