import React from "react";
import MovieCard from "./MovieCard";
import "../css/MovieCardsContainer.scss";

const MovieCardContainer = (props) => {

  const movieCards = props.movies.map((movie) => {
    function sendMovie() {
      props.selectMovie(movie);
    }
    return (
      <MovieCard
        selectMovie={sendMovie}
        posterPath={movie.poster_path}
        key={movie.id}
        id={movie.id}
      />
    );
  });

  return (
    <>
      <section className="container--movie-cards">{movieCards}</section>
    </>
  );
};

export default MovieCardContainer;
