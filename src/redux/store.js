import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { optionReducer } from './add-pet/optionSlice';
import { personalDetailsReducer } from './add-pet/personalDetailsSlice';
import { moreInfoReducer } from './add-pet';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const commentsPersistConfig = {
  key: "comments",
  storage,
  whitelist: ["data"],
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  option: optionReducer,
  personalDetails: personalDetailsReducer,
  moreInfo: persistReducer(commentsPersistConfig, moreInfoReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
