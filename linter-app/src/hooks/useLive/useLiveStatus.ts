import { useEffect, useState } from "react";
import { JobStatusT, jobIsComplete } from "../../utils/status";
import { JOB_MONITOR_REFRESH_PERIOD_MS } from "./constants";
import { useGetJobStatusQuery } from "../../services/api/jobsApi/jobsApi";
import { UnknownUseQueryResult } from "../../services/api/rtk-query-types/UseQueryResult";

// TODO is correct use prefix use as name in UseLiveStatusResults??
export const useLiveStatus = (jobId: string): UseLiveStatusResults => {
  const [isJobComplete, setIsJobComplete] = useState(false);

  const jobStatusQueryResults = useGetJobStatusQuery({jobId},  {
    pollingInterval: isJobComplete ? undefined : JOB_MONITOR_REFRESH_PERIOD_MS,
  });

  useEffect(() => {
    const newComplete = jobIsComplete(jobStatusQueryResults.data);

    if (newComplete !== isJobComplete) {
      setIsJobComplete(newComplete);
    }
  }, [jobStatusQueryResults.data]);

  return {
    jobStatusQueryResults,
  };
};

export interface UseLiveStatusResults {
  jobStatusQueryResults: UnknownUseQueryResult<JobStatusT>;
}
