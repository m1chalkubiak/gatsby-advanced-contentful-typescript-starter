import 'styled-components';

import { Border, Color, Font, Shadow, Size, ZIndex } from '../theme/theme.constants';
import { Breakpoint } from '../theme/media';
import { ThemeMap } from '../theme/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors?: ThemeMap<Color, string>;
    fonts?: ThemeMap<Font, string>;
    borders?: ThemeMap<Border, string>;
    shadows?: ThemeMap<Shadow>;
    sizes?: ThemeMap<Size>;
    zIndexes?: ThemeMap<ZIndex>;
    activeBreakpoint?: Breakpoint;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultProps {}
}
