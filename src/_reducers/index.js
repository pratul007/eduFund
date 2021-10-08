import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import funds from './funds.reducer';
import fundDetail from "./fundDetails.reducer";
import {update} from "./update.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  funds,
  update,
  fundDetail
});

export default rootReducer;