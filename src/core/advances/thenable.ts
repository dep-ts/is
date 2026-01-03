import { object } from "@/core/advances/object.ts";
import { function as function_ } from "@/core/advances/function.ts";
import { TypeOf } from "@/core/utilities/types.ts";

/**
 * Type guard that checks whether a value is a thenable (an object with a callable `then` method).
 *
 * @param value - The value to evaluate
 * @returns `true` if the value is thenable, `false` otherwise
 * @example
 *   if (is.thenable(maybe)) {
 *     // `maybe` is now a Promise-like value
 *     maybe.then(console.log);
 *   }
 */
export const thenable = (value: unknown): value is TypeOf<"thenable"> =>
  object(value) && "then" in value && function_(value.then);
