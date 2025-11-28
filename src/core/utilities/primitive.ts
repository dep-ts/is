import * as primitives from '@/core/primitives/mod.ts';

/**
 * Type guard that checks whether a value is a JavaScript primitive.
 *
 * Covers: string, number, bigint, boolean, symbol, null, and undefined.
 *
 * @param value - The value to check
 * @returns `true` if the value is a primitive, `false` otherwise
 * @example
 *   if (is.primitive(x)) {
 *     // `x` is now a primitive value
 *     console.log(x);
 *   }
 */
export const primitive = (
  value: unknown
): value is string | number | bigint | boolean | symbol | null | undefined =>
  primitives.string(value) ||
  primitives.number(value) ||
  primitives.boolean(value) ||
  primitives.bigint(value) ||
  primitives.symbol(value) ||
  primitives.undefined(value) ||
  primitives.null(value);
