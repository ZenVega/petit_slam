import React from 'react';
import { NavLink } from 'react-router-dom'




function Nav() {

  return (
    <div className="Nav">

        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>

        <NavLink to="/league" activeClassName="active">
          League
        </NavLink>

        <NavLink to="/stadions" activeClassName="active">
          Stadions
        </NavLink>

        <NavLink to="/players" activeClassName="active">
          Players
        </NavLink>

    </div>
  );
}

export default Nav;