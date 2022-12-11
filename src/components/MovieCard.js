import React from "react";
import "../css/MovieCard.scss";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, id, title, release, rating }) => {
  return (
    <div className="movie-cards">
      <Link to={"/movies/" + id}>
        <img className="image" src={posterPath} width="225vw" alt={ title } />
        <p>{rating.toFixed(1)}</p>
        {title} ({release.slice(0, 4)})
      </Link>
    </div>
  );
};

export default MovieCard;
