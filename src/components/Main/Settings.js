import React, { useState } from 'react';

import firebase from '../../firebase'

function Settings() {

  const [username, setUsername] = useState('')
  const [mail, setMail] = useState('')
  const [attack, setAttack] = useState('')

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

    const userRef = firebase.database().ref('user')
    const user = {
      username,
      mail,
      attack
    }
    userRef.push(user)
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

      <button type="submit" onClick={handleSubmit}>Submit</button>

    </div>
  );
}

export default Settings;