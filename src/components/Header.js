import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="site-title">
        ShopTendance
      </Link>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/Bébés">Bébés</Link>
          </li>
          <li>
            <Link to="/Enfants">Enfants</Link>
          </li>
          <li>
            <Link to="/Ados">Ados</Link>
          </li>
          <li>
            <Link to="/Femmes">Femmes</Link>
          </li>
          <li>
            <Link to="/Hommes">Hommes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
