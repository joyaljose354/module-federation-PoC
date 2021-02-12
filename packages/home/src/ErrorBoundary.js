import React from "react";

const TestFed = React.lazy(() => import("nav/TestFed"));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    //   logErrorToMyService(error, errorInfo);
    debugger;
    console.log("error", error);
    console.log("errorInfo", errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        this.props.error || (
          <>
            <TestFed />
          </>
        )
      );
    }
    return (
      <React.Suspense fallback={this.props.delayed || <div />}>
        {this.props.children}
      </React.Suspense>
    );
  }
}
export default ErrorBoundary;
