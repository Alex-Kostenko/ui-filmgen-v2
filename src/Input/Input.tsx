import React, { useRef } from 'react';
import './Input.css';

export interface InputProps {
  label?: any;
  value?: any;
  searchTerm: string;
  [name: string]: any;
}

const Input = (props: InputProps) => {
  const reff: any = useRef(null);

  const { value = '', searchTerm = '' } = props;

  return (
    <div className="wrapperInput input-effect">
      <input
        {...props}
        type="text"
        ref={reff}
        className="mainInput"
        defaultValue={searchTerm}
        value={value}
      />
      <label
        className={`mainlabel ${
          value.length !== 0 && searchTerm !== '' && 'secondMainlabel'
        }`}
      >
        {props.label}
      </label>
      <span className="focus-border">
        <i></i>
      </span>
    </div>
  );
};

export default Input;
