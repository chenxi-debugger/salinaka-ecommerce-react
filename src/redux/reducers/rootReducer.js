import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  basket: basketReducer,
  auth: authReducer
});

export default rootReducer;
