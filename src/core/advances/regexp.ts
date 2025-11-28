/**
 * Type guard that checks whether a value is a `RegExp` instance.
 *
 * @param value - The value to check
 * @returns `true` if the value is a regular expression, `false` otherwise
 * @example
 *   if (is.regExp(pattern)) {
 *     // `pattern` is now a RegExp
 *     pattern.test("hello");
 *   }
 */
export const regExp = (value: unknown): value is RegExp =>
  value instanceof RegExp;
