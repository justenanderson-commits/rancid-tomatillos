import React from "react";
import "../css/MovieCard.scss";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, id }) => {
  return (
    <div className="movie-cards">
      <img src={posterPath} width="225vw"></img>
      <Link to={"/movies/" + id}>See more</Link>
    </div>
  );
};

export default MovieCard;
