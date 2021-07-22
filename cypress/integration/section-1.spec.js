const { Section1 } = require('../objects/section-1')

describe('Problem 1', () => {
  it("Assert that the table is not visible",()=>{
    Section1.actions.tableNotVisible()
  })
  it("assert the table is visible after clicking show table button",()=>{
    Section1.actions.tableVisible()
  })
  it("assert number of rows and column in table",()=>{
    Section1.actions.TableValidation()
  })
  it("assert role as user for atleast 5 entries",()=>{
    Section1.actions.userRoleValidation()
  })
  it("assert age above 60",()=>{
    Section1.actions.ageValidation()
    
  })
  it("assert Form not visible",()=>{
    Section1.actions.formNotVisible()
  })
  it("assert Form visible after clicking show form button",()=>{
    Section1.actions.formVisible()
  })
it("Insert name, age and assert the fields are filled",()=>{
  Section1.actions.nameAgeVerify()
  })
it("Select Female from the select option, and assert that the value is female",()=>{
    Section1.actions.genderVerify()
    })  
it("Tick the Nurse checkbox and assert that the value nurse is true",()=>{
    Section1.actions.checkboxVerify()
  })    
it("Assert windows alert after clicking submit",()=>{
    Section1.actions.validateSubmit()
  })      
})
  

