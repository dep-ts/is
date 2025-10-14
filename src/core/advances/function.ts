/** Checks if data is a function */
// deno-lint-ignore ban-types
export const isFunction = (data: unknown): data is Function =>
  typeof data === 'function';
