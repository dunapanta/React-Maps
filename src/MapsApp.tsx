import React from "react";
import { PlacesProvider } from "./context";
import { HomePage } from "./pages/HomePage";
import "./styles.css";

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <HomePage />
    </PlacesProvider>
  );
};
