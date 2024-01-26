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

