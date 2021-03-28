import React, {useState} from 'react';
import { useSelector } from 'react-redux'

import ImageLoader from './ImageLoader'
import { useFirebase } from 'react-redux-firebase'


function Settings() {

  const firebase = useFirebase()
  const storageRef = firebase.storage().ref()

  const profile = useSelector(state => state.firebase.profile)
  const id = useSelector(state => state.firebase.auth.uid)
  const [uploadUser, setUploadUser] = useState(profile)
  const [imageFile, setImageFile] = useState()



  
  const handleChange = e => {
    e.preventDefault()
    switch (e.target.id) {
      case "Username":
        setUploadUser({...uploadUser,"username":e.target.value});
        break;
      case "Attack":
        setUploadUser({...uploadUser,"attack":e.target.value});
        break;
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const uploadToken = renameImage(imageFile)
    storageRef.child(uploadToken).put(imageFile)
    .then(snapshot => {
      return snapshot.ref.getDownloadURL()
    })
    .then(url => {
      const upload = {...uploadUser, "profilePic": url}
      firebase.set(`users/${id}`, upload)
    })
    .catch(err => {
      console.log(err)
    })
  }


  const renameImage = image => {
    const slash = image.type.indexOf('/')+1
    const type = image.type.substring(slash)
    const newName = `users/${id}/profilePic.${type}`
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
          value={uploadUser.username}
        />
      </label>

      <label> Special Attack
        <input
          type="text"
          onChange={handleChange}
          id="Attack"
          value={uploadUser.attack}
        />
      </label>

      <div> 
        <p>{uploadUser.email}</p>
        <button>change mail</button>
      </div>


      <ImageLoader 
        setImageFile={setImageFile}/>
        

      <button type="submit" onClick={handleSubmit}>Submit</button>

    </div>
  );
}

export default Settings;