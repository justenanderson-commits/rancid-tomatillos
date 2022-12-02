import React from 'react';
import '../css/MovieCard.scss';

const MovieCard = ({ posterPath }) => {
  return (
    <div className="movie-cards">
     <img src={posterPath} width="225vw"></img>
    </div>
  )
}

export default MovieCard;