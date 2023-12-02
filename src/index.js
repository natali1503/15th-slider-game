import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GameProvaider } from "./context/gameContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GameProvaider>
      <App />
    </GameProvaider>
  </React.StrictMode>
);
