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

// ! 1 SearchComp daki islemlerden sonra buraya gelip SearchComp u cagiririz.

// ! 2 burda api den veri cekicez. async/await axios ile yapinca api den veri "data" olarak gelir. https://dummyjson.com/products/search?q=phone burdan veriyi cekicez. sonra state tanimlariz ve initial deger useState("") veririz. degerimiz string olarak gelicek. sonra search islemi icin api de son kismiz backtick icerisinde yazarak dinamik hale getirebiliriz. `https://dummyjson.com/products/search?q=${search}` . Sonra get islemi icin type belirlemesi yapmaliyiz. https://app.quicktype.io/ sayfasina gider ve export interface Products { products: Product[];total:    number; skip:     number;limit:    number;} koplalariz. yani interface tanimlamaliyiz.  const { data } = await axios.get<Products> yazinca gelen veri <Products> a gore donsun.

// ! bu islemnden sonra dispatch hook unu kullaniriz. const dispatch = useAppDispatch(); bu her seferinde type yazmimazi engeller.

// ! sonra dispatch(fetchStart) deriz.

// ! dispatch(getSuccessProduct()); ve bu bizden bir payload bekler. data yazarim fakat data bir tip almali, (data.products) yazarim

// ! catch(error) kisminda fetchFail() i cagiririz.

// ! useEffect() icinde getData() yi cagiririz. ama neye gore cagiricaz? search state tine gore. dependency kismina search yazariz. her search degistiginde napcak? fonksiyon caliscak ve api ye istek aticak.

// ! simdi inputtan veri alalim.  const handleChange... ile baslariz. (e) nin type ini belirtmeliyiz. burada bir change event gerceklesiyor. bu bize input a ait herseyi yakalamami saglar. buraya setSearch() i cagiririz. biz buraya string gondercegimizi belirttik ki bize basta hata verebilir.

// ! sonra bunu searchComp a gonderirim return kisminda. bir component props aliyorsa bunu props u ve type pini belirtmeliyiz. Burdan SearchComp sayfasina a gidelim.

// ! 3 - SearchComp sayfasindan geldikten sonra    <SearchComp /> comp un bize bagirdigini goruruz. alti cizidir. ve <SearchComp handleChange={handleChange} yazariz. SearchComp sayfasina ucalim.... :-)

// ! 4 - models.ts ye aktarim yaptikdan sonra burada yoruma alcagimiz kisimlar var. mesela burasi   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {setSearch(e.target.value);};

// ! 5 - dilerseniz bu interface leri de models e tasiyabiliriz. kopyalayip models e gidelim. Bu islemden sonra artik kart yapilarini olusturabiliriz. tabi once slicedan verilemizi alalim. Bu sayfada bize const { loading, error, productsList } = useAppSelector((state) => state.products). useSelector hook u ile loading, error, productsList i cagiririz.

// ! simdi gelelim yapimizi kurmaya return icinde SearchComp icinde {loading ? error ? ()}  kosulunu kurarak ise baslayalim. nasil? eger loading varsa, error varsa veya product varsa gibi. burada typescript COK ISE YARIYOR :-)

// ! BURDA KOSUL soyle; eger loading varsa Products loading, eger error varsa Something went wrong, yoksa urunleri ekrana bas.

// ! 6 - Artik kart yapsini basabiliriz. div e css verir ve yeni bir Card.jsx componenti olustururuz. SIMDI Card.jsx componentine gidelim...

// ! Card.jsx den geri doneriz ve Card.jsx component ti burada key={item.id} yapisini kullanarak cekeriz. Card.jsx gidelim...

// ! Card.jsx den buraya geldik. Yani Home.jsx den Card.jsx e prop gonderecegiz. ama hemen oncesinde Card.jsx de interface yazalim. Card.jsx e gidelim.

// ! 7 -  Card.jsx den buraya geldik. simdi burada const handleAdd tanimlayacagiz. const { loading, error, productsList } = useAppSelector( (state) => state.products); burda ayrica favorites i de eklemeliyiz. cunku bana state den favorites lazim.  const handleAdd = (product: Product) burda tanimlariz.

// ! ONEMLI !!! const handleAdd = (product: Product) yazarken if condition u konusalim. eger favorite icerisinde bu  urun yoksa bu urunu ekle dicem. bane ne lazim? favorrites i staten almam lazim. item in id si gelen parametrenin id sine (product.id) esitse ve bunun length i === 0 ise demekki  bu favorites yok sen bunu al favorites e ekle, sen bunu al, yani dispatch ile addFavorites i cagir, payload olarak gelen parametreyi gonder, yani bunu yaz dispatch(addFavorites(product)). Burada product type ini da yazmayi unutma. Yani const handleAdd = (product: Product) yazariz.

// ! Simdi Burdaki Card.jsx komponentine handleFunc={handleAdd} yazariz ve Burdan Card.jsx e props gondericez. Card.jsx e gidelim. 8. MADDEYE HEMEN GECME!!!

// ! 8 models.ts den VoidFunc kullanicagiz. ust kismi yoruma alip const handleAdd: VoidFunc = (product) => {if (favorites.filter((item) => item.id === product.id).length === 0) { dispatch(addFavorites(product)); }}; diye degistirir, ve VoidFunc u import etmeyi unutmayalim. FavoritesPage e gidelim. 9. MADDEYE HEMEN GITME!!!

// ! 9. React-toastify i burda ayarlicaz.

// ! 10. Else Kismi React toastify ile alakali, ilk baslarda burda else durumunu yazmadik. else bittihen sonra favorites page e git.



// ? **********************************************************************************
// ? KOSUL DURUMU EXTRA ORNEK
// fetchFail(state) {
//       state.error = true;
// }
//! aşağıdaki kullanımda fetchFail kısmının da üstteki şekilde düzenlenmesi lazım.
/* 
{loading ? (
        error ? (
          <div>
            <p className="text-center text-red-600">Something went wrong...</p>
          </div>
        ) : (
          <div>
            <p className="text-center text-red-600">Products loading...</p>
          </div>
        )
      ) : (
        <div>
          {productsList.map((item) => (
            <p>{item.title}</p>
          ))}
        </div>
      )} 
*/
