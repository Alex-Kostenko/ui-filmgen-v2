import React from 'react';
import './Input.css';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: any;
  value?: any;
  inputType: string;
  class?: string;
  onChange?: any;
  onBlur?: any;
  disabled?: any;
}

const Input = (props: IInput) => {
  const { value = '' } = props;

  return (
    <div className="wrapperInput input-effect">
      <input
        {...props}
        disabled={props.disabled}
        onChange={props.onChange}
        onBlur={props.onBlur}
        type={props.inputType}
        className={`mainInput ${props.class}`}
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
