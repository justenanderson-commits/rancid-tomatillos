import React from "react";
import MovieCardsContainer from "./MovieCardsContainer";
import "../css/AllMovies.scss";
import { getAllMovies } from "../apiCalls/";

class AllMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], byRating: "0" };
  }

  componentDidMount() {
    this.fetchAllMovies();
  }

  fetchAllMovies = async () => {
    try {
      const items = await getAllMovies();
      this.setState(items);
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  handleFilterByRating = (event) => {
    this.setState({ byRating: event.target.value });
  };

  getFilteredMovies = () => {
    const filtered = this.state.movies.filter((movie) => {
      return movie.average_rating >= Number(this.state.byRating);
    });
    return filtered;
  };

  render() {
    return (
      <div className="section--all-movies">
        <section className="heading--all-movies">
          <h2>Movies</h2>
          <form className="input--filter" id="input--filter">
            <label className="label--filter">Filter by rating:</label>
            <select
              onChange={this.handleFilterByRating}
              id="filter-movies"
              name="filter-movies"
              placeholder="filter by rating"
            >
              <option value="0">All ratings</option>
              <option value="1">⭐️</option>
              <option value="2">⭐️⭐️</option>
              <option value="3">⭐️⭐️⭐️</option>
              <option value="4">⭐️⭐️⭐️⭐️</option>
              <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
              <option value="6">⭐️⭐️⭐️⭐️⭐️⭐️</option>
              <option value="7">⭐️⭐️⭐️⭐️⭐️⭐️⭐️</option>
              <option value="8">⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️</option>
              <option value="9">⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️</option>
              <option value="10">⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️</option>
            </select>
          </form>
        </section>
        {this.state.error && <p className="text--error">{this.state.error}</p>}
        <MovieCardsContainer
          movies={this.getFilteredMovies()}
          selectMovie={this.props.selectMovie}
        />
      </div>
    );
  }
}

export default AllMovies;
