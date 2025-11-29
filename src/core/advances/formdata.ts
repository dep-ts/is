import { TypeOf } from '@/core/utilities/types.ts';

/**
 * Type guard that checks if a value is an instance of `FormData`.
 *
 * @param value - The value to check
 * @returns `true` if the value is a `FormData` instance, `false` otherwise
 * @example
 *   if (is.formData(maybe)) {
 *     // `maybe` is now narrowed to `FormData`
 *     for (const [key, value] of maybe.entries()) {
 *       console.log(key, value);
 *     }
 *   }
 */
export const formData = (value: unknown): value is TypeOf<'formdata'> =>
  value instanceof FormData;
