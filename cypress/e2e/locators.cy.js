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
cy.get('input').each((item, index ,list)=>{
  //assert lengtt of the list 2
  expect(list).to.have.length(2);
  expect(item).to.have.attr("type");
});


})

})