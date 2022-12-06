describe("Feedback Loop login flows", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should show the title", () => {
    cy.contains("Rancid Tomatillos");
  });
  it("should show a title that says movies", () => {
    cy.contains(".section--all-movies", "Movies");
    cy.contains(".section--all-movies", "Filter by rating:");
    cy.get('select[name="filter-movies"]')
      .select(1)
      .invoke("val")
      .should("eq", "two-stars");
  });
});
