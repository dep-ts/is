import { TypeOf } from "@/core/utilities/types.ts";

/**
 * Type guard that checks whether a value is a `Request` instance.
 *
 * @param value - The value to check
 * @returns `true` if the value is a Request, `false` otherwise
 * @example
 *   if (is.request(input)) {
 *     // `input` is now a Request
 *     console.log(input.url);
 *   }
 */
export const request = (value: unknown): value is TypeOf<"request"> =>
  value instanceof Request;
