import React, { useState } from 'react'


import { useDispatch } from 'react-redux'
import { openLogin } from '../../actions/index'
import { useFirebase } from "react-redux-firebase";



function Login() {
  const [inputError, setInputError] = useState(false)
  const dispatch = useDispatch()
  const firebase = useFirebase();


  const loginHandler = e => {
    e.preventDefault();
    setInputError(false)

    const email = e.target['login-email'].value
    const password = e.target['login-password'].value

    firebase.login({
      email,
      password
    })
    .then(cred => {
      dispatch(openLogin(false))
    }).catch(err => {
      console.log(err.message)
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