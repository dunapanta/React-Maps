import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";

if (!navigator.geolocation) {
  alert("Your browser does not support geolocation");
  throw new Error("Your browser does not support geolocation");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
