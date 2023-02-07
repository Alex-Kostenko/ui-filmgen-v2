import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Select from './SelectComponent';
import './SelectComponent.css';

export default {
  title: 'UI/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  placeholder: 'Select',
  // eslint-disable-next-line
  onChange: () => console.log('1'),
  options: [
    { value: 'marvel', label: 'Marvel' },
    { value: 'dc', label: 'DC' },
    { value: 'waltDisney', label: 'Walt Disney' },
    { value: 'pixar', label: 'PIXAR' },
    { value: 'dreamWorks ', label: 'Dream Works' },
  ],
};
