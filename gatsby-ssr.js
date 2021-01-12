/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';

import Theme from './src/theme/theme';

export const wrapRootElement = ({ element }) => <ThemeProvider theme={Theme}>{element}</ThemeProvider>;