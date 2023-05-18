import { NxButton } from "@sonatype/react-shared-components";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./NoIssuesFound.scss";

export function NoIssuesFound() {
  const history = useHistory();
  const location = useLocation();

  function onClickToDependency() {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("tab", "dependencies");

    history.push({
      search: queryParams.toString(),
    });
  }

  return (
    <span className="lift-result-tab__no-issues-message">
      <div className="nx-card-container">
        <section className="nx-card nx-card--equal">
          <div className="nx-card__call-out">
            <img
              className="nx-card__call-out-icon"
              src="/images/icons/nothingIcon.svg"
              alt="NothingIcon"
            />
          </div>
          <header className="nx-card__header">
            <h3 className="nx-h3 nx-h3--card-header">
              No code quality issue found
            </h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__text	lift-result-tab__no-issues-message-card">
              <img
                className="lift-result-tab_no_issues-logo"
                src="/images/icons/chart-network-duotone.svg"
                alt="Chart Network"
              />
              Issues might still exist in your dependencies
              <NxButton
                className="lift-result-tab__no-button"
                variant="primary"
                onClick={onClickToDependency}
              >
                View Dependencies
              </NxButton>
            </div>
          </div>
        </section>
      </div>
    </span>
  );
}
