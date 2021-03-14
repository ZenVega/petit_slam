import React, { useState } from 'react'

import { auth } from '../../backend/firebase'
import { useDispatch } from 'react-redux'
import { openLogin, login, openVerifyEmail } from '../../actions/index'
import {verifyEmail} from './Register'



function Login() {
  const [inputError, setInputError] = useState(false)
  const dispatch = useDispatch()


  const loginHandler = e => {
    e.preventDefault();
    setInputError(false)

    const email = e.target['login-email'].value
    const password = e.target['login-password'].value

    auth.signInWithEmailAndPassword(email, password).then(cred => {
      if(cred.user.emailVerified){
        dispatch(openLogin(false))
      } else {
        dispatch(openLogin(false))
        verifyEmail()
        dispatch(openVerifyEmail(true))
      }

    }).catch(error => {
      setInputError(true)
    })

  }


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