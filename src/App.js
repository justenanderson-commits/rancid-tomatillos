import Header from "./components/Header";
import Footer from "./components/Footer";
import AllMovies from "./components/AllMovies";
import SingleMovie from "./components/SingleMovie";
import React from "react";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={AllMovies} />
      <Route path="/movies/:id" component={SingleMovie} />
      <Footer />
    </div>
  );
}
export default App;
