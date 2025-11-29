import { TypeOf } from '@/core/utilities/types.ts';

/**
 * Type guard that checks if a value is an instance of `Blob`.
 *
 * @param value - The value to check
 * @returns `true` if the value is a `Blob`, `false` otherwise
 * @example
 *   if (is.blob(maybe)) {
 *     // `maybe` is now narrowed to `Blob`
 *     console.log(await maybe.text());
 *   }
 */
export const blob = (value: unknown): value is TypeOf<'blob'> =>
  value instanceof Blob;
