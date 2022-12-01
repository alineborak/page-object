class homeSaucePage{

    elements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginBth: () => cy.get('[data-test="login-button"]'),
        errorMsg: () => cy.get('[class="error-message-container error"]')
    }

    typeUsername(username){
        this.elements.usernameInput().type(username);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLogin(){
        this.elements.loginBth().click();
    }
}

module.exports = new homeSaucePage();