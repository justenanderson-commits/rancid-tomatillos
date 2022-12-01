import "../css/Header.scss";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} />
        <h1>Rancid Tomatillos</h1>
      </div>
    </header>
  );
};

export default Header;
