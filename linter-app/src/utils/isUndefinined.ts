import { Undefinable } from "./nullable";

export function isUndefined<T>(val: Undefinable<T>): val is undefined {
  return val === undefined;
}
