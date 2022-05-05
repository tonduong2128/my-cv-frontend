import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export default configureStore({
    reducer: {
        api: rootReducer,
    },
    // middleware: getDefaultMiddleware =>
    // getDefaultMiddleware().concat()
});
