import {endpoints} from "../../test_data/constants";

class LoginPage {

    private readonly usernameInpt = '#user_login';
    private readonly passwordInpt = '#user_pass';
    private readonly loginBtn = '#signin-form_box_sub_1 button[type="submit"]';

    public get username() {
        return cy.get(this.usernameInpt);
    };

    public get password() {
        return cy.get(this.passwordInpt);
    };

    public get submit() {
        return cy.get(this.loginBtn);
    };

    public visit(): LoginPage {
        cy.visit(endpoints.login);
        return this;
    };

    public fillEmail(email: string): LoginPage {
        this.username.clear();
        this.username.type(email);
        return this;
    };
    
    public fillPassword(pass : string): LoginPage {
        this.password.clear();
        this.password.type(pass);
        return this;
    }

    public submitLogIn(): void {
        this.submit.click();
    }
}

export default LoginPage;