const basketReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_QTY_ITEM':
      return state.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
    case 'MINUS_QTY_ITEM':
      return state.map(item =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    case 'REMOVE_FROM_BASKET':
      return state.filter(item => item.id !== action.payload);
    case 'CLEAR_BASKET':
      return [];
    default:
      return state;
  }
};

export default basketReducer;
