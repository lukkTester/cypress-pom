import SearchResultPage from "../page_objects/search_result_page";

export const verifyProductsListIsNotEmpty = () => {
    const searchResults = new SearchResultPage();
    searchResults.searchProducts.should('not.be.empty');
}

export const verifyFilteredProductsAmount = (productsCount: number) => {
    const searchResults = new SearchResultPage();
    searchResults.searchProducts.should('have.length', productsCount);
}