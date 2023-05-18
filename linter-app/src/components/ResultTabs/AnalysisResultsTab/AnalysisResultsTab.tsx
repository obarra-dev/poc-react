import { JobStatusT } from "../../../utils/status";
import { AnalysisResults } from "./AnalysisResults/AnalysisResults";
import React from "react";
import { UnknownUseQueryResult } from "../../../services/api/rtk-query-types/UseQueryResult";
import { FixRates } from "../../../services/api/fixRateApi/fixRates";
import { Undefinable } from "../../../utils/nullable";
import { TabIsPendingLoadingOrErrored } from "../TabIsPendingLoadingOrErrored/TabIsPendingLoadingOrErrored";
import { useGetFixRateQuery } from "../../../services/api/fixRateApi/fixRateApi";
import { ResultIdentifier } from "../../../services/api/sbomApi/sbomApi";
import {
  LiftWebConsoleJobSummary,
  LiftWebConsoleToolNoteDto,
} from "../../../generated/lift-web-console-sdk/src";
import {
  useGetJobSummaryQueryWhenJobComplete,
  useGetToolNotesQueryWhenJobComplete,
} from "../../../services/api/jobsApi/jobsApi";

export function AnalysisResultsTab({
  status,
  resultIdentifier,
}: AnalysisResultsTabProps) {
  const fixRateR: UnknownUseQueryResult<FixRates> = useGetFixRateQuery();
  const jobId = resultIdentifier.jobId;
  const toolNotesQuery: UnknownUseQueryResult<
    LiftWebConsoleToolNoteDto[]
  > = useGetToolNotesQueryWhenJobComplete(status, jobId);

  const jobSummaryQuery: UnknownUseQueryResult<LiftWebConsoleJobSummary> = useGetJobSummaryQueryWhenJobComplete(
    status,
    jobId
  );

  return (
    <div className="lift-results-page__analysis_results-tab">
      <TabIsPendingLoadingOrErrored
        status={status}
        additionalDependentRequests={[toolNotesQuery, jobSummaryQuery]}
        tabType={TAB_TYPE}
      >
        <AnalysisResults
          resultIdentifier={resultIdentifier}
          jobSummary={jobSummaryQuery.data!}
          toolNotes={toolNotesQuery.data!}
          fixRatesQuery={fixRateR}
        />
      </TabIsPendingLoadingOrErrored>
    </div>
  );
}

export const TAB_TYPE = "Issues";

export interface AnalysisResultsTabProps {
  status: Undefinable<JobStatusT>;
  resultIdentifier: ResultIdentifier;
}
