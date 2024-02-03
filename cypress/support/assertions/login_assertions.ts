import WelcomePage from "../page_objects/welcome_page";
import HomePage from "../page_objects/home_page";
import HeaderMenuPage from "../page_objects/header_menu_page";

export const verifyWelcomeUserIsDisplayed = (name: string, surname: string) => {
    const welcomePage = new WelcomePage();
    
    welcomePage.welcomeContainer.should('be.visible')
        .should('contain.text', name)
        .should('contain.text', surname);
}

export const verifyHeaderMenuIsDisplayed = () => {
    const headerMenu = new HeaderMenuPage();
    
    headerMenu.searchBox.should('be.visible');
    headerMenu.searchIcon.should('be.visible');
}

export const verifyHomePageIsDisplayed = () => {
    const homePage = new HomePage();
    
    homePage.banner.should('be.visible');
    homePage.productsContainer.should('be.visible');
    homePage.newProductsContainer.should('be.visible');
}