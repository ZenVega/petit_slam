import React, { useState } from 'react'

import firebase from '../../firebase'
import { useDispatch } from 'react-redux'
import { openLogin, login } from '../../actions/index'

function Login() {
  const [inputError, setInputError] = useState(false)

  const loginHandler = e => {
    e.preventDefault();
    setInputError(false)

    const email = e.target['login-email'].value
    const password = e.target['login-password'].value
    console.log(email, password)

    firebase.auth().signInWithEmailAndPassword(email, password).then(cred => {
      console.log(cred.user)
      dispatch(login("Ursi"))

    }).then(() => {
      dispatch(openLogin(false))

    }).catch(error => {
      console.log('error', error)
      setInputError(true)
    })

  }


  const dispatch = useDispatch()
  return (
    <div className="Modal">
      <div className="modal-container login">
        <button className="close-modal-button" onClick={() => dispatch(openLogin(false))} >x</button>
        <h2>Login</h2>
        <h3>Do you already have an account?</h3>
        <form onSubmit={e => loginHandler(e)}>
          <label >
            <input type="text" id="login-email" name="email" />
          </label>

          <label >
            <input type="text" type="password" name="password" id="login-password" />
          </label>

          <button type="submit">Log In</button>
          {inputError && <p id="inputError" className="input-error" >whoops, sth is not right</p>}
        </form>
      </div>
    </div>
  )
}

export default Login