import { isNotNullOrUndefined } from "../../../utils/isNotNullOrUndefined";
import {
  FailedUseQueryResult,
  PendingOrErroredUseQueryResult,
  SuccessfulUseQueryResult,
  UnknownUseQueryResult,
  UseQueryResult,
} from "../rtk-query-types/UseQueryResult";
import { isNullOrUndefined } from "../../../utils/isNullOrUndefined";
import { UseMutationResult } from "../rtk-query-types/UseMutationResult";

export function isQueryResultPendingOrErrored<T>(
  queryResult: UnknownUseQueryResult<T>
): queryResult is PendingOrErroredUseQueryResult<T> {
  return !isQueryResultSuccessful(queryResult);
}

export function isQueryResultSuccessful<T>(
  queryInfo: UnknownUseQueryResult<T>
): queryInfo is SuccessfulUseQueryResult<T> {
  const { data, error } = queryInfo;

  return (
    !isQueryResultPending(queryInfo) &&
    isNullOrUndefined(error) &&
    isNotNullOrUndefined(data)
  );
}

export function isQueryResult404<T>(
  queryResult: UnknownUseQueryResult<T> | FailedUseQueryResult<T>
): boolean {
  return isQueryResultFailed(queryResult) && queryResult.error.status === 404;
}

export function isQueryResultFailed<T>(
  queryInfo: UnknownUseQueryResult<T> | FailedUseQueryResult<T>
): queryInfo is FailedUseQueryResult<T> {
  return isNotNullOrUndefined(queryInfo.error);
}

export function isQueryResultTerminal<T>(
  queryInfo: UnknownUseQueryResult<T>
): boolean {
  return isQueryResultSuccessful(queryInfo) || isQueryResultFailed(queryInfo);
}

export function isQueryResultPending(
  queryInfo: UseQueryResult<unknown> | UseMutationResult<unknown>
): boolean {
  const { isLoading, isUninitialized } = queryInfo;

  if (isUseQueryResult(queryInfo)) {
    return isLoading || isUninitialized || queryInfo.isFetching;
  } else {
    return isLoading || isUninitialized;
  }
}

function isUseQueryResult(
  queryInfo: UseQueryResult<unknown> | UseMutationResult<unknown>
): queryInfo is UseQueryResult<unknown> {
  return isNotNullOrUndefined(
    (queryInfo as UseQueryResult<unknown>).isFetching
  );
}
