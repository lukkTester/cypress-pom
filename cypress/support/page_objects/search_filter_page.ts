class SearchFilterPage {

    private readonly priceMaxInpt = '#filter_price_range_to';
    private readonly filterBtn = '#Filters .f-group button[type="submit"]';

    public get priceMax() {
        return cy.get(this.priceMaxInpt);
    }

    public get filter() {
        return cy.get(this.filterBtn);
    }

    public filterMaxPrice(maxPrice: string): SearchFilterPage {
        this.priceMax.clear().type(maxPrice);
        return this;
    }

    public applyFilter(): void {
        this.filter.click();
    }
}

export default SearchFilterPage;