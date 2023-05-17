import { isNullOrUndefined } from "../../../utils/isNullOrUndefined";
import { isNotNullOrUndefined } from "../../../utils/isNotNullOrUndefined";
import { QueryError } from "./QueryError";

export interface UseMutationResult<T> {
  // Base query state
  originalArgs?: unknown; // Arguments passed to the latest mutation call
  data?: T; // Returned result if present
  error?: QueryError | unknown; // Error result if present
  endpointName?: string; // The name of the given endpoint for the mutation
  fulfilledTimestamp?: number; // Timestamp for when the mutation was completed

  // Derived request status booleans
  isUninitialized: boolean; // Mutation has not been fired yet
  isLoading: boolean; // Mutation has been fired and is awaiting a response
  isSuccess: boolean; // Mutation has data from a successful call
  isError: boolean; // Mutation is currently in an "error" state
  startedTimeStamp?: number; // Timestamp for when the latest mutation was initiated
}
export interface PendingOrErroredUseMutationResult<T>
  extends UseMutationResult<T> {
  data?: undefined;
}

export interface SuccessfulUseMutationResult<T> extends UseMutationResult<T> {
  data: T;
}

export type UnknownUseMutationResult<T> =
  | PendingOrErroredUseMutationResult<T>
  | SuccessfulUseMutationResult<T>;

export function isMutationResultPendingOrErrored<T>(
  queryResult: UnknownUseMutationResult<T>
): queryResult is PendingOrErroredUseMutationResult<T> {
  return !isMutationResultSuccessful(queryResult);
}

export function isMutationResultSuccessful<T>(
  queryInfo: UnknownUseMutationResult<T>
): queryInfo is SuccessfulUseMutationResult<T> {
  const { data, error } = queryInfo;

  return (
    !isMutationResultPending(queryInfo) &&
    isNullOrUndefined(error) &&
    isNotNullOrUndefined(data)
  );
}

export function isMutationResultFailed<T>(
  queryInfo: UnknownUseMutationResult<T>
): boolean {
  return isNotNullOrUndefined(queryInfo.error);
}

export function isMutationResultTerminal<T>(
  queryInfo: UnknownUseMutationResult<T>
): boolean {
  return (
    isMutationResultSuccessful(queryInfo) || isMutationResultFailed(queryInfo)
  );
}

export function isMutationResultPending(
  queryInfo: Partial<UseMutationResult<unknown>>
): boolean {
  const { isLoading, isUninitialized } = queryInfo;

  return !!(isLoading || isUninitialized);
}
