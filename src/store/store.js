import { configureStore } from '@reduxjs/toolkit';
// Import the `thunk` middleware
import thunk from 'redux-thunk';
import reducer from './reducer';

export const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
