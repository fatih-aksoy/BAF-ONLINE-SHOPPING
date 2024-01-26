import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

// ! PROJECT ARC
// ! urunler apiden gelecek, react router dom kullanicaz, uruneri favotiye eklicez ve silicez, bunun icin redux toolkit kullanicaz

// ! INSTALLATION
// ! yarn create react-app .  --template
// ! yarn add axios react-router-dom
// ! yarn add react-redux @reduxjs/toolkit    reduxTookkit webside
// ! https://redux-toolkit.js.org/tutorials/typescript  buraya git
// ! https://dummyjson.com/docs/products  API icin
// ! bildirmler icin yarn add react-toastify  kurariz. 
