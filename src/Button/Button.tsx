import React from 'react';
import './Button.css';

export interface ButtonProps {
  value: string;
  color?: string;
  className?: string;
  [name: string]: any;
}

const Button = (props: ButtonProps) => {
  return (
    <button {...props} className={'offset ' + props.className}>
      {props.value}
    </button>
  );
};

export default Button;
