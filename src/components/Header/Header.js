import React from 'react';
import { Link } from 'react-router-dom'

import Nav from './Nav'
import User from './User'


function Header() {

  return (
    <div className="Header">
      <Nav />
      <Link to="/" >
        <h1>petit slam</h1>
      </Link>
      <User />
    </div>
  );
}

export default Header;