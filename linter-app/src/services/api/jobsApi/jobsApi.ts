import { api, API_TAGS } from "../api";
import { errorTransform } from "../utils/errorTransform";
import { JobStatusT } from "../../../utils/status";
import { JobSummary, ToolNote } from "../../../utils/filterableNote";
import { successTransform } from "../utils/successTranform";
import { UnknownUseQueryResult } from "../rtk-query-types/UseQueryResult";
import { Undefinable } from "../../../utils/nullable";
import { useGetQueryWhenJobIsComplete } from "../utils/useGetQueryWhenJobComplete";
import { isNotNullOrUndefined } from "../../../utils/isNotNullOrUndefined";
import { skipToken } from "@reduxjs/toolkit/dist/query";

// TODO import { liftSdk } from "../../lift";

const getCurrentStatus  = async (jobId:string) => {
  const res = await fetch(`http://localhost:3000/jobs/${jobId}/current-status`);
  const data = await res.json();
  const { currentStatus } = data;
  return currentStatus
}

const getToolNotes  = async (jobId:string) => {
  const res = await fetch(`http://localhost:3000/jobs/${jobId}/tool-notes`);
  const data = await res.json();
  return data
}

const getJobSummary  = async (jobId:string) => {
  const res = await fetch(`http://localhost:3000/jobs/${jobId}/job-summary`);
  const data = await res.json();
  return data
}


export const jobsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getJobStatus: builder.query<JobStatusT, GetJobStatusProps>({
      queryFn: ({ jobId }: GetJobStatusProps) => {
        return getCurrentStatus(jobId)
          .then(function (currentStatus: any) {
            // TODO check what happens if there is an error here
            return { data: currentStatus };
          })
          .catch(errorTransform);
      },
      providesTags: (result, req, reqArgs) => [
        {
          type: API_TAGS.JobStatus,
          id: reqArgs.jobId,
        },
      ],
    }),

    getToolNotes: builder.query<ToolNote[], string>({
      queryFn: (jobId: string) => {
        return getToolNotes(jobId)
          .then(successTransform)
          .catch(errorTransform);
      },
    }),

    getJobSummary: builder.query<JobSummary, string>({
      queryFn: (jobId: string) => {
        return getJobSummary(jobId)
          .then(successTransform)
          .catch(errorTransform);
      },
    }),

  }),
});

export type GetJobStatusProps = {
  jobId: string;
};

export const {
  useGetJobStatusQuery,
  useGetToolNotesQuery,
  useGetJobSummaryQuery,
} = jobsApi;

export function useGetJobSummaryQueryWhenJobComplete(
  status: UnknownUseQueryResult<JobStatusT> | Undefinable<JobStatusT>,
  jobId: string
) {
  return useGetQueryWhenJobIsComplete(status, jobId, useGetJobSummaryQuery);
}

export function useGetToolNotesQueryWhenJobComplete(
  status: UnknownUseQueryResult<JobStatusT> | Undefinable<JobStatusT>,
  jobId: Undefinable<string>
) {
  return useGetQueryWhenJobIsComplete(
    status,
    isNotNullOrUndefined(jobId) ? jobId : skipToken,
    useGetToolNotesQuery
  );
}
