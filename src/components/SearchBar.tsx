import { ChangeEvent, useRef } from "react";

export const SearchBar = () => {
  const debounceRef = useRef<number>();

  const onQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
        console.log(e.target.value);
    }, 500);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar lugar..."
        onChange={onQueryChange}
      />
    </div>
  );
};
