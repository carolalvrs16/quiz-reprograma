const dev = require('@cypress/react/plugins/next');

/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  dev(on, config);

  return config;
};
