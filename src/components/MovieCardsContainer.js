import React from "react";
import MovieCard from "./MovieCard";
import "../css/MovieCardsContainer.scss";

const MovieCardContainer = (props) => {
  // let posterPath = movies.movies[0].poster_path
  // console.log('Poster path: ', posterPath)

  const movieCards = props.movies.map((movie) => {
    return (
      <MovieCard
        selectMovie={() => props.selectMovie(movie)}
        posterPath={movie.poster_path}
        key={movie.id}
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
