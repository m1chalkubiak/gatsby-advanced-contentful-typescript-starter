import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Button } from '..';
import { makePropsRenderer } from '../../../utils/testUtils';
import { ButtonComponentProps } from '../button.constants';

describe('Button: Component', () => {
  const defaultProps = {};

  const component = (props: Partial<ButtonComponentProps>) => <Button {...defaultProps} {...props} />;
  const render = makePropsRenderer(component);

  it('should call onClick prop when clicked', () => {
    const onClick = jest.fn();
    render({ onClick });
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should pass native HTML props directly to the button element', () => {
    render({ 'aria-label': 'some-label' });
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'some-label');
  });
});
