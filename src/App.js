import Header from "./components/Header";
import Footer from "./components/Footer";
import AllMovies from "./components/AllMovies";
import SingleMovie from "./components/SingleMovie";

function App() {
  return (
    <div className="App">
      <Header />
      <AllMovies />
      <SingleMovie />
      <Footer />
    </div>
  );
}

export default App;
