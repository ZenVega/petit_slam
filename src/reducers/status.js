const initialUserState = {
  "loggedIn": false,
  "user": undefined
}

export const userStatus = (state = initialUserState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        "loggedIn": true,
        "user": action.payload
      }
    case 'LOG_OUT':
      return {
        "loggedIn": false,
        "user": undefined
      }
    default:
      return state
  }
}


const initialModalState = {
  "loginOpen": false,
  "registerOpen": false,
  "registerSuccessOpen": false,
  "verifyMailOpen": false
}

export const modalOpen = (state = initialModalState, action) => {
  switch (action.type) {

    case 'LOGIN_OPEN':
      return {
        ...state,
        "loginOpen": action.payload
      }

    case 'REGISTRATION_OPEN':
      return {
        ...state,
        "registerOpen": action.payload
      }

    case 'REGISTRATION_SUCCESS_OPEN':
      return {
        ...state,
        "registerSuccessOpen": action.payload
      }
    case 'VERIFY_EMAIL_OPEN':
      return {
        ...state,
        "verifyMailOpen": action.payload
      }
    case 'NEW_LEAGUE_OPEN':
      return {
        ...state,
        "newLeagueOpen": action.payload
      }

    default:
      return state
  }
}

const initialActiveUser = {
  "username": undefined,
  "id": undefined,
  "email": undefined
}

export const activeUser = (state = initialActiveUser, action) => {
  switch (action.type) {
    case 'ACTIVE_USER':
      return action.payload
    default:
      return state
  }
}