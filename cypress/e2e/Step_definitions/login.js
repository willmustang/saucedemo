import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const username = Cypress.env('username');
const password = Cypress.env('password');


let credenciais;

beforeEach(() => {
  cy.visit("https://www.saucedemo.com/");
  cy.fixture("usuario").then((dados) => {
    credenciais = dados;
  });
});

context("Login", () => {
Given("que eu acesso a página inicial do site", () => {
  cy.visit("https://www.saucedemo.com/");
});
When("eu verifico o carregamento completo da página", () => {
  cy.intercept("GET", "**/*").as("pageLoad"); // Captura qualquer requisição GET
});
Then('eu devo ver o logotipo da empresa "Swag Labs" no topo da página', () => {
  cy.get(".login_logo").should("have.text", "Swag Labs");
});
});

Given("eu insiro o usuário válido no campo de username",() => {
    cy.get('[data-test="username"]').type(credenciais.username);
  });
  When("eu insiro a senha válida no campo de password",() => {
    cy.get('[data-test="password"]').type(credenciais.password);
  });
  When('eu clico no botão de login',() => {
    cy.get('[data-test="login-button"]').click();
  });
  Then("eu devo ser redirecionado para a página do products",() => {
    cy.url().should("include", "/inventory.html");
  });

  
