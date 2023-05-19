import { useParams } from "react-router-dom";
import { NotFoundTrigger } from "../NotFoundPage/NotFoundTrigger";
import { resultIdentifier } from "../../services/api/sbomApi/sbomApi";

// TODO import { useLiveStatus } from "../../hooks/useLive/useLiveStatus";
import { JobStatusIndicator } from "../JobStatusIndicator/JobStatusIndicator";
import { buildGithubUrl } from "../../utils/buildGithubUrl";
import { ResultHeader } from "../ResultHeader/ResultHeader";
import { ResultTabs } from "../ResultTabs/ResultTabs";

import {
  DEPENDENCIES,
  LOGS,
  RESULTS,
  TOOL_RESULTS,
} from "../ResultTabs/allowedTabs";




export function TrialReportPage(props: any) {
  const { repoHost, owner, repo, jobId } = useParams();
  const tabsShown = [RESULTS, DEPENDENCIES, TOOL_RESULTS, LOGS];



  /**  TODO
 const jobStatusQueryResults = useLiveStatus(jobId).jobStatusQueryResults;


  if (isQueryResult404(jobStatusQueryResults)) {
    return <NotFoundTrigger />;
  } else if (isQueryResultFailed(jobStatusQueryResults)) {
    return (
      <div className="lift-container">
        <ResultPendingOrErrored queryResult={jobStatusQueryResults} />
      </div>
    );
  }

  const jobStatus = jobStatusQueryResults.data;

  */

  return (
    <div className="lift-trial-report-page lift-container">
      <TrialAnalysisHeader
        title={`${owner}/${repo}`}
        url={buildGithubUrl(owner, repo)}
        jobId={jobId}
      />

<ResultTabs
        resultIdentifier={resultIdentifier(repoHost, owner, repo, jobId)}
        jobStatus={"jobStatus"}
        enabledTabs={tabsShown}
        allowPublicDependenciesAccess={true}
      />
     
    </div>
  );
}

interface TrialAnalysisHeaderProps {
  title: string;
  url: string;
  jobId: string;
}

function TrialAnalysisHeader({ title, url, jobId }: TrialAnalysisHeaderProps) {
  return (
    <ResultHeader title={title} url={url}>
      OMAR {jobId}
    </ResultHeader>
  );
}
