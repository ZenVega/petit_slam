import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import firebase from '../../firebase'

import { openRegistration, openRegistrationSuccess } from '../../actions/index'

export default function Register() {
  const dispatch = useDispatch()
  const [mail1Error, setMail1Error] = useState(false)
  const [mail2Error, setMail2Error] = useState(false)
  const [password1Error, setPassword1Error] = useState(false)
  const [password2Error, setPassword2Error] = useState(false)


  const signUp = e => {
    e.preventDefault();
    setMail1Error(false)
    setMail2Error(false)
    setPassword1Error(false)
    setPassword2Error(false)

    const email = e.target['signup-email'].value
    const password = e.target['signup-password'].value
    const passwordConfirm = e.target['signup-password-confirm'].value
    console.log('pw', passwordConfirm == password)

    if (password === passwordConfirm) {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
        dispatch(openRegistration(false))
      }).then(() => {
        dispatch(openRegistrationSuccess(true))
      }).catch(error => {
        console.log(error.message)
        if (error.message === "The email address is badly formatted.") {
          setMail1Error(true)
        } else if (error.message === "The email address is already in use by another account.") {
          setMail2Error(true)
        } else if (error.message === "Password should be at least 6 characters") {
          setPassword2Error(true)

        }
      })
    } else {
      console.log('false')
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

          <label> password
            <input type="text" name="password" id="signup-password" />
          </label>
          <label > confirm password
            <input type="text" name="password-confirm" id="signup-password-confirm" />
          </label>

          <button type="submit" >Sign Up</button>
        </form>
        {password1Error && <p id="password-error-1" className="input-error" >passwords don't match</p>}
        {password2Error && <p id="password-error-2" className="input-error" >password needs at least 6 characters</p>}
        {mail1Error && <p id="mail-error-1" className="input-error" >incorrect mail</p>}
        {mail2Error && <p id="mail-error-2" className="input-error" >mail already registered</p>}


      </div>
    </div>
  )
}
