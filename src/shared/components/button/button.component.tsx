import React from 'react';
import { empty } from 'ramda';

import { ButtonComponentProps, ButtonType } from './button.constants';
import { Container } from './button.styles';

export const ButtonComponent = ({
  children,
  mode = ButtonType.PRIMARY,
  onClick = empty,
  ...other
}: ButtonComponentProps) => (
  <Container onClick={onClick} mode={mode} {...other}>
    {children}
  </Container>
);
