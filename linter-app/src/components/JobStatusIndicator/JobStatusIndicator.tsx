import React, { PropsWithoutRef } from "react";
import { useLiveStatus } from "../../hooks/useLive/useLiveStatus";
import { jobIsFailure, jobIsSkipped, jobIsSuccess } from "../../utils/status";
import "./JobStatusIndicator.scss";
import { Alert } from "@mui/material";

export const JobStatusIndicator: React.FC<JobStatusIndicatorProps> = ({
  jobId,
}: PropsWithoutRef<JobStatusIndicatorProps>) => {
  const { jobStatusQueryResults } = useLiveStatus(jobId);
  const { data: jobStatus, error: errorLoadingStatus } = jobStatusQueryResults;

  const getStatusIndicator = () => {
    if (errorLoadingStatus) {
      return <Alert severity="error">Error getting status</Alert>;
    }

    if (jobIsFailure(jobStatus)) {
      return <Alert severity="error">Analysis failed</Alert>;
    }

    if (jobIsSkipped(jobStatus)) {
      return <Alert severity="warning">Analysis skipped</Alert>;
    }

    if (jobIsSuccess(jobStatus)) {
      return <Alert severity="success">Analysis complete</Alert>;
    }

    return <Alert severity="info">Analysis in progress</Alert>;
  };

  return <span className="puv-results-indicator">{getStatusIndicator()}</span>;
};

export interface JobStatusIndicatorProps {
  jobId: string;
}
