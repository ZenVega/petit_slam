import React from 'react'
import { useDispatch } from 'react-redux'
import { openLogin } from '../../actions/index'

function Login() {
  const dispatch = useDispatch()
  return (
    <div className="Modal">
      <div className="modal-container">
        <button className="close-modal-button" onClick={() => dispatch(openLogin(false))} >x</button>
        <h2>Login</h2>
        <h3>Do you already have an account?</h3>
        <form action="">
          <label htmlFor="email">
            <input type="text" id="email" name="email" />
          </label>

          <label htmlFor="password">
            <input type="text" name="password" id="password" />
          </label>

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login