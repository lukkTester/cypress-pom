import LoginPage from "../support/page_objects/login_page";
import RegistrationPage from "../support/page_objects/registration_page";
import CookiePopupPage from "../support/page_objects/cookie_popup_page";
import { verifyWelcomeUserIsDisplayed, verifyHeaderMenuIsDisplayed } from "../support/assertions/login_assertions"
import { verifyProductsListIsNotEmpty, verifyFilteredProductsAmount } from "../support/assertions/search_assertions"
import { createRandomUsername } from "../support/helpers/helpers";
import { user } from "../test_data/constants";
import SearchFilterPage from "../support/page_objects/search_filter_page";
import HeaderMenuPage from "../support/page_objects/header_menu_page";

describe('Smoke tests suite', () => {

  let email: string;

  before(() => {
    email = createRandomUsername();
  })

  it('Should sign up', () => {
    const registrationPage = new RegistrationPage();
    const popup = new CookiePopupPage();

    registrationPage.visit();
    popup.acceptAll();

    registrationPage.fillOutRegistrationForm(user.name, user.surname, user.street, user.houseNo, user.zipCode,
       user.city, user.phone, email, email, user.password)
                    .agreeTerms()
                    .submitRegistration();

     verifyWelcomeUserIsDisplayed(user.name, user.surname);
     verifyHeaderMenuIsDisplayed();
  });

  it('Should log in to the application', () => {
    
    logIn()

    verifyWelcomeUserIsDisplayed(user.name, user.surname);     
    verifyHeaderMenuIsDisplayed();   
  });

  it('Should search for "electronics" and apply max price filter', () => {
    const headerMenu = new HeaderMenuPage();
    const searchFilterPage = new SearchFilterPage();

    logIn()

    headerMenu.searchForProduct("electronics");

    verifyProductsListIsNotEmpty();

    searchFilterPage.filterMaxPrice("20")
                    .applyFilter();
    
    verifyFilteredProductsAmount(3)
  });

  const logIn = () => {
    const loginPage = new LoginPage();
    const popup = new CookiePopupPage();

    loginPage.visit();
    popup.acceptAll();
    loginPage.fillEmail(email)
             .fillPassword(user.password)
             .submitLogIn();

  }

});