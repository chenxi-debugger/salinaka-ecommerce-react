import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import authReducer from './authReducer';
import filtersReducer from './filtersReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  basket: basketReducer,
  auth: authReducer,
  filters: filtersReducer, 
  products: productsReducer,
});


export default rootReducer;
