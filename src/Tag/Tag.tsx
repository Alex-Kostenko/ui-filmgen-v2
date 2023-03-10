import React from 'react';
import './Tag.css';

export interface TagProps {
  label?: any;
  onClick?: () => any;
  className: string;
}

const Tag = (props: TagProps) => {
  return (
    <div {...props} className={props.className}>
      #{props.label}
    </div>
  );
};

export default Tag;
