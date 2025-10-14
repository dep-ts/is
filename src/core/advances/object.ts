/** Checks if data is a plain object (not array, null, or special object) */
export const isObject = (data: unknown): data is Record<string, unknown> =>
  data !== null && typeof data === 'object' && !Array.isArray(data);
