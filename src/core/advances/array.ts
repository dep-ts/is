/** Checks if data is an array */
export const isArray = (data: unknown): data is unknown[] =>
  Array.isArray(data);
