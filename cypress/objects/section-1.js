const { createYield } = require("typescript")

const Section1 = {
  /**
   * A literal is considered static, stable strings (eg. titles, form labels, ...)
   */
  literals: {
    NAME:'John Doe',
    AGE:'34',
    GENDER:'Female',
    GENDER_RETURN:'female',
    SUBMIT_ALERT:'Form submitted!'
  },

  /**
   * An element is a selector for any DOM element (eg. [data-test="xxx"], #id, ...)
   */
  elements: {
    Section1Button:'a[href="/section-1"]',
    tableElement:'#alaya-table',
    tableRow1Element:'#alaya-table',
    showButtonElement:'#table-toggle-button',
    formElement:'#alaya-form',
    showformButtonElement:'#form-toggle-button',


    nameInput:'#fullName',
    ageInput:'#age',
    genderDropbox:'#gender',
    nurseCheckbox:'#nurse',
    formSubmitButton:'#submit'


  },

  /**
   * An action should be pretty self explanatory! It consists of all the method performing
   * a particular action from clicking a simple button to doing complex assertions.
   */
  actions: {
    tableNotVisible(){
      
      cy.visit('http://localhost:8080', { responseTimeout: 40000 })
      cy.get('a').eq(2).click()
      cy.get(Section1.elements.Section1Button)
      .click()
      .then(()=>{
        cy.get(Section1.elements.tableElement)
        .should('not.be.visible')
        
      })
    
    },
    tableVisible(){
      
      cy.get(Section1.elements.showButtonElement)
      //.should('have.text', 'Show table')
      .click()
      .then(()=>{
        cy.get(Section1.elements.tableElement)
        .should('be.visible')
      })
    },
    TableValidation(){
      let num=6
      
      cy.get(Section1.elements.tableElement).find('tr')
      .its('length').should('eq', 11)
      cy.get(Section1.elements.tableElement).find('tr').eq(1).find('th')
      .its('length').should('eq', 5)
    },
    userRoleValidation(){
      var count =0
      cy.get('th:nth-child(5)')
      .each(($el) => {
        cy.wrap($el)
         .invoke('text')
         .then(text => {
             if(text=='user'){
          
               count=count+1
              }
             })
          }).then(()=> expect(count).to.be.gte(5))
          
         
    },
    ageValidation () {
      var count =0;
      cy.get('th:nth-child(4)').each(($e1) => {
        cy.wrap($e1)
         .invoke('text').then((text) =>{
           var date = Cypress.moment(text).format('MM-DD-YYYY');
           var diffInYears = Cypress.moment().diff(date, 'years', true);
           if (diffInYears > 60){
             count = count + 1;
           }
         });
      }).then(()=>expect(count).to.eql(3))
    },
    
  
  formNotVisible(){
      
      cy.get(Section1.elements.formElement)
      .should('not.be.visible')
    },
  
  
  formVisible(){
      
    cy.get(Section1.elements.showformButtonElement)
    .click()
    .then(()=>{
      cy.get(Section1.elements.formElement)
      .should('be.visible')
      })
    },
  


  nameAgeVerify(){
    cy.get(Section1.elements.nameInput)
    .type(Section1.literals.NAME)
    .then(()=>{
      cy.get(Section1.elements.nameInput)
    .should('have.value', Section1.literals.NAME)
    })
    
    cy.get(Section1.elements.ageInput)
    .type(Section1.literals.AGE)
    .then(()=>{
      cy.get(Section1.elements.ageInput)
      .should('have.value', Section1.literals.AGE)
      })
    },
  genderVerify(){
    cy.get(Section1.elements.genderDropbox)
    .select(Section1.literals.GENDER)
    .then(()=>{
      cy.get(Section1.elements.genderDropbox)
      .should('have.value', Section1.literals.GENDER_RETURN)
      })   
    },
  checkboxVerify(){
    cy.get(Section1.elements.nurseCheckbox)
    .check()
    .then(()=>{
      cy.get(Section1.elements.nurseCheckbox)
      .should('be.checked')
      })   
    },
    validateSubmit(){
      cy.get(Section1.elements.formSubmitButton)
      .click()
      .then(()=>{
        cy.on('window:alert',(txt)=>{
          
          expect(txt).to.contains(Section1.literals.SUBMIT_ALERT)
        })
      })
    }        
  }  
}

module.exports = { Section1 }
