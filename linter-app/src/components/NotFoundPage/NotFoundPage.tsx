import "./NotFoundPage.scss";
import React from "react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="lift-page-not-found">
      <div className="lift-container">
        <div className="lift-page-not-found__container">
          <div className="lift-page-not-found__title">404</div>
          <h1 className="lift-page-not-found__sub-title nx-h1">
            Oops... Wrong Floor
          </h1>
          <p className="lift-page-not-found__text">
            The page you were looking for may have changed or is temporarily
            unavailable.
          </p>
          <div className="lift-page-not-found__actions">
            <Link to="/" className="nx-btn lift-btn--cta">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
