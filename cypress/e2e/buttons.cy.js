/// <reference types="cypress" />

describe('Find or get locators',()=>{
beforeEach(() => {
  //runs once before al test cases in this decsrine block,like beforeMethod in 
  //test NG
  cy.clearCookies();
  cy.visit('/multiple_buttons');

})
it('Check different button actions',()=>{
     //selecr button with text
     cy.contains('Button 2').should('be.visible').click();
     cy.contains('Clicked on button two!').should ('be.visible')

     //find with  class attr and create 3rd element from list
     cy.get('.btn.btn-primary').then(($buttons)=>{
        cy.wrap($buttons).eq(2).click();
        //in list Jav,list.get(index)

        //assert text
        cy.contains('Clicked on button three!').should('be.visible');
        //you got all button with tag name ;each method creating me a loop
        cy.get('button').each((item,index,list)=>{
            //assert length of the list ,verify number of buttons
        expect(list).to.have.length(6);
        expect(item).to.have.attr("onclick");

        })
        //I will get all buttons like previous approach,get only the item then check for text of each item,if it is equal to Button 4,then click on it
        cy.get('button').each((item, index, list) => {
          //assert length of the list ,verify number of buttons
          if(item.text() == " Button 4"){
            cy.log(item.text());
            //item.click() you can not use cypress click function on jQuary element

            cy.wrap(item).click();
            cy.contains('Clicked on button two!').should ('be.visible')
          }
        });

     })
     //
});
})