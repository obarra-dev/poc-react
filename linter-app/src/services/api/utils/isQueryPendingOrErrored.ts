import { isNotNullOrUndefined } from "../../../utils/isNotNullOrUndefined";

import {
  FailedUseQueryResult,
  UnknownUseQueryResult,
  UseQueryResult,
} from "../rtk-query-types/UseQueryResult";

import { UseMutationResult } from "../rtk-query-types/UseMutationResult";

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
