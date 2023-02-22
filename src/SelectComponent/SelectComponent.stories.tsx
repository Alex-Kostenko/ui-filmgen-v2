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
    { value: '1', label: 'телевизионный фильм' },
    { value: '2', label: 'драмма' },
    { value: '3', label: 'комедия' },
    { value: '4', label: 'ужасы' },
    { value: '5 ', label: 'детектив' },
    { value: '1', label: 'боевик' },
    { value: '2', label: 'драмма' },
    { value: '3', label: 'комедия' },
    { value: '4', label: 'ужасы' },
    { value: '5 ', label: 'детектив' },
    { value: '1', label: 'боевик' },
    { value: '2', label: 'драмма' },
    { value: '3', label: 'комедия' },
    { value: '4', label: 'ужасы' },
    { value: '5 ', label: 'детектив' },
  ],
};
