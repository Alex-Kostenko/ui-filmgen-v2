import React from 'react';
import Select from 'react-select';
import './SelectComponent.css';
import { components } from 'react-select';

type IOptions = {
  value: string;
  label: string;
};

export interface SelectProps {
  onChange?: any;
  className?: string;
  [name: string]: any;
  options?: Array<IOptions>;
  placeholder?: string;
}

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

const SelectComponent = (props: SelectProps) => {
  return (
    <Select
      placeholder={props.placeholder}
      classNamePrefix="castom-select"
      {...props}
      className={'mainSelectStyle ' + props.className}
      options={props.options}
      components={{
        Option,
      }}
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      controlShouldRenderValue={false}
      captureMenuScroll={false}
      // menuIsOpen={true}
    />
  );
};

export default SelectComponent;
