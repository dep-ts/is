/**
 * Checks if data is a primitive (string, number, boolean, bigint, symbol, null, undefined)
 * @param data - The value to check
 * @returns `true` if data is a primitive
 */
export const primitive = (data: unknown): boolean =>
  data === null || (typeof data !== 'object' && typeof data !== 'function');
