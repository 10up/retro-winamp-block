describe("Admin can login and open dashboard", () => {
  before(() => {
    cy.login();
  });

  it("Activate Winamp Block and deactivate it back", () => {
    cy.deactivatePlugin("retro-winamp-block");
    cy.activatePlugin("retro-winamp-block");
  });
});
