import React from 'react';
import { NavLink } from 'react-router-dom'


import { useSelector } from 'react-redux'


function Nav() {
  const logged = useSelector(state => state.firebase.profile.isLoaded )

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

      {logged && <NavLink to="/players" activeClassName="active">
        Players
        </NavLink>}

    </div>
  );
}

export default Nav;