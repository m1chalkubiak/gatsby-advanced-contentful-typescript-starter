import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../src/theme/global';

export const withTheme = theme => story =>
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {story()}
    </>
  </ThemeProvider>;
