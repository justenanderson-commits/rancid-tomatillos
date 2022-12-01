import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllMovies from "./AllMovies";

function App() {
  return (
    <div className="App">
      <Header />
      <AllMovies />
      <Footer />
    </div>
  );
}

export default App;
