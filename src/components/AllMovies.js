import React from 'react'
import MovieCardsContainer from './MovieCardsContainer'
import '../css/AllMovies.scss'


const AllMovies = () => {
  return (
    <div className="section--all-movies">
      <section className="heading--all-movies">
        <h2>All Movies</h2>
        <form className="input--filter" id="input--filter">
        {/* <label className="label--filter">Filter by rating:</label> */}
          <select id="filter-movies" name="filter-movies" placeholder="filter by rating">
            <option value="one-star">⭐️</option>
            <option value="two-stars">⭐️⭐️</option>
            <option value="threee-stars">⭐️⭐️⭐️</option>
            <option value="four-stars">⭐️⭐️⭐️⭐️</option>
            <option value="five-stars">⭐️⭐️⭐️⭐️⭐️</option>
            <option value="six-stars">⭐️⭐️⭐️⭐️⭐️⭐️</option>
            <option value="seven-stars">⭐️⭐️⭐️⭐️⭐️⭐️⭐️</option>
          </select>
        </form>
      </section>
      <MovieCardsContainer />
    </div>
  )
}

export default AllMovies