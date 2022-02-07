import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PicturesContextProvider from "./store/context/PicturesContext/PicturesContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <PicturesContextProvider>
      <App />
    </PicturesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
