import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const wrapComponent = (Component) => ({ error, delayed, ...props }) => {
  console.log("error-wrap component", Component);
  return (
    <ErrorBoundary error={error} delayed={delayed}>
      <Component {...props} />
    </ErrorBoundary>
  );
};

export default wrapComponent;
