/// <reference types="cypress" />

describe('Find or get locators',()=>{
beforeEach(() => {
  //runs once before al test cases in this decsrine block,like beforeMethod in 
  //test NG
  cy.clearCookies();
  cy.visit('/login');

})
it('Check different locators strategiest',()=>{
    cy.get("input[name='username']").type("Cydeo Student");//every statement creates an object to be interactived, and next command makes operation to the object at the prevoious statement
    //attribute name and value 
   cy.get('[type="text"]').clear();//clear what is typed
   //tag name
cy.get('input').each((item, index ,list)=>{
  //assert lengtt of the list 2
  expect(list).to.have.length(2);
  expect(item).to.have.attr("type");
});

//by attribute
cy.get('[type]');

//class name
cy.get('.btn.btn-primary');

//id name
cy.get('#wooden_spoon')

//if I want to use text: no xpath in cypress,but it still possible with a different approach

cy.get('button').should('contain','Login').click();


})
it('Check finding elements by traveling through DOM',()=>{
  //travel to find login button:locate username box go to parent  from then find button

cy.get('input[name="username"]').parents('form') .find('button').should('contain','Login').click();

})
it("Check diffrent type of assertions", () => {
  
//cypress itself bundles assertions provided Chai,Sinon and JQuery library

  //Should assertion: does assertion directly on the object itself
  cy.get('#wooden_spoon')
  .should('contain','Login').and('have.class','btn btn-primary');
  cy.get("#wooden_spoon").then((buttonElement)=>{
    expect(buttonElement).to.have.text('Login');
    expect(buttonElement).to.have.class('btn btn-primary');


  });

    
});

})