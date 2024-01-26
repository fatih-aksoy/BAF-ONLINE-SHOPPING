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

// ! 1 - reducers kismina gelelim. icini silelim.

// ! 2 - interface de type leri ve initial state durumlari tanimlayalim. interface icerisinde, favorites ve productsList type larini ogrnmek icin API ye bakariz. https://dummyjson.com/docs/products  search products kismina bakariz. buradaki response yi kopyalariz. Quicktype gideriz. https://app.quicktype.io/ prducts json buraya koplalariz. virgullere dikkat ederiz, typescript ti seceriz. donusunce export interface {....} kismini kopyalariz.

// ! 3 - kopyaladigimizi buraya yapistiririz. sonra favorites ve productsList in type sini yazariz. sonra reducers icini yazariz. sonra api ye istek aticak gibi dusunelim. Ne olucak? api den veri gelecek.

// ! 4 - sonra api ye istek aticak gibi dusunelim. Ne olucak? api den veri gelecek. api den bir data gelecek. senin alacagin veri tipi Product[]

// ! 5 - bu kisim da add favorite kismina bakilacak. burda elemanin kendisini gonderecegiz. her tikladigimda tikladigimi gondericem store a. sen burda products type ni al, array almayacak. spread ozeelligi ile oncekileri  verileri tut ve yeni gelen action payload i yerlestir.

// ! 6 - remove islemi yapalim, iki turlu yapilabilir. ister butun veriden silip burya array gondeririz, veya id gonderir burada sileriz, yada obje gonderir burada sileriz. biz array gonderelim burda. number karsilarsiniz, id ile filtreleyip favorites olusturabiliriz.

// ! 7 - burada da fetchFail yazariz. export const {fetchStart, fetchFail, addFavorites, removeFavorites,getSuccessProduct,} = ProductsSlice.actions; artik slice cimiz hazir. Slice mizda reducer leimizi olusturduk.  Simdi ben bunu componentlerim de saylarimda nasil kullanacagim? son kod satiri "export const productsReducer = ProductsSlice.reducer;" biciminde yazariz. eskiden "export default ......" idi. Sonra provider ile yapimimi sarmallamaliyim. bunu icin burda App.tsx e giderim.      8. maddeye hemen gecme.

// ! 8 export interface Product {} kismini da kopyalayip yoruma alip models.ts ye yapistiririz. models.ts ye gidelim.
