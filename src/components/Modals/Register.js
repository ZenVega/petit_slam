import React from 'react'

export default function Register() {
  return (
    <div className="Modal">
      <div className="modal-container">
        <h2>Register</h2>

        <form action="">
          <label htmlFor="email">
            <input type="text" id="email" name="email" />
          </label>

          <label htmlFor="password">
            <input type="text" name="password" id="password" />
          </label>
          <label htmlFor="password-confirm">
            <input type="text" name="password-confirm" id="password-confirm" />
          </label>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  )
}
