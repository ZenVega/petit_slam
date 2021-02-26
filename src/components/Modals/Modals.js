import React from 'react';
import { useSelector } from 'react-redux'

import Login from './Login'
import Register from './Register'

function Modals() {

  const { loginOpen, registerOpen } = useSelector(state => state.modalOpen)
  return (
    <div>
      {loginOpen && <Login />}
      {registerOpen && <Register /> }
    </div>
  );
}

export default Modals;