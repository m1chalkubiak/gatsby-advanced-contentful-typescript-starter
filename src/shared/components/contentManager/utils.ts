import { pathOr, pipe, toLower, replace } from 'ramda';

import { COMPONENTS_MAP } from './contentManager.constants';
import { ComponentsProps } from './contentManager.types';

const CONTENTFUL_BLOCKS_PREFIX = 'Contentful';

export const getComponentName = pipe(pathOr('Unknown', ['__typename']), replace(CONTENTFUL_BLOCKS_PREFIX, ''), toLower);

export const getDisplayComponent = (component: ComponentsProps) => {
  const componentType = getComponentName(component);

  return COMPONENTS_MAP[componentType];
};
