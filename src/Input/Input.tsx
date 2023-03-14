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

  setTimeout(() => {
    if (reff.current.defaultValue != null) {
      reff.current.defaultValue = props.searchTerm;
    }
  }, 300);

  return (
    <div className="wrapperInput input-effect">
      <input
        {...props}
        type="text"
        ref={reff}
        className="mainInput"
        value={props.value}
      />
      {props.value.length === 0 && props.searchTerm.length === 0 ? (
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
