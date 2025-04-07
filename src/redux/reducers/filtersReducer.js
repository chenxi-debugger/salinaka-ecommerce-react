const defaultState = {
    values: {
      brand: 'All Brands',
      sortBy: 'None',
      priceRange: [50, 700],
    },
    showPopup: false
  };
  
  const filtersReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'SET_FILTERS':
        return { ...state, values: action.payload };
      case 'OPEN_FILTER_POPUP':
        return { ...state, showPopup: true };
      case 'CLOSE_FILTER_POPUP':
        return { ...state, showPopup: false };
      default:
        return state;
    }
  };
  
  export default filtersReducer;
  