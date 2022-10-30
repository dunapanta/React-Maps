import reactLogo from "../assets/react.svg";

export const ReactLogo = () => {
  return (
    <img
      src={reactLogo}
      alt="React Logo"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "100px",
      }}
    />
  );
};
