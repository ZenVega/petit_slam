import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'

import ImageLoader from './Settings/ImageLoader'
import {setActiveUser} from './../../actions/index'

import { dbRef, storageRef } from '../../backend/firebase'

function Settings() {

  const activeUser = useSelector(state => state.activeUser)
  const [imageFile, setImageFile] = useState()
  const userRef = dbRef.ref('users/' + activeUser.id)
  const storageUserRef = storageRef.ref(`users/${activeUser.id}`)
  const dispatch = useDispatch()

  
  const handleChange = e => {
    switch (e.target.id) {
      case "Username":
        dispatch(setActiveUser({...activeUser,"username":e.target.value}));
        break;
        case "Attack":
        dispatch(setActiveUser({...activeUser,"attack":e.target.value}));
        break;
    }
  }

  const handleSubmit = () => {
    handleImageUpload()
    userRef.set(activeUser)
  }

  const handleImageUpload = () => {
    const uploadToken = renameImage(imageFile)
    storageUserRef.child(uploadToken).put(imageFile)
    .then(snapshot => {
      return snapshot.ref.getDownloadURL()
    })
    .then(url => {
      const userToUpload = {...activeUser, ...{"profilePic": url}}
      dispatch(setActiveUser(userToUpload))
    })
  }
  

  const renameImage = image => {
    const slash = image.type.indexOf('/')+1
    const type = image.type.substring(slash)
    const newName = `profilePic.${type}`
    return newName
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
          value={activeUser.username}
        />
      </label>

      <label> Special Attack
        <input
          type="text"
          onChange={handleChange}
          id="Attack"
          value={activeUser.attack}
        />
      </label>

      <div> 
        <p>{activeUser.email}</p>
        <button>change mail</button>
      </div>


      {activeUser.id && <ImageLoader 
        setImageFile={setImageFile}/>
        }

      <button type="submit" onClick={handleSubmit}>Submit</button>

    </div>
  );
}

export default Settings;