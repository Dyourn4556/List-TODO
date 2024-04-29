import test from "@playwright/test";
import { HomePage } from "../src/PageObject/HomePage";
import { SignupPage } from "../src/PageObject/SignUpPage"; 
import { Provider } from "../src/AddedInfo/Provider";
import { getFakeEmail, getFakeFirstName, getFakeLastName, getFakePassword } from "../src/DataGenerator/FakeUserData";
import { ListToDoPage } from "../src/PageObject/ListToDoPage";


test.describe('Positive Login', () => {
    let homePage: HomePage;
    let signupPage: SignupPage;
    let provider: Provider;
    let listToDoPage: ListToDoPage;

   
    test.beforeEach(async ({ page })=>{
      
        homePage = new HomePage(page);  
        signupPage = new SignupPage(page);
        provider = new Provider(page);
        listToDoPage = new ListToDoPage(page);

    })

    test('Registration', async ({ page }) => {

        await provider.goToResourсe();
        await homePage.assertingOfSiteIconIsVisible();
        
        await homePage.goToSignPage();
        await signupPage.assertingOfHeaderIsVisible();

        await signupPage.fillFakeFirstName(getFakeFirstName());
        await signupPage.fillFakeLastName(getFakeLastName());
        await signupPage.fillFakeEmail(getFakeEmail());
        await signupPage.fillFakePassword(getFakePassword());
        await signupPage.confirmFakePassword(getFakePassword());

        await signupPage.pressSignupButton();

        await listToDoPage.assertingHeaderOfToDoListIsVisible();
      
      });

})
