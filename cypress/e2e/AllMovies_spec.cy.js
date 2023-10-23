describe("Rancid Tomatillos user interface", () => {
  it("should show an error if there is a network problem", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      method: "GET",
      fixture: "",
    });
    cy.visit("http://localhost:3000/");
    cy.get(".text--error").contains(
      "Couldn't communicate with the server. Try again later."
    );
  });

  beforeEach(() => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      method: "GET",
      fixture: "../fixtures/allmovies.json",
    });
    cy.visit("http://localhost:3000");
  });

  it("should show a header with an image and a title", () => {
    cy.get(".image--header").should(
      "have.attr",
      "src",
      "/static/media/logo.7478f93c9aea2c767b5d.png"
    );
    cy.contains("Rancid Tomatillos");
  });

  it("should show a section heading that says `Movies`", () => {
    cy.contains(".section--all-movies", "Movies");
  });

  it("should show a drop down filter menu", () => {
    cy.contains(".section--all-movies", "Filter by rating:");
    cy.get('select[name="filter-movies"]')
      .select(0)
      .invoke("val")
      .should("eq", "0");
    cy.get('select[name="filter-movies"]')
      .select(1)
      .invoke("val")
      .should("eq", "1");
    cy.get('select[name="filter-movies"]')
      .select(3)
      .invoke("val")
      .should("eq", "3");
  });

  it("should filter movies by rating", () => {
    cy.get('select[name="filter-movies"]').select(7);
    cy.get(".container--movie-cards")
      .should("contain", "Rogue")
      .should("contain", "2020");
    cy.get(".image")
      .eq(0)
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg"
      );

    cy.get('select[name="filter-movies"]').select(5);
    cy.get(".container--movie-cards")
      .should("contain", "Mulan")
      .should("contain", "Ava")
      .should("contain", "Rogue")
      .should("contain", "2020");
    cy.get(".image")
      .eq(0)
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"
      );
    cy.get(".image")
      .eq(1)
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg"
      );
    cy.get(".image")
      .eq(2)
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg"
      );
  });

  it("should show a collection of movies", () => {
    cy.get(".container--movie-cards").should("exist");
    cy.get(".movie-cards").should("have.length", 4).should("be.visible");
    cy.get(".image")
      .eq(0)
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"
      );
    cy.get(".image")
      .eq(1)
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"
      );
    cy.get(".image")
      .eq(2)
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg"
      );
    cy.get(".image")
      .eq(3)
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg"
      );
  });

  it("should show each movie's poster, title, and year produced", () => {
    cy.get(".image").eq(0).should("have.attr", "width", "225vw");
    cy.get(".image").eq(1).should("have.attr", "width", "225vw");
    cy.get(".image").eq(2).should("have.attr", "width", "225vw");
    cy.get(".image").eq(3).should("have.attr", "width", "225vw");
    cy.get(".movie-cards").should("contain", "Black Adam (2022)");
    cy.get(".movie-cards").should("contain", "Mulan (2020)");
    cy.get(".movie-cards").should("contain", "Rogue (2020)");
    cy.get(".movie-cards").should("contain", "Ava (2020)");
  });

  it("should show the footer", () => {
    cy.contains(
      "© Copyright 2022 Created by Dmitrii Gubko and Justen Anderson"
    );
  });
});
