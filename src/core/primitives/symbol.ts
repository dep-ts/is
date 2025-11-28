/**
 * Type guard that checks if a value is a primitive `symbol`.
 *
 * @param value - The value to check
 * @returns `true` if the value is a symbol, `false` otherwise
 * @example
 *   if (is.symbol(maybe)) {
 *     // `maybe` is now narrowed to `symbol`
 *     console.log(Symbol.keyFor(maybe) ?? 'unregistered');
 *   }
 */
export const symbol = (value: unknown): value is symbol =>
  typeof value === 'symbol';
