class HomePage {

    private readonly bannerDiv = "#main_banner1";
    private readonly productsDiv = "#main_hotspot_zone1";
    private readonly newProductsDiv = "#main_hotspot_zone2";

    public get banner() {
        return cy.get(this.bannerDiv);
    };

    public get productsContainer() {
        return cy.get(this.productsDiv);
    };

    public get newProductsContainer() {
        return cy.get(this.newProductsDiv);
    };
}

export default HomePage