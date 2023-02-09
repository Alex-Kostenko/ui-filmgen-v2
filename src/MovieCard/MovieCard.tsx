import React from 'react';
import { Tag } from '../Tag';

import './MovieCard.css';

export interface MovieCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  date: string;
  img: string;
  onClick?: () => any;
  className?: string;
  labels?: Array<string>;
  action?: () => void;
}

const MovieCard = (props: MovieCardProps) => {
  return (
    <div className="wrapper">
      <div {...props} className={'movie-card-container ' + props.className}>
        <img
          className="movie-img"
          onClick={props.action}
          src={props.img}
          alt="img"
        />
        <div className="description-container">
          <div className="description-header">
            <div className="title-conteiner">
              <h1 className="movie-title" onClick={props.action}>
                {props.title}
              </h1>
              <div className="line"></div>
              <h1 className="movie-title" onClick={props.action}>
                {props.subtitle}
              </h1>
            </div>
            <div className="movie-tag-container">
              {props.labels?.map((label, index) => (
                <Tag className="tag-small" key={index} label={label} />
              ))}
            </div>
          </div>
          <p className="movie-date">Release date: {props.date}</p>
          <p className="movie-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
