import React from 'react'
import { useDispatch } from 'react-redux'
import firebase from '../../firebase'

import { openRegistrationSuccess } from '../../actions/index'

export default function Register() {
  const dispatch = useDispatch()

  return (
    <div className="Modal">
      <div className="modal-container registration-success">
        <h1>Du bist drin</h1>
        <button onClick={() => dispatch(openRegistrationSuccess(false))}>Okcool</button>
      </div>
    </div>
  )
}
