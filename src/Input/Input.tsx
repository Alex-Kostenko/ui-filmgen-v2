import React from 'react';
import './Input.css';

export interface InputProps {
  label?: any;
  value?: any;
  [name: string]: any;
  inputType: string;
}

const Input = (props: InputProps) => {
  const { value = '' } = props;

  return (
    <div className="wrapperInput input-effect">
      <input
        {...props}
        type={props.inputType}
        className="mainInput"
        value={value}
      />
      <label className={`mainlabel ${value.length !== 0 && 'secondMainlabel'}`}>
        {props.label}
      </label>
      <span className="focus-border">
        <i></i>
      </span>
    </div>
  );
};

export default Input;
