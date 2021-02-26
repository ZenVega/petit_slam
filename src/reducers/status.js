const initialUserState = {
  "loggedIn": false,
  "user": undefined
} 

export const userStatus = (state = initialUserState, action) => {
  switch(action.type){
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