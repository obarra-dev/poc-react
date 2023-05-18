import { NullableAndUndefinable } from "./nullable";
import { isNullOrUndefined } from "./isNullOrUndefined";
export function isNotNullOrUndefined<T>(val: NullableAndUndefinable<T>): val is T {
  return !isNullOrUndefined(val);
}
