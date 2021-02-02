import React, { ReactNode, ReactElement } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { identity } from 'ramda';
import { Provider } from 'react-redux';
import produce from 'immer';

import { store as fixturesStore } from '../../mocks/store';
import createReducer, { GlobalState } from '../../config/reducers';

interface ContextData {
  store?: GlobalState;
}

interface ProvidersWrapperProps {
  children: ReactNode;
  context?: ContextData;
}

export const ProvidersWrapper = ({ children, context = {} }: ProvidersWrapperProps) => {
  const { store = fixturesStore } = context;
  return (
    <HelmetProvider>
      <Provider store={createStore(createReducer(), produce(store, identity))}>{children}</Provider>
    </HelmetProvider>
  );
};

export const makeContextRenderer = <T, _>(component: (props: T | Record<string, never>) => ReactElement) => (
  props?: T,
  context?: ContextData
) =>
  render(component(props ?? {}), {
    wrapper: ({ children }) => <ProvidersWrapper context={context}>{children}</ProvidersWrapper>,
  });

export const makePropsRenderer = <T, _>(component: (props: T | Record<string, never>) => ReactElement) => (props?: T) =>
  render(component(props ?? {}));
