/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux';

import Theme from './src/theme/theme';
import { GlobalStyle } from './src/theme/global';
import configureStore from './src/config/store';
import { startupActions } from './src/modules/startup';
import initializeFontFace from './src/theme/initializeFontFace';

const initialState = {};
const store = configureStore(initialState);

export const onClientEntry = () => {
  initializeFontFace();
  store.dispatch(startupActions.startup());
};

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
