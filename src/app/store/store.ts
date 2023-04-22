import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './users/models/auth-slice';
import { categoriesApi } from './categories';
import { dishesApi } from './dishes';
import { favoritesApi } from './favorites';
import { authApi } from './users';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [dishesApi.reducerPath]: dishesApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    user: persistedReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    categoriesApi.middleware,
    dishesApi.middleware,
    favoritesApi.middleware,
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
