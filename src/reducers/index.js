import { userStatus, modalOpen, activeUser } from './status';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  userStatus,
  modalOpen,
  activeUser

})


export default allReducers;