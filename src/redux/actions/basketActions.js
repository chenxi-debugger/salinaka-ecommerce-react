// src/redux/actions/basketActions.js
export const addToBasket = (product) => ({
    type: 'ADD_TO_BASKET',
    payload: product,
});

export const addQtyItem = (id, selectedSize, selectedColor) => ({
    type: 'ADD_QTY_ITEM',
    payload: { id, selectedSize, selectedColor },
});

export const minusQtyItem = (id, selectedSize, selectedColor) => ({
    type: 'MINUS_QTY_ITEM',
    payload: { id, selectedSize, selectedColor },
});

export const removeFromBasket = (id, selectedSize, selectedColor) => ({
    type: 'REMOVE_FROM_BASKET',
    payload: { id, selectedSize, selectedColor },
});

export const clearBasket = () => ({
    type: 'CLEAR_BASKET',
});