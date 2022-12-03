import Header from "./components/Header";
import Footer from "./components/Footer";
import AllMovies from "./components/AllMovies";
import SingleMovie from "./components/SingleMovie";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { selectedMovie: null };
  }

  selectMovie = (movie) => {
    this.setState({ selectedMovie: movie });
  };

  cleanState = () => {
    this.setState({ selectedMovie: null });
  };

  render() {
    const { selectedMovie } = this.state;
    return (
      <div className="App">
        <Header />
        {selectedMovie ? (
          <SingleMovie movie={selectedMovie} cleanState={this.cleanState} />
        ) : (
          <AllMovies selectMovie={this.selectMovie} />
        )}
        <Footer />
      </div>
    );
  }
}
export default App;
