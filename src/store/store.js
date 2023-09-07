import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import usersReducer from '../reducers/users';

const store = configureStore({
  reducer: usersReducer
});

store.subscribe(() => {
 console.log('store data:', store.getState());
});

export default store;