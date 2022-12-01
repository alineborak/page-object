import homeSaucePage from "../pages/homeSaucePage";
import inventoryPage from "../pages/inventoryPage";

describe('POM implementation', () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
    })

    it('Should login to inventory page', () => {
        homeSaucePage.typeUsername('standard_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickLogin();
        inventoryPage.elements.titleSpan().should("have.text", "Products");
        inventoryPage.elements.mainLogo();
    })
    it('Should display error msg', () => {
        homeSaucePage.typeUsername('locked_out_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickLogin();
        homeSaucePage.elements.errorMsg().should("be.visible");
    })

});