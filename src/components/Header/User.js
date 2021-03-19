import React from 'react';
import { Link } from 'react-router-dom'
import firebase from '../../backend/firebase'

import { useDispatch, useSelector } from 'react-redux';
import { logout, openLogin, openRegistration } from '../../actions/index'


function User() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.firebase.profile)
  
  
  const logoutHandler = e => {
    firebase.auth().signOut()
    .then((e) => {
      dispatch(logout())
    })
  }
  
  const returnUser = profile => {
    
    if (profile.isEmpty) {
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
          <p>{profile.username}</p>
          <div id="user-icon">
            <img src={profile.profilePic} alt=""/>
          </div>
          <Link to="/settings">
            <img id="settings-icon" src="../img/settings-icon.png" alt="settings-icon" />
          </Link>
        </div>
      )
    }
  }



  return (returnUser(profile))


}

export default User;