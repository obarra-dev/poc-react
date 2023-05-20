import { UnknownUseQueryResult } from "../rtk-query-types/UseQueryResult";
import { jobIsComplete, JobStatusT } from "../../../utils/status";
import { isQueryResultPending } from "./isQueryPendingOrErrored";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { Undefinable } from "../../../utils/nullable";
import { isNullOrUndefined } from "../../../utils/isNullOrUndefined";
import { useEffect, useState } from "react";

export function useGetQueryWhenJobIsComplete<T, R>(
  status: UnknownUseQueryResult<JobStatusT> | Undefinable<JobStatusT>,
  propsForQuery: T,
  useQuery: (props: T | typeof skipToken) => UnknownUseQueryResult<R>
): UnknownUseQueryResult<R> {
  const [finalRequestMade, setFinalRequestMade] = useState<boolean>(false);

  const readyForFinalRequest = isComplete(status);

  const propsOrSkip = readyForFinalRequest ? propsForQuery : skipToken;

  const queryResult = useQuery(propsOrSkip);

  useEffect(() => {
    if (readyForFinalRequest && !finalRequestMade) {
      setFinalRequestMade(true);
      queryResult.refetch();
    }
  }, [readyForFinalRequest]);

  return queryResult;
}

function isComplete(
  status: UnknownUseQueryResult<JobStatusT> | Undefinable<JobStatusT>
): boolean {
  if (isJobStatus(status)) {
    return isCompleteFromStatus(status);
  } else {
    return isCompleteFromQuery(status);
  }
}

function isCompleteFromQuery(
  statusQuery: UnknownUseQueryResult<JobStatusT>
): boolean {
  return !isQueryResultPending(statusQuery) && jobIsComplete(statusQuery.data);
}

function isCompleteFromStatus(status: Undefinable<JobStatusT>): boolean {
  return jobIsComplete(status);
}

function isJobStatus(
  val: UnknownUseQueryResult<JobStatusT> | Undefinable<JobStatusT>
): val is Undefinable<JobStatusT> {
  return isNullOrUndefined(val) || typeof val === "string";
}
