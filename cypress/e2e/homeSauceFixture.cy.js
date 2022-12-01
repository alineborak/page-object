import homeSaucePage from "../pages/homeSaucePage";
import inventoryPage from "../pages/inventoryPage";

const tests = require('../fixtures/data-driven/sauceUsers.json')

describe('Home sauce fixture Demo', () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
    })

    tests.forEach(test => {
        it(test.name, () => {
            homeSaucePage.typeUsername(test.username)
            homeSaucePage.typePassword(test.password)
            homeSaucePage.clickLogin();

            if(test.name === "should login to inventory page"){
                inventoryPage.elements.titleSpan().should("have.text", test.expected)
        
            }else{
                homeSaucePage.elements.errorMsg().should("have.text", test.expected)
            }
        })
    })
});

