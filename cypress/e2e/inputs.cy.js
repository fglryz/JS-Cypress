/// <reference types="cypress" />

describe('Input.Form.Tests', () => {
  beforeEach('navigate to refistration page', () => {
    // runs once before al test cases in this decsrine block,like beforeMethod in
    // test NG
    cy.clearCookies();
    cy.visit('/registration_form');
  });
  it('Check different input in different  box fields and verify', () => {

    cy.get("input[name='firstname']").type("Mark");
    cy.get("input[name='lastname']").type('Brown');
    cy.get("input[name='username']").type('CrayzHeart');
    /**
     * Math.random():create a number betwee 0~1~0.005678
     * Math.floor:makes it whole number
     * 
     */
    let email=`formTest${Math.random()*900000}@cydeo.com`;
    cy.get("input[name='email']").type(email);

    let password = `test${Math.random() * 900000}@cydeo.com`;
     cy.get("input[name='password']").type(password);

     let phoneNumber = `555-000-${Math.random() * 900000}`;//4 digit extention
     cy.get("input[name='phone']").type(phoneNumber);
     cy.get("input[name='birthday']").type('01/01/1999');



 });
 
it.only('Check different radio buttons ', () => {
 cy.get('.radio').find('[type=radio]').then(radio=>{
    cy.wrap(radio).first().check().should('be.checked');
    cy.wrap(radio).eq(1).check().should('be.checked');

    cy.get('[data-bv-icon-for="gender"]').should('be.visible');

 cy.wrap(radio).eq(2).should('not.be.checked');

 });
});

});
