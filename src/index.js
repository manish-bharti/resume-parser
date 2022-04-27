import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import MainComponent from "./MainComponent";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<MainComponent />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
