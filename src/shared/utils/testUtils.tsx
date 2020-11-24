import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';

export const makePropsRenderer = <T, _>(component: (props: T | {}) => ReactElement) => (props?: T) =>
  render(component(props ?? {}));
