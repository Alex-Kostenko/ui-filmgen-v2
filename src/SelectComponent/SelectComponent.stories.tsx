import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { components } from 'react-select';

import Select from './SelectComponent';

import './SelectComponent.css';

const Option = (props: any) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          className="checkbox"
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />
        <span className="checkbox_span"></span>
        <label className="lable">{props.label}</label>
      </components.Option>
    </div>
  );
};

export default {
  title: 'UI/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  closeMenu: false,
  checkbox: { Option },
  placeholder: 'Select',
  multi: true,
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
