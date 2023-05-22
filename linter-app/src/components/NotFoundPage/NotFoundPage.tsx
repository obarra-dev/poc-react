import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="puv-page-not-found">
      <div className="puv-container">
        <div className="puv-page-not-found__container">
          <div className="puv-page-not-found__title">404</div>
          <h1 className="puv-page-not-found__sub-title nx-h1">
            Oops... Wrong Floor
          </h1>
          <p className="puv-page-not-found__text">
            The page you were looking for may have changed or is temporarily
            unavailable.
          </p>
          <div className="puv-page-not-found__actions">
            <Link to="/" className="nx-btn puv-btn--cta">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
