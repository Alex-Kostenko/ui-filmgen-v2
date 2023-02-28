import React, { useState } from 'react';
import './Input.css';

export interface InputProps {
  label?: any;
  onBlur: any;
}

const Input = (props: InputProps) => {
  const [value, setValue] = useState('');

  return (
    <div className="wrapperInput input-effect">
      <input
        type={'text'}
        className="mainInput"
        value={value}
        placeholder=""
        onChange={(e) => setValue(e.target.value)}
        onBlur={props.onBlur}
      />
      {value.length === 0 && <label>{props.label}</label>}
      <span className="focus-border">
        <i></i>
      </span>
    </div>
  );
};

export default Input;
