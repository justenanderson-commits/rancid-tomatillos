import React from "react";
import "../css/Filter.scss";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: "0" };
  }

  handleFilterByRating = (event) => {
    this.setState({ rating: event.target.value });
    this.props.changeByRating(event.target.value);
  };

  componentWillUnmount() {
    this.setState({ rating: "0" });
    this.props.changeByRating("0");
  }

  render() {
    return (
      <form className="input--filter" id="input--filter">
        <label htmlFor="filter-movies" className="label--filter">
          Filter by rating:
        </label>
        <select
          onChange={this.handleFilterByRating}
          id="filter-movies"
          name="filter-movies"
          value={this.state.rating}
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
    );
  }
}

export default Filter;
