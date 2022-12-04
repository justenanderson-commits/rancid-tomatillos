import React from "react";
import MovieCardsContainer from "./MovieCardsContainer";
import "../css/AllMovies.scss";
import { getAllMovies } from "../apiCalls/";

class AllMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  componentDidMount() {
    this.fetchAllMovies();
  }

  fetchAllMovies = async () => {
    try {
      const items = await getAllMovies();
      this.setState(items);
    } catch (error) {
      this.setState({ error: error.massage });
    }
  };

  render() {
    return (
      <div className="section--all-movies">
        <section className="heading--all-movies">
          <h2>Movies</h2>
          <form className="input--filter" id="input--filter">
            <label className="label--filter">Filter by rating:</label>
            <select
              id="filter-movies"
              name="filter-movies"
              placeholder="filter by rating"
            >
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
        <MovieCardsContainer
          movies={this.state.movies}
          selectMovie={this.props.selectMovie}
        />
      </div>
    );
  }
}

export default AllMovies;
