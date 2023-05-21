import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Undefinable } from "../../../utils/nullable";
import { isNotNullOrUndefined } from "../../../utils/isNotNullOrUndefined";

export const DEFAULT_REQUEST_ERROR_STATUS = 500;

/*
  This function normalizes errors returned from the generated sdk, transforming them into FetchBaseQueryErrors.

  FetchBaseQueryError is the standard error response type used by rtk-query

  The generated sdk wraps the fetch api.

  There are two ways fetch will surface errors.

  1. If the request reaches the service but the service responds
  with an error, then fetch does not treat this an exception. It resolves the promise a Response that has an error code.

  2. If a request can't be made (malformed url, blocked by cors) fetch api will actually reject the promise returning an Error object

  The generated SDKs modifies this behavior a bit. It checks the response object and if the status code is not between 200 and 300 it
  throws an error.

  We have two generated sdks, created using openapi-generate. One is based on the
  Haskell "website" service and the other is based on the Kotlin "lift-backend" service.

  Unfortunately due to slight version differences they both behave a little different in the above scenario.

  The sdk generated from Haskell throws the Response object directly. The one generated from the kotlin code wraps the Response
  in a ResponseError and throws that. The latter behavior is more in keeping with best practices. Eventually we should either
  remove all dependencies on the "website" or upgrade the openapi-generator to normalize this behavior.

  In the meantime we need to normalize against three possible types when handling errors in the api layer

  1. Response
  2. ErrorResponse
  3. Error (sometimes of the form TypeError, but that is not an important distinction)

  This video shows how you can simulate some of these scenarios locally (must be logged in with sonatype account):
  https://youtu.be/BMEN6ffECTk
*/
export const errorTransform = async (
  errorObj: RequestError
): Promise<{ error: FetchBaseQueryError }> => {
  const response: Undefinable<Response> = getResponse(errorObj);

  const message = isError(errorObj) ? errorObj.message : undefined;

  const status: number = isNotNullOrUndefined(response)
    ? response.status
    : DEFAULT_REQUEST_ERROR_STATUS;

  const statusText = response?.statusText;
  const url = response?.url;

  const body = await response?.text();

  const data: QueryErrorData = {
    status,
    statusText,
    url,
    body,
    message,
  };

  const error: FetchBaseQueryError = {
    status: status,
    data,
  };

  return { error };
};

export interface QueryErrorData {
  status: number;
  statusText?: string;
  url?: string;
  body?: string;
  message?: string;
}

type RequestError = Response | ResponseError | TypeError | Error;
function getResponse(errorObj: RequestError): Undefinable<Response> {
  if (isResponse(errorObj)) {
    return errorObj;
  } else if (isResponseError(errorObj)) {
    return errorObj.response;
  } else {
    return undefined;
  }
}

function isResponse(errorObj: RequestError): errorObj is Response {
  return errorObj instanceof Response;
}

function isResponseError(errorObj: RequestError): errorObj is ResponseError {
  return errorObj instanceof ResponseError;
}

function isError(errorObj: RequestError): errorObj is Error {
  return errorObj instanceof Error;
}

export class ResponseError extends Error {
  override name: "ResponseError" = "ResponseError";
  constructor(public response: Response, msg?: string) {
    super(msg);
  }
}
