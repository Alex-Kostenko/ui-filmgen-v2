import React from 'react';
import './Input.css';

export interface InputProps {
  label?: any;
  [name: string]: any;
}

const Input = (props: InputProps) => {
  return (
    <div className="wrapperInput input-effect">
      <input {...props} type="text" className="mainInput" />
      <label>{props.label}</label>
      <span className="focus-border">
        <i></i>
      </span>
    </div>
  );
};

export default Input;
