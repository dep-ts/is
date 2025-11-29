import { TypeOf } from '@/core/utilities/types.ts';

/**
 * Type guard that checks if a value is an instance of `DataView`.
 *
 * @param value - The value to check
 * @returns `true` if the value is a `DataView`, `false` otherwise
 * @example
 *   if (is.dataView(maybe)) {
 *     // `maybe` is now narrowed to `DataView`
 *     console.log(maybe.getUint8(0));
 *   }
 */
export const dataView = (value: unknown): value is TypeOf<'dataview'> =>
  value instanceof DataView;
