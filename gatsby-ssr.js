/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux';

import Theme from './src/theme/theme';
import { GlobalStyle } from './src/theme/global';
import configureStore from './src/config/store';

const initialState = {};
const store = configureStore(initialState);

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        {element}
      </ThemeProvider>
    </Provider>
  );
};
