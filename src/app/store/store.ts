import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartReducer, ordersApi } from './cart';
import { categoriesApi } from './categories';
import { dishesApi } from './dishes';
import { favoritesApi } from './favorites';
import { promocodesApi } from './promocodes';
import { passwordApi } from './restore-password';
import { authApi, userReducer } from './users';

const persistUserConfig = {
  key: 'user',
  storage,
};

const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

const persistCartConfig = {
  key: 'cart',
  storage,
};

const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [dishesApi.reducerPath]: dishesApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [promocodesApi.reducerPath]: promocodesApi.reducer,
    [passwordApi.reducerPath]: passwordApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    cart: persistedCartReducer,
    [authApi.reducerPath]: authApi.reducer,
    user: persistedUserReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    categoriesApi.middleware,
    dishesApi.middleware,
    favoritesApi.middleware,
    promocodesApi.middleware,
    passwordApi.middleware,
    ordersApi.middleware,
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
