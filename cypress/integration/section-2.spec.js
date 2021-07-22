const { Section2 } = require('../objects/section-2')

describe('Problem 2', () => {
  /**
   * Example:
   * To access assertSampleApiResponse() from Section2, you can do: Section2.actions.assertSampleApiResponse();
   *
   * Test away!
   */
   it("Assert status of click me button network call",()=>{
    Section2.actions.buttonCallAssert()
  })

  it("Assert alert message",()=>{
    Section2.actions.validateAleert()
  })
  it("Assert new tab",()=>{
    Section2.actions.assertNewTab()
  })
  it("Assert file Download",()=>{
    Section2.actions.assertFileDownload()
  })

})
