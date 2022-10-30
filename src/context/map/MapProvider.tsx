import { useReducer } from "react";
import { Map, Marker, Popup } from "mapbox-gl";
import { MapContext } from "./MapContext";
import { mapReducer } from "./mapReducer";

export interface MapState {
  isMapReady: boolean;
  map?: Map;
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
};

export const MapProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

  const setMap = (map: Map) => {
    const myLocationPopup = new Popup().setHTML(`
    <h4>My Location</h4>
    <p>Latitude: ${map.getCenter().lat}</p>
    `);
    new Marker({ color: "#1565dd" })
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopup)
      .addTo(map);
      
    dispatch({
      type: "setMap",
      payload: map,
    });
  };

  return (
    <MapContext.Provider value={{ ...state, setMap }}>
      {children}
    </MapContext.Provider>
  );
};
