import { TypeOf } from "@/core/utilities/types.ts";
import { object } from "./object.ts";

/**
 * Type guard that checks if a value is a plain record/object literal (`{}` or `new Object()`).
 *
 * @param value - The value to check
 * @returns `true` if the value is a plain object with string keys and `unknown` values, `false` otherwise
 * @example
 *   if (is.record(maybe)) {
 *     // `maybe` is now narrowed to Record<string, unknown>
 *     console.log(Object.keys(maybe).length);
 *     maybe.someProp; // TypeScript knows it's a record
 *   }
 */
export const record = (value: unknown): value is TypeOf<"record"> => {
  if (!object(value)) return false;
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
};
