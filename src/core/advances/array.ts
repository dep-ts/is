import { TypeOf } from '@/core/utilities/types.ts';

/**
 * Type guard that checks if a value is an array (any array).
 *
 * Narrows the type to `unknown[]`.
 *
 * @param value - The value to check
 * @returns `true` if the value is an array, `false` otherwise
 * @example
 *   if (is.array(maybe)) {
 *     // `maybe` is now narrowed to `unknown[]`
 *     console.log(maybe.length);
 *   }
 */
export const array = (value: unknown): value is TypeOf<'array'> =>
  Array.isArray(value);
