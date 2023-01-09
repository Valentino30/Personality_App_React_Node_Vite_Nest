describe("questions", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("completes the test", () => {
    cy.findByRole("heading", {
      name: /Eager to discover your personality?/i,
    }).should("exist");
    cy.findByRole("button", { name: /Take Personality Test/i }).click();
    cy.findByRole("heading", {
      name: /Loading Questions/i,
    }).should("exist");
    cy.findByRole("heading", {
      name: /Question 1/i,
    }).should("exist");
    cy.get('input[type="checkbox"]').first().check();
    cy.findByRole("button", { name: /Next Question/i }).click();
    cy.findByRole("heading", {
      name: /Question 2/i,
    }).should("exist");
    cy.get('input[type="checkbox"]').first().check();
    cy.findByRole("button", { name: /Next Question/i }).click();
    cy.findByRole("heading", {
      name: /Question 3/i,
    }).should("exist");
    cy.get('input[type="checkbox"]').first().check();
    cy.findByRole("button", { name: /Get Results/i }).click();
    cy.findByText(/You got it!/i).should("exist");
    cy.findByRole("button", { name: /Retake Test/i }).click();
    cy.findByRole("heading", {
      name: /Eager to discover your personality?/i,
    }).should("exist");
    cy.findByRole("button", { name: /Take Personality Test/i }).should("exist");
  });
});
