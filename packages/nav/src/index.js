// import("./App");
import React from "react";
const Header = () => {
  React.useEffect(() => {
    throw Error("Thrown from useEffect");
  });

  const throwError = () => {
    throw Error("Thrown from button click");
  };

  return (
    <>
      <header style={{ fontSize: "xx-large" }}>I'm the header!</header>
      <button onClick={throwError}>click me!!</button>
    </>
  );
};
export default Header;
