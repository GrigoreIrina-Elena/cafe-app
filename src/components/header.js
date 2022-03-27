import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Produsele noastre</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Lista de produse
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Adauga un produs
        </NavLink>
      </div>
    </header>
  );
};

export default Header;