import React from 'react';
import './Input.css';

export interface InputProps {
  label?: any;
  value?: any;
  [name: string]: any;
}

const Input = (props: InputProps) => {
  return (
    <div className="wrapperInput input-effect">
      <input {...props} type="text" className="mainInput" value={props.value} />
      {props.value.length === 0 ? (
        <label className="mainlabel">{props.label}</label>
      ) : (
        <label className="mainlabel secondMainlabel">{props.label}</label>
      )}
      <span className="focus-border">
        <i></i>
      </span>
    </div>
  );
};

export default Input;
