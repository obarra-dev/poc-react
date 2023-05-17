import { NullableAndUndefinable } from "./nullable";

export function isNullOrUndefined<T>(
  val: NullableAndUndefinable<T>
): val is null | undefined {
  return val === null || val === undefined;
}
