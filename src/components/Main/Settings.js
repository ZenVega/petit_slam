import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import ImageLoader from './Settings/ImageLoader'

import firebase from '../../firebase'

function Settings() {
  const id = useSelector(state => state.activeUser.id)
  const [user, setUser] = useState({})

  
  const userRef = firebase.database().ref("user/" + id)
  
  const initialStats = () => {
    const mail = firebase.auth().currentUser.email

    userRef.on('value', (snapshot) => {
    const initUser = snapshot.val()
      if(initUser){
        setUser({
          "username": initUser.username,
          "mail": mail,
          "attack": initUser.attack,
          "id": id
        })
      }
  });
  }

  
  useEffect(() => {
    initialStats()
  }, [])



  
  const handleChange = e => {
    switch (e.target.id) {
      case "Username":
        setUser({...user,"username":e.target.value});
        break;
      case "Attack":
        setUser({...user,"attack":e.target.value});
        break;
    }
  }

  const handleSubmit = () => {

    userRef.set(user)
    

  }

  return (
    <div className="Main Settings">
      <h1>Settings</h1>
      <p>Change your data</p>

      <label> Username
          <input
          type="text"
          onChange={handleChange}
          id="Username"
          value={user.username}
        />
      </label>

      <label> Mail
        <input
          type="text"
          onChange={handleChange}
          id="Mail"
          value={user.mail}
        />
      </label>

      <label> Special Attack
        <input
          type="text"
          onChange={handleChange}
          id="Attack"
          value={user.attack}
        />
      </label>

      <ImageLoader
      userID={id}/>

      <button type="submit" onClick={handleSubmit}>Submit</button>

    </div>
  );
}

export default Settings;