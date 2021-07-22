const Section2 = {
  /**
   * A literal is considered static, stable strings (eg. titles, form labels, ...)
   */
  literals: {
    ALERT:'Abnormally long network call!'
  },

  /**
   * An element is a selector for any DOM element (eg. [data-test="xxx"], #id, ...)
   */
  elements: {
    clickElement:'#network-call-button',
    newTabButton:'#new-tab-button'
  },

  /**
   * An action should be pretty self explanatory! It consists of all the method performing
   * a particular action from clicking a simple button to doing complex assertions.
   */
  actions: {
    /**
     * Example of action.
     * In this example, we are grabbing a sample element, clicking on it and asserting the api answer.
     *
     * This is only used as an example and can be safely deleted.
     */
     buttonCallAssert(){
      cy.visit('http://localhost:8080/section-2')
      cy.get(Section2.elements.clickElement)
      .click()
      cy.request('http://localhost:8889/todos/1')
      .should((response)  => {
        expect(response).property('status').to.equal(200)
        expect(response).property('body').to.contain({
          title: 'Abnormally long network call!',
          id:1
        })
        
      })

      
     },
     validateAleert(){
      
        cy.on('window:alert',(txt)=>{
          
          expect(txt).to.contains(Section2.literals.ALERT)
        })
      
    }, 
    assertNewTab(){
      cy
  .get(Section2.elements.newTabButton)
  .then(link => {
    cy.request('http://localhost:8889/todos/1')
      .its('status')
      .should('eq', 200);

  })
    },
    assertFileDownload(){
      cy.document().then((doc) => {
        const fileUrl = doc.querySelector('[data-test=file-download-button]').getAttribute('href');
        cy.request({
          url: fileUrl,
          encoding: 'base64'
        })
          .then((response) => {
            expect(response.status).to.equal(200);
          })
        })
        }
    
      
    

  },
}

module.exports = { Section2 }
