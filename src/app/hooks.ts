import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// ! 1
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// ! 1 JS de direk useSelector olarak cagiririz. useDispatxh ve useSelector type ini her yerde belirtmene gerek yok. onun yerine burada tanit ve useAppDispatch ve useAppSelector olarak her yerdr kullan. ben burada type in useAppdispatch den geldigini anlayacagim sen AppDispatch kullandiginda. useAppSelector icinde ayni sey gecerli. boylrlikle bunlari bir custom hook haline getir ve her yerde kullan. SONRA SLICE i ollusturalim, features/productsSlice.ts klasöru ve dosyasi acalim.
