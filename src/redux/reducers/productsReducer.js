import productsData from '../../constants/products';// Import products from the constants file

const initialState = {
  items: productsData, // Load products from products.js
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default productsReducer;