import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content-container">
        <Link className="header-heading" to="/">
          <h1>Movie app</h1>
        </Link>
        <nav>
          <Link className="header-link" to="/rated-movies">
            Rated movies
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
