// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

const loadStateFromLocalStorage = () => {
  try {
    const auth = localStorage.getItem('auth');
    const filters = localStorage.getItem('filters');

    return {
      ...(auth ? { auth: JSON.parse(auth) } : {}),
      ...(filters ? { filters: JSON.parse(filters) } : {}),
    };
  } catch (e) {
    console.warn('Failed to load state from localStorage:', e);
    return undefined;
  }
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadStateFromLocalStorage(),
});

export default store;
