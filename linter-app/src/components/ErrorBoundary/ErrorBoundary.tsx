import React from "react";
import { ExternalLink } from "../ExternalLink/ExternalLink";
import "./ErrorBoundary.scss";

export class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { eventId: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      //render fallback UI
      return (
        <div className="error">
          <div className="error-500">
            <h1 className="nx-h1">
              We're sorry, Our App has experienced an error.
            </h1>

            <p>
              Please try reloading the page, or come back in a little while.
            </p>

            <ExternalLink
              className="nx-text-link"
              eventLabel="error"
              to="https://react.dev/community"
            >
              Visit the community for help
            </ExternalLink>
          </div>
        </div>
      );
    }

    //when there's not an error, render children untouched
    return this.props.children;
  }
}
