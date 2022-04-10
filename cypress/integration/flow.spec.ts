describe('Auth', () => {
  it('should enter initial page, complete fields and auth user', () => {
    cy.visit('/');

    cy.get('#identity').click();

    cy.get('.select-option').first().click();

    cy.get('#birth').type('1997-03-16');

    cy.get('#button-submit').click();

    cy.get('#button-login').click();

    cy.location('pathname').should('eq', '/quiz/');
  });
});

describe('Answers', () => {
  it('should answer the questions correctly', () => {
    cy.get('.radio-target').first().click();

    cy.get('#button').click();

    cy.get('.radio-target').last().click();

    cy.get('#button').click();

    cy.get('.radio-target').first().click();

    cy.get('#button').click();

    cy.get('.radio-target').first().click();

    cy.get('#button').click();

    cy.get('.radio-target').first().click();

    cy.get('#button').click();

    cy.get('#result-type').invoke('text')
      .then((result) => {
        const text = result.indexOf('Front-End') !== -1;

        expect(text).to.equal(true);
      });

    cy.get('#result-value').invoke('text')
      .then((result) => expect(result).to.equal('80%'));
  });
});
