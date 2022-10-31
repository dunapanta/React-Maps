import { BtnMyLocation, MapView, ReactLogo, SearchBar } from "../components";

export const HomePage = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <ReactLogo />
      <SearchBar />
    </div>
  );
};
