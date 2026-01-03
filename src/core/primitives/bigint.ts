import { TypeOf } from "@/core/utilities/types.ts";

/**
 * Type guard that checks if a value is a primitive `bigint`.
 *
 * @param value - The value to check
 * @returns `true` if the value is a bigint, `false` otherwise
 * @example
 *   if (is.bigint(maybe)) {
 *     // maybe is narrowed to bigint here
 *     console.log(maybe + 10n);
 *   }
 */
export const bigint = (value: unknown): value is TypeOf<"bigint"> =>
  typeof value === "bigint";
