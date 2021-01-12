import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';

import { ButtonComponent } from './button.component';
import { ButtonType } from './button.constants';

const Template: Story<ComponentProps<typeof ButtonComponent>> = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Press me',
  mode: ButtonType.PRIMARY,
  disabled: false,
};

export const Secondary = Template.bind({});

Secondary.args = {
  ...Primary.args,
  mode: ButtonType.SECONDARY,
};

export const SecondaryDisabled = Template.bind({});

SecondaryDisabled.args = {
  ...Secondary.args,
  disabled: true,
};

export default {
  title: 'Button',
  component: ButtonComponent,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    onClick: { action: 'Clicked me' },
    children: { control: 'text' },
    mode: {
      control: {
        type: 'select',
        options: Object.values(ButtonType),
      },
    },
  },
} as Meta;
