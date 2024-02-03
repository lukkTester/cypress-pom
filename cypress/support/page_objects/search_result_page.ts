class SearchResultPage {

    private readonly searchSection = 'section#search';
    private readonly searchProductsContainers = '.product';
    
    public get searchContent() {
        return cy.get(this.searchSection);
    }

    public get searchProducts() {
        return this.searchContent.find(this.searchProductsContainers);
    }
}

export default SearchResultPage;