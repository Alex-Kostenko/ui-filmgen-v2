import React, { ChangeEvent, FocusEvent } from 'react';
import './Input.css';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: any;
  value?: any;
  inputType: string;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: boolean;
  autoCompleteOff?: boolean;
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
        className={`mainInput ${props.className}`}
        value={value}
        style={
          props.error ? { borderColor: '#f33f3f' } : { borderColor: '#e4dada' }
        }
        autoComplete={props.autoCompleteOff ? 'new-password' : 'on'}
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
