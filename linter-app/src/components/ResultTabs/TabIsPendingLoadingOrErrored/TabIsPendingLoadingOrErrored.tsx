import {
  jobIsComplete,
  jobIsFailure,
  jobIsProhibited,
  jobIsSkipped,
  JobStatusT,
} from "../../../utils/status";
import { LinkToPro } from "../../LinkToPro";
import React, { PropsWithChildren } from "react";
import { UnknownUseQueryResult } from "../../../services/api/rtk-query-types/UseQueryResult";
import { Undefinable } from "../../../utils/nullable";
import { ResultPendingOrErrored } from "../../ResultPendingOrErrored/ResultPendingOrErrored";
import { isQueryResultPendingOrErrored } from "../../../services/api/utils/isQueryPendingOrErrored";
import { isNullOrUndefined } from "../../../utils/isNullOrUndefined";
import { NxCard, NxH2 } from "@sonatype/react-shared-components";
import "./TabIsPendingLoadingOrErrored.scss";
import { AnalysisInProgress } from "./AnalysisInProgress/AnalysisInProgress";

export function TabIsPendingLoadingOrErrored({
  status,
  additionalDependentRequests,
  tabType,
  children,
}: TabIsPendingLoadingOrErroredProps) {
  if (jobIsProhibited(status)) {
    return (
      <div className="lift-results-page__license-required-message">
        Analysis of private repositories requires Lift Pro. Please{" "}
        <LinkToPro>upgrade to Lift Pro</LinkToPro> and try again.
      </div>
    );
  } else if (jobIsFailure(status)) {
    return (
      <NxCard.Container>
        <NxCard className="results-tab-card">
          <div className="results-tab-card__icon">
            <img src="/images/analysis/failed-icon.svg" alt="" />
          </div>
          <header className="nx-card__header">
            <h2 className="nx-h2 nx-h2--card-header lift-results-tab__data-header">
              Lift's advanced analysis failed to run.
            </h2>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__text lift-results-tab__data-message">
              This is usually because Lift needs more detail about how to build
              your code. See the Troubleshooting and configuration Lift sections
              of the{" "}
              <a
                href="https://help.sonatype.com/lift/troubleshooting"
                target="_blank"
                rel="noreferrer"
              >
                documentation
              </a>{" "}
              for tips on how to fix this issue.
            </div>
          </div>
        </NxCard>
      </NxCard.Container>
    );
  } else if (jobIsSkipped(status)) {
    return (
      <NxCard.Container>
        <NxCard className="results-tab-card">
          <div className="results-tab-card__icon">
            <img src="/images/analysis/skipped-icon.svg" alt="" />
          </div>
          <NxH2 className="results-tab-card__text lift-results-page__job-skipped-message">
            Lift skipped this pull request because it was submitted by a bot. To
            make the best use of analysis resources, Lift only analyzes code
            submitted by human contributors.
          </NxH2>
        </NxCard>
      </NxCard.Container>
    );
  } else if (!jobIsComplete(status)) {
    return <AnalysisInProgress tabType={tabType} />;
  } else if (true) {
    return (
      <FirstPendingRequest
        additionalDependentRequests={additionalDependentRequests}
      />
    );
  } else {
    return <>{children}</>;
  }

  function isDependencyPendingOrErrored(
    dependencies: UnknownUseQueryResult<any>[]
  ): boolean {
    return dependencies.reduce((acc: boolean, entry) => {
      return acc || isQueryResultPendingOrErrored(entry);
    }, false);
  }
}

function FirstPendingRequest({
  additionalDependentRequests,
}: {
  additionalDependentRequests: UnknownUseQueryResult<any>[];
}) {
  const firstPendingRequest = additionalDependentRequests.find((request) =>
    isQueryResultPendingOrErrored(request)
  );

  if (isNullOrUndefined(firstPendingRequest)) {
    return null;
  } else {
    return <ResultPendingOrErrored queryResult={firstPendingRequest} />;
  }
}

export type TabIsPendingLoadingOrErroredProps = PropsWithChildren<{
  status: Undefinable<JobStatusT>;
  additionalDependentRequests: UnknownUseQueryResult<any>[];
  tabType: string;
}>;
