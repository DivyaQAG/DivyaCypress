
describe("Ultimate Demo", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // Preventing Cypress from failing the test
      console.error("Uncaught Exception:", err);
      return false;
    });
  
    const url = "https://ultimateqa.com/automation/";
    const userdata = {
      name: "John Doe",
      message: "This is a test message",
      firstname: "John",
      lastname: "Doe",
    };
  
    beforeEach(() => {
      cy.visit(url);
    });
  
    it("Navigating to the ultimateqa", () => {
      cy.visit(url).title().should("eq", "Automation Practice - Ultimate QA");
    });
  
    it("Big Page with many Elements page", () => {
      cy.get(".et_pb_text_inner > ul > :nth-child(1) > a").click();
      cy.url().should("eq", "https://ultimateqa.com/complicated-page");
      cy.get(".et_pb_button.et_pb_button_0.et_pb_bg_layout_light").click();
    });
  
    it("Form", () => {
      cy.get("a[href='https://ultimateqa.com/filling-out-forms/']").click();
      cy.get("#et_pb_contact_name_0").type(userdata.name);
      cy.get("#et_pb_contact_message_0").type(userdata.message);
      cy.get(
        "#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_submit"
      ).click();
      cy.get("div[class='et-pb-contact-message'] p").should(
        "have.text",
        "Thanks for contacting us"
      );
  
      cy.get("#et_pb_contact_name_1").type(userdata.name);
      cy.get("#et_pb_contact_message_1").type(userdata.message);
      cy.get("input[name='et_pb_contact_captcha_1']").type("22");
      cy.get(".et_pb_contact_submit").click();
      cy.get("div[class='et-pb-contact-message'] p").should(
        "have.text",
        "Thanks for contacting us"
      );
    });
  
    it("Learn how to automate an application that evolves over time", () => {
      cy.get(
        "a[href='https://ultimateqa.com/sample-application-lifecycle-sprint-1/']"
      ).click();
      cy.get(".entry-title").should(
        "have.text",
        "Sample Application Lifecycle – Sprint 1"
      );
      cy.get('[name="firstname"]').type(userdata.name);
      // cy.get('#submitForm').click();
      cy.get("form > a").click(); // Moving to next sprint
      cy.url().should(
        "eq",
        "https://ultimateqa.com/sample-application-lifecycle-sprint-2/"
      );
      cy.get('[name="firstname"]').type(userdata.firstname);
      cy.get('[name="lastname"]').type(userdata.lastname);
      cy.get(":nth-child(9) > a").click();
      cy.url().should(
        "eq",
        "https://ultimateqa.com/sample-application-lifecycle-sprint-3/"
      );
      cy.get("input[value='female']").should("be.visible").click();
      cy.get("input[name='firstname']").type(userdata.firstname);
      cy.get('[name="lastname"]').type(userdata.lastname);
      cy.get("input[type='submit']").click();
      cy.url().should(
        "eq",
        "https://ultimateqa.com/?gender=female&firstname=John&lastname=Doe"
      );
    });
  });
