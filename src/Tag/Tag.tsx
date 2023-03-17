import React from 'react';
import './Tag.css';

export interface TagProps {
  label?: any;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  className: string;
  cross?: boolean;
}

const Tag = (props: TagProps) => {
  return (
    <div className={props.className}>
      {props.cross && (
        <div onClick={props.onClick} className="tag_cross">
          &#x2716;
        </div>
      )}
      <span>#{props.label}</span>
    </div>
  );
};

export default Tag;
