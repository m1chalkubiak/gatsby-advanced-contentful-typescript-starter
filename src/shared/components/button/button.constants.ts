import { ButtonHTMLAttributes } from 'react';

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: ButtonType;
}
