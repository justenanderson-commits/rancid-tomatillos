import React from 'react'
import MovieCardsContainer from './MovieCardsContainer';
import '../css/AllMovies.scss';
import movieData from '../apiCalls/mock-data';

class AllMovies extends React.Component {

state = movieData

  render () {
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
        <MovieCardsContainer movies={this.state.movies} />
      </div>
    )

  }
 
}

export default AllMovies