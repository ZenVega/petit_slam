import { userStatus, modalOpen, activeUser } from './status';

import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'

const allReducers = combineReducers({
  firebase: firebaseReducer,
  userStatus,
  modalOpen,
  activeUser

})


export default allReducers;