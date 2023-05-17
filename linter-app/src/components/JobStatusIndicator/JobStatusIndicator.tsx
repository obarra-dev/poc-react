import React, { PropsWithoutRef } from "react";
import { useLiveStatus } from "../../hooks/useLive/useLiveStatus";
import { jobIsFailure, jobIsSkipped, jobIsSuccess } from "../../utils/status";
import {
  NxPositiveStatusIndicator,
  NxIntermediateStatusIndicator,
  NxErrorStatusIndicator,
} from "@sonatype/react-shared-components";
import "./JobStatusIndicator.scss";

export const JobStatusIndicator: React.FC<JobStatusIndicatorProps> = ({
  jobId,
}: PropsWithoutRef<JobStatusIndicatorProps>) => {
  const { jobStatusQueryResults } = useLiveStatus(jobId);
  const { data: jobStatus, error: errorLoadingStatus } = jobStatusQueryResults;

  const getStatusIndicator = () => {
    if (errorLoadingStatus) {
      return (
        <NxErrorStatusIndicator>Error getting status</NxErrorStatusIndicator>
      );
    }

    if (jobIsFailure(jobStatus)) {
      return <NxErrorStatusIndicator>Analysis failed</NxErrorStatusIndicator>;
    }

    if (jobIsSkipped(jobStatus)) {
      return (
        <NxIntermediateStatusIndicator>
          Analysis skipped
        </NxIntermediateStatusIndicator>
      );
    }

    if (jobIsSuccess(jobStatus)) {
      return (
        <NxPositiveStatusIndicator>Analysis complete</NxPositiveStatusIndicator>
      );
    }

    return (
      <NxIntermediateStatusIndicator>
        Analysis in progress
      </NxIntermediateStatusIndicator>
    );
  };

  return <span className="lift-results-indicator">{getStatusIndicator()}</span>;
};

export interface JobStatusIndicatorProps {
  jobId: string;
}
