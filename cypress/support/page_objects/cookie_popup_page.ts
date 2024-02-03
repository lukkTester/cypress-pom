class CookiePopupPage {

    private readonly acceptAllBtn = '.acceptAll';

    public acceptAll() {
        return cy.get(this.acceptAllBtn).click();
    };
}

export default CookiePopupPage