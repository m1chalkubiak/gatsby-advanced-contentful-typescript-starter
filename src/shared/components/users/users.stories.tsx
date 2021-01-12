import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';

import { Users } from '.';

const Template: Story<ComponentProps<typeof Users>> = () => <Users />;

export const Default = Template.bind({});

export default {
  title: 'Users',
  component: Users,
} as Meta;
