/* eslint-disable no-undef */

describe("Login a User", () => {
  it("send user authentication request", () => {
    cy.intercept(
      {
        method: "POST",
        url: "api/login",
      },

    ).as("LoginUser");

    cy.visit("/login");
    cy.get("#email").type("lukakurdadze2@gmail.com");
    cy.get("#password").type("lukaku12");
    cy.get("#login").click();

    cy.wait("@LoginUser").then(({ response }) => {
      expect(response.body).to.be.an("object");
    });
  });
});


describe("Add Movie", () => {
  it("send add movie request", () => {
    // login user and continue
    cy.intercept(
      {
        method: "POST",
        url: "api/login",
      },

    ).as("LoginUser");

    cy.intercept(
      {
        method: "POST",
        url: "api/movies",
      },

    ).as("LoginUser");

    cy.visit("/login");
    cy.get("#email").type("lukakurdadze2@gmail.com");
    cy.get("#password").type("lukaku12");
    cy.get("#login").click();

    cy.wait("@LoginUser").then(({ response }) => {
      expect(response.body).to.be.an("object");
    });

    cy.visit("/movies/add");

    cy.get("#title_en").type("Test Movie");
    cy.get("#title_ka").type("Test Director");
    cy.get('#1').click();
    cy.get('#2').click();
    cy.get('#3').click();
    cy.get("#director_en").type("Test Director");
    cy.get("#director_ka").type("Test Director");
    cy.get("#description_en").type("Test Description");
    cy.get("#description_ka").type("Test Description");
    // upload image
    cy.fixture("movie-thumbnail.png", "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.get("input[type='file']").attachFile({ fileContent, fileName: "movie-thumbnail.png", mimeType: "image/png" });
      });

    cy.get("#addMovie").click();

    cy.wait("@LoginUser").then(({ response }) => {
      expect(response.body).to.be.an("object");
    });
  });
});