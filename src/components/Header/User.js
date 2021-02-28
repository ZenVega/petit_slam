import React from 'react';
import { Link } from 'react-router-dom'
import firebase from '../../firebase'

import { useDispatch, useSelector } from 'react-redux';
import { logout, openLogin, openRegistration } from '../../actions/index'


function User() {
  const dispatch = useDispatch();

  const logged = useSelector(state => state.userStatus.loggedIn)
  

  const logoutHandler = e => {
    firebase.auth().signOut().then((e) => {
      dispatch(logout())
    })
  }

  const returnUser = logged => {
    if (!logged) {
      return (
        <div className="User">
          <button onClick={() => dispatch(openLogin(true))}>login</button>
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