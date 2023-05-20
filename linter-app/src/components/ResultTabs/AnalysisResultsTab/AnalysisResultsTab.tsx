import { JobStatusT } from "../../../utils/status";
import { AnalysisResults } from "./AnalysisResults/AnalysisResults";
import { Undefinable } from "../../../utils/nullable";
import { ResultIdentifier } from "../../../services/api/sbomApi/sbomApi";
import { JobSummary, ToolNoteDtoPhaseEnum } from "../../../utils/filterableNote";
import { ToolNote } from "../../../utils/filterableNote";


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

  const jobSummaryData: JobSummary = {
    numIssuesFixed: 1,
    numIssuesTotal: 2,
    sourceBranch: "tu mama",
  }

  const toolNotes : ToolNote[] = [ {
    jobId: "string",
    toolName: "string",
    title: "albert",
    phase: ToolNoteDtoPhaseEnum.PhaseFixed,
  },

  {
    jobId: "string",
    toolName: "string",
    title: "omar",
    phase: ToolNoteDtoPhaseEnum.PhaseFixed,
  },

  {
    jobId: "string",
    toolName: "string",
    title: "quelca",
    phase: ToolNoteDtoPhaseEnum.PhaseFixed,
  },
  
  
]
  
 
 
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
          jobSummary={jobSummaryData}
          toolNotes={toolNotes}
        />
    </div>
  );
}

export const TAB_TYPE = "Issues";

export interface AnalysisResultsTabProps {
  status: Undefinable<JobStatusT>;
  resultIdentifier: ResultIdentifier;
}
