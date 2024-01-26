import React, { useEffect, useState } from "react";
import SearchComp from "../components/SearchComp";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addFavorites,
  // Product,
  fetchFail,
  fetchStart,
  getSuccessProduct,
} from "../features/productsSlice";
import { EventFunc, Product, Products, VoidFunc } from "../models/models";
import Card from "../components/Card";
import { toastSuccessNotify, toastWarnNotify } from "../helper/ToastNotify";

// ! 5
// export interface Products {
//   products: Product[];
//   total: number;
//   skip: number;
//   limit: number;
// }

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const { loading, error, productsList, favorites } = useAppSelector(
    (state) => state.products
  );

  const getData = async () => {
    dispatch(fetchStart());
    //! 2
    try {
      const { data } = await axios.get<Products>(
        // "https://dummyjson.com/products/search?q=phone"
        `https://dummyjson.com/products/search?q=${search}`
      );
      console.log(data.products);
      dispatch(getSuccessProduct(data.products));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  //! 4
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value);
  // };

  const handleChange: EventFunc = (e) => {
    setSearch(e.target.value);
  };

  //! 7
  // const handleAdd = (product: Product) => {
  //   if (favorites.filter((item) => item.id === product.id).length === 0) {
  //     dispatch(addFavorites(product));
  //   }
  // };

  // ! 8
  // ! 9
  // ! 10
  const handleAdd = (product: Product) => {
    if (favorites.filter((item) => item.id === product.id).length === 0) {
      dispatch(addFavorites(product));
      toastSuccessNotify("Products added to favorites!");
    } else {
      toastWarnNotify("The Product has already been added!");
    }
  };

  //! 1
  //! 3

  return (
    <div>
      <SearchComp handleChange={handleChange} />
      {loading ? (
        <div className="mt-52">
          <p className="text-center text-red-600">Products loading...</p>
        </div>
      ) : error ? (
        <div className="mt-52">
          <p className="text-center text-red-600">Something went wrong</p>
        </div>
      ) : (
        //! 6
        <div className="flex justify-center items-center flex-wrap gap-5 p-5">
          {productsList.map((item) => (
            <Card
              key={item.id}
              text="Add to favorites"
              item={item}
              handleFunc={handleAdd}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

