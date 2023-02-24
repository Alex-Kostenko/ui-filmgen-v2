import React from 'react';
import Select from 'react-select';
import './SelectComponent.css';

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
  multi?: boolean;
  closeMenu?: boolean;
  checkbox?: any;
}

const SelectComponent = (props: SelectProps) => {
  return (
    <Select
      placeholder={props.placeholder}
      classNamePrefix="castom-select"
      {...props}
      className={'mainSelectStyle ' + props.className}
      options={props.options}
      components={props.checkbox}
      isMulti={props.multi}
      closeMenuOnSelect={props.closeMenu}
      hideSelectedOptions={false}
      controlShouldRenderValue={false}
      captureMenuScroll={false}
      // menuIsOpen={true}
    />
  );
};

export default SelectComponent;
