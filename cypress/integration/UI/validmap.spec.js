/// <reference types="cypress" />
import vrSite from '../../support/pages/uivalidmap'

describe('Acessar site VR', ()=>{

    beforeEach(()=>{
        //acessando o site vr e validando se o banner de inicio está visivel
        //caso contrário retornará erro
        vrSite.acessarsite().should('be.visible')
        

    })

    it('CN01 - Validar que o mapa do google abriu na tela', ()=>{
        vrSite.btnfluxomap().should('be.visible')
        

    })





})