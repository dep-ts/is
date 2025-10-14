/** Checks if data is a primitive (not object or function) */
export const isPrimitive = (data: unknown): boolean =>
  data === null || (typeof data !== 'object' && typeof data !== 'function');
