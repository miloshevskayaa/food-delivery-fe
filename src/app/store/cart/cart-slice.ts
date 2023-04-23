import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ProductInCart } from './models';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    productsInCart: [] as ProductInCart[],
  },
  reducers: {
    setCartProducts: (state, action: PayloadAction<ProductInCart>) => {
      const productInCart = state.productsInCart.find(
        item => item.dishId === action.payload.dishId,
      );

      if (productInCart) {
        productInCart.amount += 1;
      } else {
        state.productsInCart.push({
          ...action.payload,
          amount: 1,
        });
      }
    },
    removeQuantityCartProduct: (
      state,
      action: PayloadAction<ProductInCart>,
    ) => {
      if (action.payload.amount === 1) {
        state.productsInCart.splice(
          state.productsInCart.indexOf(action.payload) - 1,
          1,
        );
      } else {
        for (const product of state.productsInCart) {
          if (product.dishId === action.payload.dishId) {
            product.amount -= 1;

            break;
          }
        }
      }
    },
    dropProductFromCart: (state, action: PayloadAction<ProductInCart>) => {
      state.productsInCart.splice(
        state.productsInCart.indexOf(action.payload) - 1,
        1,
      );
    },
    resetCart: state => {
      state.productsInCart.length = 0;
    },
  },
});

export const getProductsInCart = (state: RootState) =>
  state.cart.productsInCart;

export const {
  dropProductFromCart,
  removeQuantityCartProduct,
  setCartProducts,
  resetCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
