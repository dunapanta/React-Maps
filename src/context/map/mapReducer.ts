import { Map } from "mapbox-gl";
import { MapState } from "./MapProvider";

type MapAction = { type: "setMap"; payload: Map };

export const mapReducer = (state: MapState, action: MapAction): MapState => {
  switch (action.type) {
    case "setMap":
      return {
        ...state,
        map: action.payload,
        isMapReady: true,
      };
    default:
      return state;
  }
};
