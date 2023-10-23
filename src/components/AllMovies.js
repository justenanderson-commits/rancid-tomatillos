import React from "react";
import MovieCardsContainer from "./MovieCardsContainer";
import "../css/AllMovies.scss";
import { getAllMovies } from "../apiCalls/";
import Filter from "./Filter";

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

  changeByRating = (rating) => {
    this.setState({ byRating: rating });
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
          <Filter changeByRating={this.changeByRating} />
        </section>
        {this.state.error && (
          <h4 className="text--error">
            Couldn't communicate with the server. Try again later.
          </h4>
        )}
        <MovieCardsContainer movies={this.getFilteredMovies()} />
      </div>
    );
  }
}

export default AllMovies;
