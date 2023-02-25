export class DashboardPage{
    link_sauceLabsBackpack  = 'Sauce Labs Backpack'
    link_addToCart          = '#add-to-cart-sauce-labs-backpack'
    link_shoppingcart       = '#shopping_cart_container > a' 
    link_clickcheckout      = '#checkout'
    link_firstname          = '#checkout_info_container > div > form > div.checkout_info > div:nth-child(1)'
    link_lastname           = '#checkout_info_container > div > form > div.checkout_info > div:nth-child(2)'
    link_zipcode            = '#checkout_info_container > div > form > div.checkout_info > div:nth-child(3)'
    link_clickcontinue      = '#continue'
    link_clickfinish        = '#finish'
    link_clickcontinuegagal = '#continue'
    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
    addToCart (){
        cy.get(this.link_addToCart).click()
    }
    shoppingcart (){
        cy.get(this.link_shoppingcart).click()
    }
    clickcheckout (){
        cy.get(this.link_clickcheckout).click()
    }
    inputFirstName(){
        cy.get(this.link_firstname).type('Ghala')
    }
    inputLastName(){
        cy.get(this.link_lastname).type('Sudana')
    }
    inputZipCode(){
        cy.get(this.link_zipcode).type('123456')
    }
    clickContinue(){
        cy.get(this.link_clickcontinue).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
    clickfnish(){
        cy.get(this.link_clickfinish).click()
        cy.contains('Checkout: Complete!').should('be.visible') 
    }
    clickcontinuegagal(){
        cy.get(this.link_clickcontinuegagal).click()
        cy.contains('Error: First Name is required').should('be.visible')
    }
}