import React, { FC } from 'react';
import Select from 'react-select';
import './SelectComponent.css';

export interface SelectProps {
  onChange?: any;
  className?: string;
  [name: string]: any;
  options?: any;
  placeholder?: any;
  multi?: boolean;
  closeMenu?: boolean;
  checkbox?: any;
  hideSelected?: boolean;
}

const SelectComponent: FC<SelectProps> = (props) => {
  const {
    hideSelected = false,
    placeholder,
    className,
    multi,
    checkbox,
    options,
    closeMenu,
  } = props;

  return (
    <Select
      placeholder={placeholder}
      classNamePrefix="castom-select"
      {...props}
      className={'mainSelectStyle ' + className}
      options={options}
      components={checkbox}
      isMulti={multi}
      closeMenuOnSelect={closeMenu}
      hideSelectedOptions={false}
      controlShouldRenderValue={hideSelected}
      captureMenuScroll={false}
      // menuIsOpen={true}
    />
  );
};

export default SelectComponent;
