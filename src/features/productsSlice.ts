import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/models";
// import type { RootState } from "../app/store"; //! burayi basta duzelt.

// ! 3

// ! 8
// export interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   brand: string;
//   category: string;
//   thumbnail: string;
//   images: string[];
// }

//! 2
interface ProductsState {
  loading: boolean;
  error: boolean;
  favorites: Product[];
  productsList: Product[];
}

//! 2
const initialState: ProductsState = {
  loading: false,
  error: false,
  favorites: [],
  productsList: [],
};

export const productsSlice = createSlice({
  name: "products",
  //! 1
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = false;
    },
    //! 4
    getSuccessProduct(state, action: PayloadAction<Product[]>) {
      state.loading = false;
      state.error = false;
      state.productsList = action.payload;
    },
    //! 5
    addFavorites(state, action: PayloadAction<Product>) {
      state.favorites = [...state.favorites, action.payload];
    },
    //! 6
    removeFavorites(state, action: PayloadAction<Product[]>) {
      state.favorites = action.payload;
    },
    //! 7
    fetchFail(state) {
      state.loading = false; //! ?
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  addFavorites,
  removeFavorites,
  getSuccessProduct,
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;

