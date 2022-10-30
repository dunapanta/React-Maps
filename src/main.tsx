import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";

import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1IjoiZHVuYXBhbnQiLCJhIjoiY2w5dXEzeGhiMHBneTN2cnVseTNxYXZmbCJ9.BoAHGcAuIGlmhfdMyfp4jQ";

if (!navigator.geolocation) {
  alert("Your browser does not support geolocation");
  throw new Error("Your browser does not support geolocation");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
