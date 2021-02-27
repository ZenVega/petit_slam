import React from 'react';
import { useSelector } from 'react-redux'

import Login from './Login'
import Register from './Register'
import RegisterSuccess from './RegisterSuccess'

function Modals() {

  const { loginOpen, registerOpen, registerSuccessOpen } = useSelector(state => state.modalOpen)
  return (
    <div>
      {loginOpen && <Login />}
      {registerOpen && <Register />}
      {registerSuccessOpen && <RegisterSuccess />}
    </div>
  );
}

export default Modals;