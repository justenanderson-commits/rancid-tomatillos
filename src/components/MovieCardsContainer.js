import React from "react";
import MovieCard from "./MovieCard";
import "../css/MovieCardsContainer.scss";

const MovieCardContainer = (props) => {
  const movieCards = props.movies.map((movie) => {
    return (
      <MovieCard
        posterPath={movie.poster_path}
        key={movie.id}
        id={movie.id}
        title={movie.title}
        release={movie.release_date}
        rating={movie.average_rating}
      />
    );
  });

  return <section className="container--movie-cards">{movieCards}</section>;
};

export default MovieCardContainer;
