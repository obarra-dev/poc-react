import { JobStatusT } from "../../../utils/status";
import { AnalysisResults } from "./AnalysisResults/AnalysisResults";
import { Undefinable } from "../../../utils/nullable";
import { TabIsPendingLoadingOrErrored } from "../TabIsPendingLoadingOrErrored/TabIsPendingLoadingOrErrored";
import { ResultIdentifier } from "../../../services/api/sbomApi/sbomApi";


export function AnalysisResultsTab({
  status,
  resultIdentifier,
}: AnalysisResultsTabProps) {
  const jobId = resultIdentifier.jobId;

  /**
   TODO 
    const toolNotesQuery: UnknownUseQueryResult<
    LiftWebConsoleToolNoteDto[]
  > = useGetToolNotesQueryWhenJobComplete(status, jobId);

   const jobSummaryQuery: UnknownUseQueryResult<LiftWebConsoleJobSummary> = useGetJobSummaryQueryWhenJobComplete(
    status,
    jobId
  );

   */
 
 
  return (
    <div className="lift-results-page__analysis_results-tab">
      {/* TODO
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
      */}
           <AnalysisResults
          resultIdentifier={resultIdentifier}
          jobSummary={jobSummaryQuery.data!}
          toolNotes={toolNotesQuery.data!}
        />
    </div>
  );
}

export const TAB_TYPE = "Issues";

export interface AnalysisResultsTabProps {
  status: Undefinable<JobStatusT>;
  resultIdentifier: ResultIdentifier;
}
