import { TypeOf } from "@/core/utilities/types.ts";

/**
 * Type guard that checks if a value is an instance of `Error`.
 *
 * Also matches subclasses like TypeError, SyntaxError, etc.
 *
 * @param value - The value to check
 * @returns `true` if the value is an `Error` (or subclass), `false` otherwise
 * @example
 *   if (is.error(maybe)) {
 *     // `maybe` is now narrowed to `Error`
 *     console.error(maybe.message, maybe.stack);
 *   }
 */
export const error = (value: unknown): value is TypeOf<"error"> =>
  value instanceof Error;
