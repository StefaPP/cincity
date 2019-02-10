import React from 'react';

const MovieCard = ({ movie }) => (
  <div className="card grow">
    <img className="card-img-top" src={movie.posterurl} alt="Card" />
    <div className="card-body">
      <h5 className="card-title">{movie.title}</h5>
      <p className="card-text">{movie.description}</p>
    </div>
  </div>
)

export {
  MovieCard,
};
