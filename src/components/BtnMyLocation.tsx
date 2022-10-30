import React, { useContext, useEffect } from "react";
import { MapContext, PlacesContext } from "../context";

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClickHandler = () => {
    if (!isMapReady) throw new Error("Map is not ready");
    if (!userLocation) throw new Error("User Location failed");

    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };

  return (
    <button
      className="btn btn-primary"
      style={{ position: "fixed", top: "20px", right: "20px", zIndex: 999 }}
      onClick={onClickHandler}
    >
      Mi ubicación
    </button>
  );
};
