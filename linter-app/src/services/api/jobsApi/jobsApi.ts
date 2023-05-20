import { api, API_TAGS } from "../api";
import { errorTransform } from "../utils/errorTransform";
import { JobStatusT } from "../../../utils/status";

// TODO import { liftSdk } from "../../lift";

const getCurrentStatus  = async (jobId:string) => {
  const res = await fetch(`http://localhost:3000/jobs/${jobId}/current-status`);
  const data = await res.json();
  const { currentStatus } = data;
  return currentStatus
}

export const jobsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getJobStatus: builder.query<JobStatusT, GetJobStatusProps>({
      queryFn: ({ jobId }: GetJobStatusProps) => {
        return getCurrentStatus(jobId)
          .then(function (currentStatus: any) {
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

  }),
});

export type GetJobStatusProps = {
  jobId: string;
};

export type GetJobType = {
  jobId: string;
};


export const {
  useGetJobStatusQuery,
} = jobsApi;
