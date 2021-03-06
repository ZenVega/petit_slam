import React from 'react'
import { useDispatch } from 'react-redux'

import { openVerifyEmail } from '../../actions/index'

export default function Register() {
  const dispatch = useDispatch()

  return (
    <div className="Modal">
      <div className="modal-container verify-email">
        <h1>Just one step missing</h1>
        <p>We've send you an email. Please verify your adress</p>
        <button onClick={() => dispatch(openVerifyEmail(false))}>Okcool</button>
      </div>
    </div>
  )
}
