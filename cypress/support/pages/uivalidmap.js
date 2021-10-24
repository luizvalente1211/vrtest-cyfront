

const el = require('./elements').ELEMENTOS;

class vrSite{
    acessarsite(){
        cy.visit(`${Cypress.env("vrUi")}`)
        return cy.get(el.banner)
    }

    btnfluxomap(){
        cy.get(el.btn_pravc).click()
        cy.get(el.btn_ondeusar).click()
        cy.url().should('contain','/onde-aceita.htm')
        cy.wait(5000)
        //confirma que o mapa apareceu em tela
        return cy.get(el.map)
        
        
        
    }


}
export default new vrSite();
