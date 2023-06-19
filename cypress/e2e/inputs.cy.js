/// <reference types="cypress" />

describe('Input.Form.Tests', () => {
  beforeEach('navigate to refistration page', () => {
    // runs once before al test cases in this decsrine block,like beforeMethod in
    // test NG
    cy.clearCookies();
    cy.visit('/registration_form');
  });
  it.skip('Check different input in different  box fields and verify', () => {
    cy.get("input[name='firstname']").type('Mark');
    cy.get("input[name='lastname']").type('Brown');
    cy.get("input[name='username']").type('CrayzHeart');
    /**
     * Math.random():create a number betwee 0~1~0.005678
     * Math.floor:makes it whole number
     *
     */
    const email = `formTest${Math.random() * 900000}@cydeo.com`;
    cy.get("input[name='email']").type(email);

    const password = `test${Math.random() * 900000}@cydeo.com`;
    cy.get("input[name='password']").type(password);

    const phoneNumber = `555-000-${Math.random() * 900000}`; // 4 digit extention
    cy.get("input[name='phone']").type(phoneNumber);
    cy.get("input[name='birthday']").type('01/01/1999');
  });

  it.skip('Check different radio buttons ', () => {
    cy.get('.radio')
      .find('[type=radio]')
      .then((radio) => {
        //get all radion buttons,select the first one and verify that is checked
        cy.wrap(radio).first().check().should('be.checked');
        /**
         * radio is jquery element , cy.wrap(radio):turns it into cypress Object so that I can use cypress function
         *  first(): select first element
         * check()" checks it out
         * should(): verifies whatever I provide as parameters 'be.checked
         */
        //get all radion button , select the second one and verify that is checked and confirmation label is visible
        cy.wrap(radio).eq(1).check().should('be.checked');

        cy.get('[data-bv-icon-for="gender"]').should('be.visible');
      // 3rd radio button is not checked
        cy.wrap(radio).eq(2).should('not.be.checked');
      });
  });

it.skip('Check different checkbox actions', () => {
//get all checkbox,select Java and verify
cy.get('[type="checkbox"]').then((checkbox)=>{

cy.wrap(checkbox).eq(1).check().should('be.checked');
//unchek JAva
cy.wrap(checkbox).eq(1).uncheck().should('not.be.checked');
//verify 3rd one has a value javascript 
cy.wrap(checkbox).eq(2).should('have.value','javascript').check().should('be.checked');

})

})
it.skip('checked selection of a single ', () => {
  //select one element
cy.get('select[name="job_title"]').select("SDET");
//assert that dropdow has correct text
cy.get('select[name="job_title"]').contains('SDET');

});
it('checked selection of select dropdown options',()=>{
  //we will provide our test data through fixtures folder as Json
cy.fixture('departments').then((departments) => {
  //get all options in the menu,iterate through these options one by one 
  cy.get('select[name="department"] > option').each ((option,index) => {
//get each text
    const optionText=option.text();
//cy.log(optionText)
//cy.log(index);
//cy.log(departments[index]);

cy.get('select[name="department"]')
  .select(optionText)
  .should('have.value', option.val())
  .contains(departments[index]);
  

        })

      })

     });


  });
