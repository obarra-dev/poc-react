import { Undefinable } from "../../../utils/nullable";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

export type QueryError = Undefinable<FetchBaseQueryError | SerializedError>;
