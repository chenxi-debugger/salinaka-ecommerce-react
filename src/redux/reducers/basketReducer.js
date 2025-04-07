// src/redux/reducers/basketReducer.js

// Load initial state from local storage
const loadBasketFromLocalStorage = () => {
    try {
        const serializedBasket = localStorage.getItem('basket');
        if (serializedBasket === null) {
            return [];
        }
        return JSON.parse(serializedBasket);
    } catch (err) {
        console.error('Error loading basket from local storage:', err);
        return [];
    }
};

// Save basket to local storage
const saveBasketToLocalStorage = (basket) => {
    try {
        const serializedBasket = JSON.stringify(basket);
        localStorage.setItem('basket', serializedBasket);
    } catch (err) {
        console.error('Error saving basket to local storage:', err);
    }
};

const basketReducer = (state = loadBasketFromLocalStorage(), action) => {
    let newState;
    switch (action.type) {
        case 'ADD_TO_BASKET': {
            const item = action.payload;
            const existingProduct = state.find(
                i =>
                    i.id === item.id &&
                    i.selectedSize === item.selectedSize &&
                    i.selectedColor === item.selectedColor
            );
            if (existingProduct) {
                newState = state.map(i =>
                    i.id === item.id &&
                    i.selectedSize === item.selectedSize &&
                    i.selectedColor === item.selectedColor
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            } else {
                newState = [...state, item];
            }
            break;
        }

        case 'ADD_QTY_ITEM': {
            const { id, selectedSize, selectedColor } = action.payload;
            newState = state.map(item =>
                item.id === id &&
                item.selectedSize === selectedSize &&
                item.selectedColor === selectedColor
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            break;
        }

        case 'MINUS_QTY_ITEM': {
            const { id, selectedSize, selectedColor } = action.payload;
            newState = state.map(item =>
                item.id === id &&
                item.selectedSize === selectedSize &&
                item.selectedColor === selectedColor &&
                item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
            break;
        }

        case 'REMOVE_FROM_BASKET': {
            const { id, selectedSize, selectedColor } = action.payload;
            newState = state.filter(
                item =>
                    !(
                        item.id === id &&
                        item.selectedSize === selectedSize &&
                        item.selectedColor === selectedColor
                    )
            );
            break;
        }

        case 'CLEAR_BASKET':
            newState = [];
            break;

        default:
            return state;
    }

    // Save the new state to local storage after each action
    if (newState) {
        saveBasketToLocalStorage(newState);
    }
    return newState || state;
};

export default basketReducer;