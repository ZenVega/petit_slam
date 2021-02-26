import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../actions/index'


function User() {
  const dispatch = useDispatch();

  const logged = useSelector(state => state.userStatus.loggedIn)

  const loginHandler = () => {
    dispatch(login("Ursi"))
  }

  const logoutHandler = () => {
    dispatch(logout())
  }

  const returnUser = logged => {
    if (logged) {
      return (
        <div className="User">
          <button onClick={() => logoutHandler()}>Logout</button>
        </div>
      )
    } else {
      return (
        <div className="User">
          <button onClick={() => loginHandler()}>Login</button>
          <p>Username</p>
          <div id="user-icon"></div>
          <img id="settings-icon" src="../img/settings-icon.png" alt="settings-icon" />
        </div>
      )
    }
  }



  return (returnUser(logged))


}

export default User;