import { NullableAndUndefinable } from "./nullable";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

export function errStatus(err: any): number | undefined {
  return err?.status;
}

export function errWithStatus(status: number) {
  const err = new Error();
  // @ts-ignore
  err.status = status;
  return err;
}

export function sanitoryErrMsg(
  err: NullableAndUndefinable<Error | FetchBaseQueryError | SerializedError>
): string {
  switch (errStatus(err)) {
    case 404:
      return "Resource not found";
    case 500:
      return "Unknown server error";
    case 401:
      return "Access not allowed";
  }
  return "Unknown error";
}
