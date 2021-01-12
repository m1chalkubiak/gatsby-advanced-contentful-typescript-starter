import { css, DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';
import { Border, Color, Font, Shadow, Size, ZIndex } from './theme.constants';

const colors: Record<Color, string> = {
  [Color.WHITE]: '#ffffff',
  [Color.BLACK]: '#000000',
  [Color.BORDER]: '#80809B',
  [Color.DISABLED]: '#DDDDE0',
  [Color.PRIMARY]: '#42f272',
  [Color.SECONDARY]: '#2249f9',
  [Color.ERROR]: '#fa7265',
};

export const fonts: Record<Font, string> = {
  [Font.PRIMARY]: 'OpenSans',
};

const borders: Record<Border, string> = {
  [Border.REGULAR]: `1px solid ${colors[Color.BORDER]}`,
};

const shadows: Record<Shadow, FlattenSimpleInterpolation> = {
  [Shadow.PRIMARY]: css`
    box-shadow: 10px 10px 0 rgba(0, 0, 55, 0.1);
  `,
};

const sizes: Record<Size, number> = {
  [Size.HEADER]: 80,
  [Size.CONTENT_HORIZONTAL_PADDING]: 24,
  [Size.CONTENT_VERTICAL_PADDING]: 16,
};

const zIndexes = {
  [ZIndex.CONTENT]: 0,
  [ZIndex.HEADER]: 5,
  [ZIndex.OVERLAY]: 10,
};

const theme: DefaultTheme = {
  colors,
  fonts,
  borders,
  shadows,
  sizes,
  zIndexes,
};

export default { ...theme };
