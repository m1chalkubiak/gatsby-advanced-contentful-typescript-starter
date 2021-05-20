import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';

import { textContent } from '../../../mocks/richContent';
import { SectionComponent } from './section.component';
import { TEXT_ALIGN } from './section.types';

const Template: Story<ComponentProps<typeof SectionComponent>> = (args) => <SectionComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
  content: textContent as any,
  textAlign: TEXT_ALIGN.LEFT,
};

export const RightAlign = Template.bind({});

RightAlign.args = {
  ...Default.args,
  textAlign: TEXT_ALIGN.RIGHT,
};

export default {
  title: 'Section',
  component: SectionComponent,
  argTypes: {
    textAlign: {
      control: {
        type: 'select',
        options: Object.values(TEXT_ALIGN),
      },
    },
  },
} as Meta;
