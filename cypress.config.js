const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    usuario: "standard_user",
    senha: "secret_sauce",

    usuario_invalido: "invalid_user",
    usuario_invalido2: "standard_user123",
    usuario_maiusculo: "STANDARD_USER",

    senha_invalida: "invalid_password",
    senha_invalida2: "secret_sauce123",
    senha_invalida3: "secret",
    senha_maiusculo: "SECRET_SAUCE"
  },

  e2e: {
    setupNodeEvents(on, config) {
    },

    chromeWebSecurity: false,
    baseUrl: "https://www.saucedemo.com"
  },
});
