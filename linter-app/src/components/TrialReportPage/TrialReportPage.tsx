import { RouteComponentProps } from "react-router-dom";
import { NotFoundTrigger } from "../NotFoundPage/NotFoundTrigger";
import { resultIdentifier } from "../../services/api/sbomApi/sbomApi";

// TODO import { useLiveStatus } from "../../hooks/useLive/useLiveStatus";
import { JobStatusIndicator } from "../JobStatusIndicator/JobStatusIndicator";
import { buildGithubUrl } from "../../utils/buildGithubUrl";
import { ResultHeader } from "../ResultHeader/ResultHeader";





export type TrialReportPageProps = RouteComponentProps<{
  repoHost: string;
  owner: string;
  repo: string;
  jobId: string;
}>;

export function TrialReportPage(props: TrialReportPageProps) {
  //const { repoHost, owner, repo, jobId } = props.match.params;

  const { repoHost, owner, repo, jobId } = props;

  /** 
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
      OMAR
    </ResultHeader>
  );
}
