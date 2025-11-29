import { TypeOf } from '@/core/utilities/types.ts';

/**
 * Type guard that checks if a value is an instance of `File`.
 *
 * @param value - The value to check
 * @returns `true` if the value is a `File`, `false` otherwise
 * @example
 *   if (is.file(maybe)) {
 *     // `maybe` is now narrowed to `File`
 *     console.log(maybe.name, maybe.size, maybe.type);
 *   }
 */
export const file = (value: unknown): value is TypeOf<'file'> =>
  value instanceof File;
