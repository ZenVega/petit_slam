import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import ImageLoader from './Settings/ImageLoader'
import {setActiveUser} from './../../actions/index'

import { dbRef } from '../../backend/firebase'

function Settings() {

  const activeUser = useSelector(state => state.activeUser)
  const userRef = dbRef.ref('users/' + activeUser.id)
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
    userRef.set(activeUser)
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
        <p>activeUser.email</p>
        <button>change mail</button>
      </div>


      {activeUser.id && <ImageLoader />}

      <button type="submit" onClick={handleSubmit}>Submit</button>

    </div>
  );
}

export default Settings;