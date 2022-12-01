class inventoryPage {

    elements = { 
        titleSpan: () => cy.get('[class="title"]').should("be.visible")
    }

}

module.exports = new inventoryPage();