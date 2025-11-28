/**
 * Type guard that checks if a value is a plain object (created with `{}` or `new Object()`).
 *
 * Excludes null, arrays, functions, regexps, dates, and other built-in objects.
 *
 * @param value - The value to check
 * @returns `true` if the value is a plain object, `false` otherwise
 * @example
 *   if (is.object(maybe)) {
 *     // `maybe` is now narrowed to object (record-like)
 *     console.log(Object.keys(maybe));
 *   }
 */
export const object = (value: unknown): value is object =>
  Object.prototype.toString.call(value) === '[object Object]';
