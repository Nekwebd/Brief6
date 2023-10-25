import React from "react";

const Header = () => {
  return (
    <div className="header">
      <a href="/" className="site-title">
        ShopTendance
      </a>
      <nav className="nav">
        <ul>
          <li href="/products/categories/bebe">Bébé</li>
          <li href="/products/categories/enfant">Enfant</li>
          <li href="/products/categories/ado">Adolescent</li>
          <li href="/products/categories/femme">Femme</li>
          <li href="/products/categories/enfant">Homme</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
