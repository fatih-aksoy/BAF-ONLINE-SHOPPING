import React from "react";
import { Product } from "../models/models";

interface ICard {
  item: Product;
  text: string;
  handleFunc: (item: Product) => void;
}
// ! 1
const Card: React.FC<ICard> = ({ item, text, handleFunc }) => {
  return (
    <div className="w-10/12 sm:w-6/12 md:w-4/12 lg:w-3/12 flex flex-col justify-between bg-white rounded-lg">
      <div className="p-4 ">
        <h1 className="text-gray-900 uppercase text-xl">{item.title}</h1>
        <p className="text-sm mt-1 text-gray-500 line-clamp-1 hover:line-clamp-none">
          {item.description}
        </p>
      </div>
      <img
        className="p-2 min-h-[150px] max-h-[150px] object-contain"
        src={item.images[0]}
        alt={item.title}
      />
      <div className="flex justify-between items-center bg-gray-700 p-3">
        <h2 className="text-gray-100 font-bold ">${item.price}</h2>
        <button
          className="bg-gray-300 p-1 rounded-lg animate-pulse hover:animate-none"
          onClick={() => handleFunc(item)}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default Card;

// ! Home.jsx deki 6. madde den sonra buray geliriz. card imizda title, description, image, card in altinda ise fiyati ve Add to Favorites butonunu gosteren bir kisim olacak. burda 3 kisim acarsiz. ANA DIV ICERSINDE, bir div, bir img ve bir div. tekrar Home.jsx e donelim...

// ! Home.jsx den geldik ten sonra burada card a css veriririz. burada https://tailwindcss.com/ den faydalaniriz. Burda responsive yapiyi ayarlayacagiz. adresde break point kismina gideriz. css i ayarladiktan sonra buraya prop gondermemiz gerektgini anladik. Home.jsx e gidelim...

//! Simdi Home.jsx de prop gonderme isini halledelim. Burda React.FC kullanicaz. const Card: React.FC<ICard> = ({ item, text, handleFunc })

// ! artik verileri basalim. enson button icince handleFunc yazalim. Home.jsx e geri donelim.

// ! 1 - Home.jsx den Buraya handleFunc props u yazariz; const Card: React.FC<ICard> = ({ item, text, handleFunc })

// ! Ayni card yapisini favorites sayfasinda da kullanacagiz. ama birinde button "add to favorites", digerinde "remove" oluyor.

// ! burda description u kisaltmak icin css de line-clamp-1 kullaniilir. https://tailwindcss.com/docs/line-clamp

// ! Bakalim verilerimiz favoritesPage.tsx e gelecek mi? Simdi favoritesPage.tsx e gidelim. Burdan FAvoritesPage.tsx e gidelim.
