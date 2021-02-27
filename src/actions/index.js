export const login = user => {
  return {
    type: 'LOG_IN',
    payload: user
  }
}

export const logout = () => {
  return {
    type: 'LOG_OUT'
  }
}

export const openLogin = bool => {
  return {
    type: 'LOGIN_OPEN',
    payload: bool
  }
}

export const openRegistration = bool => {
  return {
    type: 'REGISTRATION_OPEN',
    payload: bool
  }
}

export const openRegistrationSuccess = bool => {
  return {
    type: 'REGISTRATION_SUCCESS_OPEN',
    payload: bool
  }
}