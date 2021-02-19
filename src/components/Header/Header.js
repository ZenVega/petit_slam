import React from 'react';

import Nav from './Nav'
import User from './User'


function Header() {

  return (
    <div className="Header">
      <Nav/>
      <h1>petit slam</h1>
      <User/>
    </div>
  );
}

export default Header;