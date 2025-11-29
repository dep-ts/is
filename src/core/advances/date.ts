import { TypeOf } from '@/core/utilities/types.ts';

/**
 * Type guard that checks if a value is an instance of `Date`.
 *
 * Note: This only checks the type, not whether the date is valid (e.g., `new Date('invalid')` is still a Date object but holds NaN internally).
 *
 * @param value - The value to check
 * @returns `true` if the value is a `Date` instance, `false` otherwise
 * @example
 *   if (is.date(maybe)) {
 *     // `maybe` is now narrowed to `Date`
 *     console.log(maybe.toISOString());
 *   }
 */
export const date = (value: unknown): value is TypeOf<'date'> =>
  value instanceof Date;
