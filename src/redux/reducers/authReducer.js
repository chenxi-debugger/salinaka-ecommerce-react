// src/redux/reducers/authReducer.js

// Load initial state from local storage
const loadAuthFromLocalStorage = () => {
    try {
        const serializedAuth = localStorage.getItem('auth');
        if (serializedAuth === null) {
            return null;
        }
        const parsedAuth = JSON.parse(serializedAuth);
        console.log('Loaded auth from local storage:', parsedAuth); // Debug log
        return parsedAuth;
    } catch (err) {
        console.error('Error loading auth from local storage:', err);
        return null;
    }
};

// Save auth state to local storage
const saveAuthToLocalStorage = (auth) => {
    try {
        console.log('Saving auth to local storage:', auth); // Debug log
        const serializedAuth = JSON.stringify(auth);
        localStorage.setItem('auth', serializedAuth);
    } catch (err) {
        console.error('Error saving auth to local storage:', err);
    }
};

const authReducer = (state = loadAuthFromLocalStorage(), action) => {
    let newState;
    switch (action.type) {
        case 'LOGIN':
            newState = action.payload;
            break;
        case 'LOGOUT':
            newState = null;
            localStorage.removeItem('auth');
            localStorage.removeItem('basket'); // Optional: clear basket on logout
            break;
        default:
            return state;
    }

    if (newState !== undefined) {
        saveAuthToLocalStorage(newState);
    }
    return newState !== undefined ? newState : state;
    
};

export default authReducer;