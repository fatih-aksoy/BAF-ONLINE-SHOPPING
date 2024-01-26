import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Card from "../components/Card";
import { Product, VoidFunc } from "../models/models";
import { removeFavorites } from "../features/productsSlice";
import { toastSuccessNotify } from "../helper/ToastNotify";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  console.log(favorites);

  // const handleRemove=(product:Product)=>{}

  const handleRemove: VoidFunc = (product) => {
    const newData: Product[] = favorites.filter(
      (item) => item.id !== product.id
    );
    // ! 1
    dispatch(removeFavorites(newData));
    toastSuccessNotify("Products has been removed...");
  };
  return (
    <div>
      <h1 className="font-bold text-2xl text-white text-center m-3">
        My Favorites Products
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-5 p-5">
        {favorites.map((item) => (
          <Card
            key={item.id}
            text="Remove"
            item={item}
            // handleFunc={handleRemove}
            handleFunc={handleRemove}
          />
        ))}
        {/* //! 2 */}
        {favorites.length === 0 && (
          <h3 className="font-bold text-2xl text-red-500 text-center m-5">
            No favorites...
          </h3>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;

// ! Card.jsx den buray geldik. bakalim favorite lerimiz geliyor mu? bunun icin useAppSelector hook unu kullaniriz. const { favorites } = useAppSelector((state) => state.products) yazdikdan sonra console.log(favorites) yazalim.  herhangi bir urunu "add to Favorites" e tiklayarak secelim ve browser da favorites sayfasina gidip console.log(favorites) diye bakalim. urunler favorites sayfasina geliyor mu?

// ! calisiyorsa Home.jsx e gidip map() dondurulen kismi kopyalayalim. buraya geri gelelim. Return icine yapistiralim. artik productsList.map((item) DEGIL  {favorites.map((item) olucak.

// ! Buradaki card yapisinda artik text="remove" yazicaz. const handleRemove u yazalim simdi. model.ts de bunu icin bir interface olusturalim. models.ts ye git. models.ts den geldikten sonra artik  const handleRemove=(product:Product)=>{} yazmak yerine soyle yazalim; const handRemove:Void=(product)  product tipini artik otomatik olarak algiliyor.

// ! aslina bakarsaniz Home.tsx deki const handleAdd kismini da buna bezner uyarlayabiliriz. Home.tsx e gidelim. Home.tsx de VoidFunc isini halletik. buraya geldik. filtreleme islemini burda yapacagiz. dispatch i cagir burada. productsSlice dan removeFavorites i kopyala. ve bu bize newData ui dondurecek, dispatch(removeFavorites(newData));

// ! hemen iki ust satirdaki const newData yi soyle yaz: const newData:Product[]. oncesinde newData nin uzerine mouse ile gelirsen Product[] yi gorursun. sonra handleFunc={handleRemove kismini yorumdan kaldiralim. } artik favorite page de remove basinca siliyor. :-)

// ! artik burda proje bitti daha sonra react-toastify islemlerine gecelim.

// ! 1 -  Home.tsx den buraya geldik. Toastify icin, product has been removed u ayarladik. 2 ye hemen gitme

// ! 2 - No favorits... ayarlariz.
