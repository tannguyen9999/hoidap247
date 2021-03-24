import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loadingSile';

const rootReducer = {
  loading: loadingReducer,
};

const store = configureStore({
  reducer: rootReducer
});

export default store;
