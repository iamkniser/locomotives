import { configureStore } from '@reduxjs/toolkit';
import locomotiveReducer from './locomotiveSlice';

export default configureStore({
  reducer: {
    locomotives: locomotiveReducer,
  },
});
