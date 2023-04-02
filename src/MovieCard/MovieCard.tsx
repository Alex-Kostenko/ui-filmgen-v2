import React from 'react';
import { Tag } from '../Tag';

import './MovieCard.css';

export interface MovieCardProps {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  img: string | null;
  className?: string;
  labels: Array<string>;
  release: any;
  movieId: any;
}

const MovieCard = (props: MovieCardProps) => {
  return (
    <div className="wrapper">
      <div className={'movie-card-container ' + props.className}>
        {props.img ? (
          <a
            className="movie-link-img"
            aria-label="go to the detailed description of the film"
            href={`/aboutFilm/${props.movieId}`}
          >
            <img className="movie-img" src={props.img} alt="img" />
          </a>
        ) : (
          <a
            aria-label="go to the detailed description of the film"
            className="movie-link-img"
            href={`/aboutFilm/${props.movieId}`}
          >
            <img
              className="movie-img"
              src="https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="
              alt="img"
            />
          </a>
        )}
        <div className="description-container">
          <div className="description-header">
            <div>
              <a
                aria-label="go to the detailed description of the film"
                href={`/aboutFilm/${props.movieId}`}
                style={{ textDecoration: 'none' }}
              >
                <h1 className="movie-title movie-title_eng">{props.title}</h1>
              </a>
              <a
                aria-label="go to the detailed description of the film"
                href={`/aboutFilm/${props.movieId}`}
                style={{ textDecoration: 'none' }}
              >
                <h1 className="movie-title movie-title_rus">
                  {props.subtitle}
                </h1>
              </a>
            </div>
            <div className="movie-tag-container">
              {props.labels?.map((label, index) => (
                <Tag className="tag-small" key={index} label={label} />
              ))}
            </div>
          </div>
          <p className="movie-date">
            {props.release}: {props.date}
          </p>
          <p className="movie-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
