import React from "react";
import "../css/MovieCard.scss";

const MovieCard = ({ posterPath, selectMovie }) => {
  const handleClick = (event) => {
    selectMovie();
  };
  return (
    <div className="movie-cards" onClick={handleClick}>
      <img className="image" src={posterPath} width="225vw"></img>
    </div>
  );
};

export default MovieCard;
