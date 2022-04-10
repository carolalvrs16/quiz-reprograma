import { mount } from '@cypress/react';

import Button from '../../src/components/button';

it('Button', () => {
  mount(<Button label="Test button" />);

  cy.get('button').contains('Test button').click();
});
