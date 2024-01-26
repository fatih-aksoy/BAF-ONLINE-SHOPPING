import React from "react";
import { EventFunc } from "../models/models";
//! 0
//! 1
//! 3

// ! 4
// interface ISearchComp {
//   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

interface ISearchComp {
  handleChange: EventFunc;
}

// ! 2
const SearchComp: React.FC<ISearchComp> = ({ handleChange }) => {
  return (
    <div className="mt-5">
      <div className="relative w-6/12 mx-auto">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block outline-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-900 focus:border-gray-900 focus:bg-gray-700 focus:text-white"
          placeholder="Search products.. "
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchComp;

// ! 0 - Burda searchComp u hazirladik ama hemen 1. maddeye gitme, arada baska isler var :-)

// ! 1 - Home sayfasinda SearchComp a props gonderme asamasinda, burada interface yazmak ile baslarim.

// ! burada searchComp react functional component tir ve props un type i nerden gelecek? ISearchComp dan gelecek.  const SearchComp:React.FC<ISearchComp> = () => {}. sonra artik propslarin ismini yazabiliriz,

// ! interface ISearchComp { handleChange:(e:React.ChangeEvent<HTMLInputElement)=>void} burda void bir islem alir, yani return u yok. Naptik? burada da fonk tipini belirttik. inputta sifirlama yapmaya gerek yok. o yuzden value yazmiyoruz.

// ! 2 - Home comp dan buraya uctuk ve artik props kisminda ve input kisminda handleChange={handleChange} yazabiliriz.

// ! 3 - farketti iseniz React.ChangeEvent<HTMLInputElement> cok yerde kullnadik. TodoApp da oldugu gibi biz bunu global bir alana alabilir miyiz. src/models/models.ts acariz.

// ! 4 - burayi global ulasim icin yorum alir ve EventFunc olarak degistiririz. import { EventFunc } from "../models/models";  import etmeyi unutma. sonra Home comp a gidelim
