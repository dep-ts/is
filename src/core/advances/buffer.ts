import { TypeOf } from '@/core/utilities/types.ts';

/**
 * Type guard that checks if a value is an instance of `ArrayBuffer`.
 *
 * @param value - The value to check
 * @returns `true` if the value is an `ArrayBuffer`, `false` otherwise
 * @example
 *   if (is.arrayBuffer(maybe)) {
 *     // `maybe` is now narrowed to `ArrayBuffer`
 *     console.log(maybe.byteLength);
 *   }
 */
export const arrayBuffer = (value: unknown): value is TypeOf<'arraybuffer'> =>
  value instanceof ArrayBuffer;
