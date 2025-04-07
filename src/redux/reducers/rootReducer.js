import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import authReducer from './authReducer';
import filtersReducer from './filtersReducer';

const rootReducer = combineReducers({
  basket: basketReducer,
  auth: authReducer,
  filters: filtersReducer, 
});


export default rootReducer;
