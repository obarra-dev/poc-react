import { useEffect, useState } from "react";
import { JobStatusT, jobIsComplete } from "../../utils/status";
import { JOB_MONITOR_REFRESH_PERIOD } from "./constants";
import { useGetJobStatusQuery } from "../../services/api/jobsApi/jobsApi";
import { UnknownUseQueryResult } from "../../services/api/rtk-query-types/UseQueryResult";

export const useLiveStatus = (jobId?: string): UseLiveStatusResults => {
  const [isJobComplete, setIsJobComplete] = useState(false);

  console.log("OMMMMM")
  const jobStatusQueryResults = useGetJobStatusQuery({jobId: jobId as string},
    {
      pollingInterval: isJobComplete ? undefined : JOB_MONITOR_REFRESH_PERIOD,
    }
  );

  useEffect(() => {
    const newComplete = jobIsComplete(jobStatusQueryResults.data);

    if (newComplete !== isJobComplete) {
      setIsJobComplete(newComplete);
    }
  }, [jobStatusQueryResults.data]);

  return {
    jobStatusQueryResults,
    isJobComplete,
  };
};

export interface UseLiveStatusResults {
  jobStatusQueryResults: UnknownUseQueryResult<JobStatusT>;
  isJobComplete: boolean;
}
