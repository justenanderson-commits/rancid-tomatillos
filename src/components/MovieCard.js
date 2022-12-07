import React from "react";
import "../css/MovieCard.scss";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, id, title, release, rating }) => {
  return (
    <div className="movie-cards">
      <img className="image" src={posterPath} width="225vw" />
      <p>{rating.toFixed(1)}</p>
      <Link to={"/movies/" + id}>
        {title} ({release.slice(0, 4)})
      </Link>
    </div>
  );
};

export default MovieCard;
