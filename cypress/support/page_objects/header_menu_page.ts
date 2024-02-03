class HeaderMenuPage {

    private readonly searchInpt= '.menu_search__block input[name="text"]';
    private readonly searchBtn = '.menu_search__block button[type="submit"]';

    public get searchBox() {
        return cy.get(this.searchInpt);
    };

    public get searchIcon() {
        return cy.get(this.searchBtn);
    };

    public searchForProduct(searchPhrase: string): void {
        this.searchBox.type(searchPhrase);
        this.searchIcon.click();
    }
}

export default HeaderMenuPage;
