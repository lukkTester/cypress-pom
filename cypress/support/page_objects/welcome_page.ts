class WelcomePage {

    private readonly welcomeDiv = '#login_welcome';

    public get welcomeContainer() {
        return cy.get(this.welcomeDiv);
    }
}

export default WelcomePage;