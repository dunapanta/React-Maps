import { createContext } from "react";

export interface IPlacesContext {
  isLoading: boolean;
  userLocation?: [number, number];
}

export const PlacesContext = createContext<IPlacesContext>(
  {} as IPlacesContext
);
