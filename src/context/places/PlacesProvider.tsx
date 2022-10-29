import { ReactNode } from "react";
import { PlacesContext } from "./PlacesContext";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
};

export const PlacesProvider = ({ children }: { children: ReactNode }) => {
  return (
    <PlacesContext.Provider
      value={{
        isLoading: true,
        userLocation: undefined,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
