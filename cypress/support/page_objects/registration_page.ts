import {endpoints} from "../../test_data/constants";

class RegistrationPage {
    
    private readonly nameInpt = '#client_firstname';
    private readonly surnameInpt = '#client_lastname';
    private readonly streetInpt = '#client_street';
    private readonly houseNoInpt = '#client_street_number';
    private readonly zipCodeInpt = "#client_zipcode";
    private readonly cityInpt = '#client_city';
    private readonly phoneInpt = '#client_phone';
    private readonly emailInpt = '#client_email';
    private readonly loginInpt = '#client_login';
    private readonly passwordInpt = '#client_password';
    private readonly termsCheckbox = '#terms_agree';
    private readonly registerBtn = '#submit_clientnew_form';

    public get name() {
        return cy.get(this.nameInpt);
    };

    public get surname() {
        return cy.get(this.surnameInpt);
    };

    public get street() {
        return cy.get(this.streetInpt);
    };

    public get houseNo() {
        return cy.get(this.houseNoInpt);
    };

    public get zipCode() {
        return cy.get(this.zipCodeInpt);
    };

    public get city() {
        return cy.get(this.cityInpt);
    };

    public get phone() {
        return cy.get(this.phoneInpt);
    };

    public get email() {
        return cy.get(this.emailInpt);
    };

    public get login() {
        return cy.get(this.loginInpt);
    };

    public get password() {
        return cy.get(this.passwordInpt);
    };

    public get termAgreeCheckbox() {
        return cy.get(this.termsCheckbox);
    };

    public get submit() {
        return cy.get(this.registerBtn);
    };

    public visit(): RegistrationPage {
        cy.visit(endpoints.registration);
        return this;
    };

    public fillOutRegistrationForm(name: string, surname: string, street: string, houseNo: string, zipCode: string, 
        city: string, phone: string, email: string, login: string, password: string): RegistrationPage {

        this.name.clear().type(name);
        this.surname.clear().type(surname);
        this.street.clear().type(street);
        this.houseNo.clear().type(houseNo, { delay: 500 });
        this.zipCode.clear().type(zipCode);
        this.city.clear().type(city);
        this.phone.clear().type(phone);
        this.email.clear().type(email);
        this.login.clear().type(login);
        this.password.clear().type(password);

        return this;
    }

    public agreeTerms(): RegistrationPage {
        this.termAgreeCheckbox.click();
        return this;
    }

    public submitRegistration(): void {
        this.submit.click();
    }
}

export default RegistrationPage;