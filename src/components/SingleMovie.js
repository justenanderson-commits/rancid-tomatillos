import "../css/SingleMovie.scss";
import movieData from "../apiCalls/mock-data";
import React from "react";

class SingleMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.movie,
    };
  }

  handleReturnToMainPage = () => {
    this.props.cleanState();
  };

  render() {
    return (
      <div className="single-page-container">
        <img src={this.state.movie.poster_path} />
        <div className="single-movie-description">
          <h2>
            {this.state.movie.title} (
            {this.state.movie["release_date"].slice(0, 4)})
          </h2>
          <p>⭐️ {this.state.movie["average_rating"].toFixed(1)}</p>
          <p>
            Description: Everyone has the right to freedom of thought,
            conscience and religion; this right includes freedom to change his
            religion or belief, and freedom, either alone or in community with
            others and in public or private, to manifest his religion or belief
            in teaching, practice, worship and observance. Everyone has the
            right to freedom of opinion and expression; this right includes
            freedom to hold opinions without interference and to seek, receive
            and impart information and ideas through any media and regardless of
            frontiers. Everyone has the right to rest and leisure, including
            reasonable limitation of working hours and periodic holidays with
            pay.
          </p>
          <button onClick={this.handleReturnToMainPage}>Go back</button>
        </div>
      </div>
    );
  }
}
export default SingleMovie;
