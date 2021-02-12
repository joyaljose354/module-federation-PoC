import React from "react";
import ReactDOM from "react-dom";

import WrapComponent from "./WrapComponent";

const Header = WrapComponent(React.lazy(() => import("nav/Header")));
// const TestFed = React.lazy(() => import("nav/TestFed"));

import "./index.css";

const App = () => (
  <div>
    <React.Suspense fallback={<div />}>
      {" "}
      <Header />
      {/* <TestFed /> */}
    </React.Suspense>
    <div>Hi there, I'm React from Webpack 5.</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
