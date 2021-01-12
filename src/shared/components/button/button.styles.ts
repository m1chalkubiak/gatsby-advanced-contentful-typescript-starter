import styled, { css, StyledProps, DefaultProps } from 'styled-components';
import { propOr } from 'ramda';

import { styleWhenTrue, styleSwitcher, themeBorder, themeColor, themeSize } from '../../../theme/getters';
import { Border, Color, Size } from '../../../theme/theme.constants';
import { ButtonComponentProps, ButtonType } from './button.constants';

export interface ButtonTheme extends DefaultProps {
  mode: ButtonType;
  disabled: boolean;
}

const primaryButtonStyle = css`
  background: ${themeColor(Color.PRIMARY)};
`;

const secondaryButtonStyle = css`
  background: ${themeColor(Color.SECONDARY)};
`;

const disabledButtonStyle = css`
  background: ${themeColor(Color.DISABLED)};
  color: ${styleSwitcher<ButtonComponentProps>('mode', {
    [ButtonType.PRIMARY]: themeColor(Color.BLACK),
    [ButtonType.SECONDARY]: themeColor(Color.SECONDARY),
  })};
`;

export const Container = styled.button<StyledProps<ButtonComponentProps>>`
  padding: ${themeSize(Size.CONTENT_VERTICAL_PADDING)}px ${themeSize(Size.CONTENT_HORIZONTAL_PADDING)}px;
  border: ${themeBorder(Border.REGULAR)};
  ${styleSwitcher('mode', {
    [ButtonType.PRIMARY]: primaryButtonStyle,
    [ButtonType.SECONDARY]: secondaryButtonStyle,
  })};
  ${styleWhenTrue<ButtonComponentProps>(propOr(false, 'disabled'), disabledButtonStyle)};
`;
