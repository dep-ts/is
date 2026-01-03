import { TypeOf } from "@/core/utilities/types.ts";

/**
 * Type guard that checks whether a value is a `Response` instance.
 *
 * @param value - The value to check
 * @returns `true` if the value is a Response, `false` otherwise
 * @example
 *   if (is.response(res)) {
 *     // `res` is now a Response
 *     console.log(res.status);
 *   }
 */
export const response = (value: unknown): value is TypeOf<"response"> =>
  value instanceof Response;
