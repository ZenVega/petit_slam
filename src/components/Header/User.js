import React from 'react';
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { login, logout, openLogin, openRegistration } from '../../actions/index'


function User() {
  const dispatch = useDispatch();

  const logged = useSelector(state => state.userStatus.loggedIn)

  const loginHandler = () => {
    dispatch(openLogin(true))
    dispatch(login("Ursi"))
  }

  const logoutHandler = () => {
    dispatch(openLogin(false))
    dispatch(logout())
  }

  const returnUser = logged => {
    if (!logged) {
      return (
        <div className="User">
          <button onClick={() => loginHandler()}>login</button>
          <button onClick={() => dispatch(openRegistration(true))}>register</button>
        </div>
      )
    } else {
      return (
        <div className="User">
          <button onClick={() => logoutHandler()}>Logout</button>
          <p>Username</p>
          <div id="user-icon"></div>
          <Link to="/settings">
            <img id="settings-icon" src="../img/settings-icon.png" alt="settings-icon" />
          </Link>
        </div>
      )
    }
  }



  return (returnUser(logged))


}

export default User;