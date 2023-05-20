
export const JobStatus = {
  JobReceivedAndEnqueued: "JobReceivedAndEnqueued",
  JobDequeued: "JobDequeued",
  JobVolumesAllocated: "JobVolumesAllocated",
  JobCodeAcquired: "JobCodeAcquired",
  JobAnalysisConcluded: "JobAnalysisConcluded",
  JobResponsesSent: "JobResponsesSent",
  JobComplete: "JobComplete",
  JobCompleteSuccess: "JobCompleteSuccess",
  JobCompleteFailure: "JobCompleteFailure",
  JobDeclinedBySystemFilter: "JobDeclinedBySystemFilter",
} as const;

export type JobStatusT = keyof typeof JobStatus;

const skippedStates: Set<JobStatusT> = new Set([
  JobStatus.JobDeclinedBySystemFilter,
]);

const completeStates: Set<JobStatusT> = new Set([
  JobStatus.JobCompleteFailure,
  JobStatus.JobCompleteSuccess,
  JobStatus.JobComplete,
  JobStatus.JobDeclinedBySystemFilter,
]);
const failureStates: Set<JobStatusT> = new Set([
  JobStatus.JobCompleteFailure,
]);

const successStates: Set<JobStatusT> = new Set([
  JobStatus.JobComplete,
  JobStatus.JobCompleteSuccess,
]);

export const jobIsComplete = (status?: JobStatusT) =>
  !!status && completeStates.has(status);

export const jobIsFailure = (status?: JobStatusT) =>
  !!status && failureStates.has(status);

export const jobIsSuccess = (status?: JobStatusT) =>
  !!status && successStates.has(status);

export const jobIsSkipped = (status?: JobStatusT) =>
  !!status && skippedStates.has(status);


export const getJobStatusColor = (status?: string): StatusColors => {
  switch (status) {
    case undefined:
    case JobStatus.JobDeclinedBySystemFilter:
      return "--status-default";
    case JobStatus.JobCompleteSuccess:
      return "--status-success";
    case JobStatus.JobCompleteFailure:
      return "--status-error";
    default:
      return "--status-warning";
  }
};

export type StatusColors =
  | "--status-default"
  | "--status-success"
  | "--status-warning"
  | "--status-error";
