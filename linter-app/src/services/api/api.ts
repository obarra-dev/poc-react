import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "/api/";
const CACHE_DURATION_SECONDS = 3600;

export enum API_TAGS {
  JobResult = "JobResult",
  JobStatus = "JobStatus",
}
//apiSlice
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  refetchOnMountOrArgChange: CACHE_DURATION_SECONDS,
  tagTypes: [
    API_TAGS.JobResult,
    API_TAGS.JobStatus,
  ],
  endpoints: () => ({}),
});
