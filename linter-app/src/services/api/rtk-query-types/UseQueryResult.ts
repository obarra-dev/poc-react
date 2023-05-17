import { QueryError } from "./QueryError";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export interface UseQueryResult<T> extends UseQueryResultSerializableData<T> {
  refetch: () => void;
}

export interface UseQueryResultSerializableData<T> {
  originalArgs?: unknown;
  data?: T;
  error?: QueryError;
  requestId?: string;
  endpointName?: string;
  startedTimeStamp?: number;
  fulfilledTimeStamp?: number;

  isUninitialized: boolean;
  isLoading: boolean;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export interface PendingOrErroredUseQueryResult<T> extends UseQueryResult<T> {
  data?: undefined;
}

export interface SuccessfulUseQueryResult<T> extends UseQueryResult<T> {
  data: T;
}

export interface FailedUseQueryResult<T> extends UseQueryResult<T> {
  error: FetchBaseQueryError;
}

export type UnknownUseQueryResult<T> =
  | PendingOrErroredUseQueryResult<T>
  | SuccessfulUseQueryResult<T>;
