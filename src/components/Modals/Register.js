import React from 'react'
import { useDispatch } from 'react-redux'
import firebase from '../../firebase'

import { openRegistration, openRegistrationSuccess } from '../../actions/index'

export default function Register() {
  const dispatch = useDispatch()


  const signUp = e => {
    e.preventDefault();

    const email = e.target['signup-email'].value
    const password = e.target['signup-password'].value
    const passwordConfirm = e.target['signup-password-confirm'].value

    firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
      dispatch(openRegistration(false))
    }).then(()=> {
      dispatch(openRegistrationSuccess(true))
    })


  }


  return (
    <div className="Modal">
      <div className="modal-container">
        <button className="close-modal-button" onClick={() => dispatch(openRegistration(false))} >x</button>


        <h2>Register</h2>

        <form id="signup-form" onSubmit={e => signUp(e)}>
          <label > email
            <input type="text" id="email" name="signup-email" />
          </label>

          <label> password
            <input type="text" name="password" id="signup-password" />
          </label>
          <label > confirm password
            <input type="text" name="password-confirm" id="signup-password-confirm" />
          </label>

          <button type="submit" >Sign Up</button>
        </form>


      </div>
    </div>
  )
}
