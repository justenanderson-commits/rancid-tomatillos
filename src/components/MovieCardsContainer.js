import React from 'react'
import MovieCard from './MovieCard'
import '../css/MovieCardsContainer.scss'

const MovieCardContainer = (movies) => {
  // let posterPath = movies.movies[0].poster_path
  // console.log('Poster path: ', posterPath)

  const movieCards = movies.movies.map(movie => {
    return (
      <MovieCard
        posterPath={movie.poster_path}
        key={movie.id}
       />
    )
  })

  return (
    <>
      <section className="container--movie-cards">
        {movieCards}
      </section>
    </>
  )
}

export default MovieCardContainer


