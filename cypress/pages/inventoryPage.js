class inventoryPage {

    elements = { 
        titleSpan: () => cy.get('[class="title"]').should("be.visible"),
        mainLogo: () => cy.get('[class="app_logo"]').should("be.visible")
    }

}

module.exports = new inventoryPage();