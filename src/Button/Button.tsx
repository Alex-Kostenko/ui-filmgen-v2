import React from 'react';
import './Button.css';

export interface ButtonProps {
  buttonText?: any;
  color?: string;
  onClick?: () => any;
  className?: string;
  [name: string]: any;
}

const Button = (props: ButtonProps) => {
  return (
    <button {...props} className={'offset ' + props.className}>
      {props.buttonText}
    </button>
  );
};

export default Button;
