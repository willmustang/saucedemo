import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import 'cypress-plugin-tab';
const username = Cypress.env('username');
const password = Cypress.env('password');


let credenciais;

beforeEach(() => {
  cy.visit("https://www.saucedemo.com/");
  cy.fixture("usuario").then((dados) => {
    credenciais = dados;
  });
});
//@Carregamento
Given("que eu acesso a página inicial do site",() => {
  cy.visit("https://www.saucedemo.com/");
});
  When("eu verifico o carregamento completo da página", () => {
  cy.intercept("GET", "**/*").as("pageLoad"); // Captura qualquer requisição GET
});
  Then('eu devo ver o logotipo da empresa "Swag Labs" no topo da página', () => {
  cy.get(".login_logo").should("have.text", "Swag Labs");
});
//@LoginSucesso
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
//@CampoUsernameVisivel
Given("que clico no campo username",() => {
    cy.get('[data-test="username"]').click();
  });
  Then("campo aparece na tela e aceita digitação",() => {
    cy.get('[data-test="username"]')
    .should("be.visible")
    .and("not.be.disabled")
    .type("standard_user")
    .should("have.value", "standard_user");
  });
//@CampoPasswordVisivel
Given("que clico no campo password",() => {
    cy.get('[data-test="password"]').click();
  });
  When("campo aparece na tela e aceita digitação",() => {
    cy.get('[data-test="password"]')
    .should("be.visible")
    .and("not.be.disabled")
    .type("secret_sauce")
    .should("have.value", "secret_sauce");
  });
//@BotãoLoginVisivel
Given("que verifico se o botão login é renderizado na tela",() => {
    cy.get('[data-test="login-button"]').should("be.visible");
  });
  Then("Botão Login aparece corretamente na interface",() => {
    cy.get('[data-test="login-button"]')
    .should("be.visible")
    .and("not.be.disabled")
    .and("have.value", "Login");
  });
//@BotãoLoginClicável
Given("que clico no botão login",() => {
    cy.get('[data-test="login-button"]').click();
  });
  Then("evento de clique é disparado corretamente",() => {
    cy.get('[data-test="login-button"]').click().should("be.enabled");
  });
//@PressionarEnterNoFormulário
Given("que preencho o campo Username",() => {
    cy.get('[data-test="username"]').type(credenciais.username);
  });
  When("preencho o campo Password",() => {
    cy.get('[data-test="password"]').type(credenciais.password);
  });
  When("pressiono enter ainda nos campos do formulário",() => {
    cy.get('[data-test="password"]').type("{enter}");
  });
  Then("devo ser redirecionado para a página do products",() => {
    cy.url().should("include", "/inventory.html");
  });
//@FocoViaTabulaçãoUsername
Given("que seleciono o body da página",() => {
    cy.get("body").focus();
});
  When("e navego na página com a tecla tab até o campo username",() => {
    cy.get("body").tab();
    cy.get('[data-test="username"]')
    .should("have.focus")
    .should("have.id", "user-name");
  });
  Then("devo conseguir digitar no campo username",() => {
    cy.get('[data-test="username"]')
    .type("standard_user")
    .should("have.value", "standard_user");
  });
//@FocoViaTabulaçãoPassword
Given("que seleciono o body da página",() => {
    cy.get("body").focus();
});
  When("navego na página com a tecla tab até o campo password",() => {
    cy.get("body").tab().tab();
    cy.get('[data-test="password"]')
    .should("have.focus")
    .should("have.id", "password");
  });
  Then("devo conseguir digitar no campo password",() => {
    cy.get('[data-test="password"]')
    .type("secret_sauce")
    .should("have.value", "secret_sauce");
  });
//@FocoViaTabulaçãoLogin
  Given("que seleciono o body da página",() => {
    cy.get("body").focus();
  });
  When("navego na página com a tecla tab até o botão login",() => {
    cy.get("body").tab().tab().tab();
    cy.get('[data-test="login-button"]')
    .should("have.focus")
    .should("have.id", "login-button");
  });
  Then("devo conseguir clicar no botão login",() => {
    cy.get('[data-test="login-button"]').click();
  });
  //@EstiloVisualBotãoLogin
  Given("que valido que a fonte e cor do botão login estão de acordo com especificação",() => {
    cy.get('[data-test="login-button"]').should("be.visible");
  });
  Then("botão login apresenta características corretas",() => {
    cy.get('[data-test="login-button"]')
    .should("have.css", "background-color", "rgb(61, 220, 145)") // Cor de fundo
    .and("have.css", "color", "rgb(19, 35, 34)") // Cor do texto
    .and("have.css", "font-family", "DM Sans, Arial, Helvetica, sans-serif") // Fonte
    .and("have.css", "font-size", "16px") // Tamanho da fonte
  });
