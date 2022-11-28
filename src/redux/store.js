import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducers/contactsReducer';
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
import { filterReducer } from './reducers/filterReducer';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const combineReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistReducers = persistReducer(persistConfig, combineReducer);

export const store = configureStore({
  reducer: persistReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
