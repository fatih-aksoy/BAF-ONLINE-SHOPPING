import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ToastContainer, Zoom } from "react-toastify";

// ! 1
function App() {
  return (
    <div className="bg-gray-400 min-h-screen ">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      <ToastContainer transition={Zoom} />
      {/* //! 3 */}
    </div>
  );
}

export default App;

//! 1 - ILK ONCE App.tsx dosyasindan baslariz. BrowserRouter kurulur. src de pages klasöru acilir. Home, FavoritesPages. Sonra component klasoru acilir, sonra Navbar acilir ve oradan devam edilir. Simdi Navbari duzenleyelim.

//! 2 - PRODUCTS SLICE DAN dan buraya gelince, burda Provider ile yapimi sarmallamaliyim. Store dan verilerimi almam icin her yerde nasil sarmallamaliyim. tabiki de  <Provider store={store}></Provider> yapisini kullanarak. importlarini da unutmayalim.  ARTIK HOME SAYFASINA GECEBILIRIZ. home sayfasi icin components/SearchComp acariz. 3. MADDEYE HEMEN GECME!!!

//! 3 - <ToastContainer/> i buraya cagiririz.  import { ToastContainer } from "react-toastify"; import ederiz. sonra Home.tsx e git...

// ! son olarak  <ToastContainer /> e transition={Zoom} verilebilir,
