import { withTheme } from './decorators';
import Theme from '../src/theme/theme';
import { addDecorator } from '@storybook/react';

addDecorator(withTheme(Theme));
