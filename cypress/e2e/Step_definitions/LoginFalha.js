import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

//@LoginUsuárioObrigatório
Given("não insiro nenhuma informação no campo username", () => {
  cy.get('[data-test="username"]').click().clear();
});
When("insiro senha válida no campo password", () => {
  cy.get('[data-test="password"]').type("secret_sauce");
});
When('clico no botão login', () => {
  cy.get('[data-test="login-button"]').click();
});
Then('devo ver a mensagem de erro: "Epic sadface: Username is required" é exibida em vermelho abaixo do campo "Password"', () => {
  cy.get('[data-test="error"]').should(
    "have.text",
    "Epic sadface: Username is required"
  );
});

//@LoginSenhaObrigatória
Given("que insiro username valido no campo login", () => {
  cy.get('[data-test="username"]').type("standard_user");
});
When("não insiro senha válida no campo password", () => {
  cy.get('[data-test="password"]').click().clear();
});
When('clico no botão de login', () => {
  cy.get('[data-test="login-button"]').click();
});
Then('devo ver a mensagem de erro: "Epic sadface: Password is required" é exibida em vermelho abaixo do campo "Password"', () => {
  cy.get('[data-test="error"]').should(
    "have.text",
    "Epic sadface: Password is required"
  );
});
