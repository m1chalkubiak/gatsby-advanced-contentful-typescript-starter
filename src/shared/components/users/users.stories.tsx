import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { times } from 'ramda';

import { withRedux } from '../../utils/storybook';
import { userFactory } from '../../../mocks/factories';
import { prepareState } from '../../../mocks/store';
import { Users } from '.';

const Template: Story<ComponentProps<typeof Users>> = () => <Users />;

export const Default = Template.bind({});

export default {
  title: 'Users',
  component: Users,
  decorators: [
    withRedux(
      prepareState((state) => {
        state.users.users = times(() => userFactory(), 10);
      })
    ),
  ],
} as Meta;
