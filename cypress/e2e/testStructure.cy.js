/// <reference types="cypress" />



describe('context:my fort test',()=>{
before(() => {
    //runs once before al test cases in this decsrine block,like beforeClass in 
    //test NG    
})
beforeEach(() => {
  //runs once before al test cases in this decsrine block,like beforeMethod in 
  //test NG
  cy.clearCookies();

});
after(() => {
  //runs once before al test cases in this decsrine block,like afterClass in
  //test NG
})
afterEach(() => {
  //runs once before al test cases in this decsrine block,like afterMethod in
  //test NG
});

it('Opening web aplication',()=>{
  cy.visit("/registration_form");


})

})