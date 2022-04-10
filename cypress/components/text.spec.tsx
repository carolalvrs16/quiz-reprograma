import { mount } from '@cypress/react';

import Text from '../../src/components/text';

it('Text', () => {
  mount(<Text label="Test text" />);

  cy.get('p').contains('Test text');
});
