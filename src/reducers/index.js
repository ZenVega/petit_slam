import headerReducer from './header';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  header: headerReducer

})


export default allReducers;