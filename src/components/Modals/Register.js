import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {auth, dbRef} from '../../backend/firebase'
import { useFirebase } from "react-redux-firebase";

import { openRegistration, openVerifyEmail, logout } from '../../actions/index'

export const verifyEmail = () => {

  const user = auth.currentUser;
  
  user.sendEmailVerification().then(function() {
  }).catch(function(error) {
    console.log(error.message)
  });
}


export default function Register() {
  const dispatch = useDispatch()
  const [mail1Error, setMail1Error] = useState(false)
  const [mail2Error, setMail2Error] = useState(false)
  const [password1Error, setPassword1Error] = useState(false)
  const [password2Error, setPassword2Error] = useState(false)
  
  const mailSend = false
  const firebase = useFirebase();

  const createNewUser = ({ email, password, username }) => {
    const profilePic = "https://firebasestorage.googleapis.com/v0/b/petit-slam.appspot.com/o/firstSignUp%2Fdefault_logo.png?alt=media&token=7e1a8b93-affe-473d-a546-e0011f6bc70e"
    const attack = ''
    firebase.createUser(
      { email, password },
      { username, email, profilePic, attack }
    )
    .then(user => {
      verifyEmail()
    })
    .then(() => {
      dispatch(openRegistration(false))
      auth.signOut()
      dispatch(logout())
    }).then(() => {
      dispatch(openVerifyEmail(true))
      mailSend = true
    }).catch(error => {
      if (error.message === "The email address is badly formatted.") {
        setMail1Error(true)
      } else if (error.message === "The email address is already in use by another account.") {
        setMail2Error(true)
      } else if (error.message === "Password should be at least 6 characters") {
        setPassword2Error(true)
      }
    })
  }
  



  const signUp = e => {
    e.preventDefault();
    setMail1Error(false)
    setMail2Error(false)
    setPassword1Error(false)
    setPassword2Error(false)

    const email = e.target['signup-email'].value
    const username = e.target['signup-name'].value
    const password = e.target['signup-password'].value
    const passwordConfirm = e.target['signup-password-confirm'].value

    if (password === passwordConfirm) {

      createNewUser({
        email,
        password,
        username
      })

    } else {
      setPassword1Error(true)
    }
  }


  return (
    <div className="Modal">
      <div className="modal-container register">
        <button className="close-modal-button" onClick={() => dispatch(openRegistration(false))} >x</button>

        <h2>Register</h2>

        <form id="signup-form" onSubmit={e => signUp(e)}>
          <label > email
            <input type="text" id="email" name="signup-email" />
          </label>
          <label > alias
            <input type="text" id="alias" name="signup-name" />
          </label>

          <label> password
            <input type="text" type="password" name="password" id="signup-password" />
          </label>
          <label > confirm password
            <input type="text" name="password-confirm" type="password" id="signup-password-confirm" />
          </label>

          <button type="submit" >Sign Up</button>
        </form>
        {password1Error && <p id="password-error-1" className="input-error" >passwords don't match</p>}
        {password2Error && <p id="password-error-2" className="input-error" >password needs at least 6 characters</p>}
        {mail1Error && <p id="mail-error-1" className="input-error" >incorrect mail</p>}
        {mail2Error && <p id="mail-error-2" className="input-error" >mail already registered</p>}
        {mailSend && <div className="mailSendOverlay"><p>
          We've send you an email. Please Verify that adress to move on
        </p></div>}


      </div>
    </div>
  )
}
