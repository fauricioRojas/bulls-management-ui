import React from 'react';

import { render } from 'setupTests';
import { SectionHeader } from '../section-header';

describe('<SectionHeader />', () => {
  test('renders properly', () => {
    const { getByText } = render(<SectionHeader title="Header" />);
    const headerElement = getByText(/header/i);
    expect(headerElement).toBeDefined();
  });
});
