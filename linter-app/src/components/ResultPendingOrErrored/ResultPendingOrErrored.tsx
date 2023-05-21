import { UnrecoverableErrorDefault } from "../UnrecoverableErrorDefault/UnrecoverableErrorDefault";
import { isNotNullOrUndefined } from "../../utils/isNotNullOrUndefined";
import { UnknownUseQueryResult } from "../../services/api/rtk-query-types/UseQueryResult";
import { isQueryResultPending } from "../../services/api/utils/isQueryPendingOrErrored";
import { Box, CircularProgress } from "@mui/material";
import { QueryError } from "../../services/api/rtk-query-types/QueryError";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function ResultPendingOrErrored({
  queryResult,
  waitingMessage,
}: ResultPendingOrErroredProps) {
  const { error } = queryResult;

  if (
    isNotNullOrUndefined(error) &&
    (error as FetchBaseQueryError).status !== 404
  ) {
    return <UnrecoverableErrorDefault error={error as QueryError} />;
  } else if (isQueryResultPending(queryResult)) {
    return (
      <span>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
        <div>{waitingMessage}</div>
      </span>
    );
  } else {
    return <div>TODO</div>;
  }
}

type ResultPendingOrErroredProps = {
  queryResult: UnknownUseQueryResult<unknown>;
  waitingMessage?: string;
};
