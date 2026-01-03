import { TypeOf } from "@/core/utilities/types.ts";

/**
 * Type guard that checks whether a value is a non-null object.
 *
 * Excludes `null` and arrays, but includes class instances, dates,
 * maps, sets, and other built-in objects.
 *
 * @param value - The value to check
 * @returns `true` if the value is a non-null, non-array object
 * @example
 *   if (is.object(maybe)) {
 *     // `maybe` is now narrowed to `object`
 *     console.log(typeof maybe);
 *   }
 */
export const object = (value: unknown): value is TypeOf<"object"> =>
  typeof value === "object" && value !== null && !Array.isArray(value);
