import React from 'react';

import Rider from './Rider'


function Nav() {

  return (
    <div className="Nav">
      <Rider name="about"/>
      <Rider name="league"/>
      <Rider name="stadions"/>
    </div>
  );
}

export default Nav;