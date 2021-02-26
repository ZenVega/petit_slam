import { userStatus, modalOpen } from './status';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  userStatus,
  modalOpen

})


export default allReducers;