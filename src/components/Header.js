import "../css/Header.scss";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div>
        <img className="image--header" src={logo} alt="Logo with popcorn and movie film"/>
        <h1>Rancid Tomatillos</h1>
      </div>
    </header>
  );
};

export default Header;
