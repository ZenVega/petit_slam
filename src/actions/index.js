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


export const setActiveUser = data => {
  return {
    type: 'ACTIVE_USER',
    payload: data
  }
}

//OPEN MODALS 
export const openLogin = bool => {
  return {
    type: 'LOGIN_OPEN',
    payload: bool
  }
}

export const toggleInviteFriends = bool => {
  return {
    type: 'TOGGLE_INVITE_FRIENDS',
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

export const openVerifyEmail = bool => {
  return {
    type: 'VERIFY_EMAIL_OPEN',
    payload: bool
  }
}

export const openNewLeague = bool => {
  return {
    type: 'NEW_LEAGUE_OPEN',
    payload: bool
  }
}