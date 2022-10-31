import { createContext } from "react";

export interface IPlacesContext {
  isLoading: boolean;
  userLocation?: [number, number];

  searchPlacesByTerm: (query: string) => Promise<any>
}

export const PlacesContext = createContext<IPlacesContext>(
  {} as IPlacesContext
);
