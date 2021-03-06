import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import firebase from '../../firebase'

function Settings() {
  const id = useSelector(state => state.activeUser.id)

  const [username, setUsername] = useState("")
  const [mail, setMail] = useState("")
  const [attack, setAttack] = useState("")
  const [image, setImage] = useState("")
  
  
  const initialStats = () => {
    const mail = firebase.auth().currentUser.email
    
    const userRef = firebase.database().ref("user/" + id)
    userRef.on('value', (snapshot) => {
    const initUser =snapshot.val()
      if(initUser){
        setUsername(initUser.username)
        setMail(mail)
        setAttack(initUser.attack)
      } else {

      }
  });
  }

  
  useEffect(() => {
    initialStats()
  }, [])



  const handleImageInput = e => {
      setImage(e.target.files[0])
      const storageRef = firebase.storage().ref('user/img/' + image.name)
      const task = storageRef.put(image)
      task.on('state_changed', (snapshot) => {
        const percentage = snapshot.bytesTransferred / snapshot.totalBytes
        console.log(percentage)
      })

  }

  const handleChange = e => {
    switch (e.target.id) {
      case "Username":
        setUsername(e.target.value);
        break;
      case "Mail":
        setMail(e.target.value);
        break;
      case "Attack":
        setAttack(e.target.value);
        break;
    }
  }

  const handleSubmit = () => {

    const userRef = firebase.database().ref('user/' + id)
    const user = {
      username
    }
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
          value={username}
        />
      </label>

      <label> Mail
        <input
          type="text"
          onChange={handleChange}
          id="Mail"
          value={mail}
        />
      </label>

      <label> Special Attack
        <input
          type="text"
          onChange={handleChange}
          id="Attack"
          value={attack}
        />
      </label>

      {image && <img src={image} alt=""/>}
      <div className="uploader"></div>
      <input type="file" id="fileButton" onChange={e => handleImageInput(e)}/>

      <button type="submit" onClick={handleSubmit}>Submit</button>

    </div>
  );
}

export default Settings;