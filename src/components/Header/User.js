import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import firebase from '../../firebase'

import { useDispatch, useSelector } from 'react-redux';
import { logout, openLogin, openRegistration } from '../../actions/index'


function User() {
  const dispatch = useDispatch();

  const activeUser = useSelector(state => state.activeUser)


  const logoutHandler = e => {
    firebase.auth().signOut()
    .then((e) => {
      dispatch(logout())
    })
  }

  const returnUser = activeUser => {
    if (!activeUser.id) {
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
          {activeUser && <p>{activeUser.username}</p>}
          {activeUser && <div id="user-icon">
            <img src={activeUser.profilePic} alt=""/>
          </div>}
          {activeUser &&
          <Link to="/settings">
            <img id="settings-icon" src="../img/settings-icon.png" alt="settings-icon" />
          </Link>}
        </div>
      )
    }
  }



  return (returnUser(activeUser))


}

export default User;