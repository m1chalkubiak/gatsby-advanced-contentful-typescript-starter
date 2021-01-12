import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Users } from '..';

describe('Users: Component', () => {
  it('should render fetch users button', () => {
    render(<Users />);
    expect(screen.getByRole('button')).toHaveTextContent('Fetch users');
  });
});
