import React from 'react';
import { NavLink } from 'react-router-dom'


import { useSelector } from 'react-redux'


function Nav() {
  const logged = useSelector(state => !state.firebase.auth.isEmpty )

  return (
    <div className="Nav">

      <NavLink to="/about" activeClassName="active">
        About
        </NavLink>

        {logged && <NavLink to="/leagues" activeClassName="active">
        Leagues
        </NavLink>}

      <NavLink to="/stadions" activeClassName="active">
        Stadions
        </NavLink>

      {logged && <NavLink to="/players" activeClassName="active">
        Players
        </NavLink>}

    </div>
  );
}

export default Nav;