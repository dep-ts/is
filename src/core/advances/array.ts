/** Checks if data is an array */
export const array = (data: unknown): data is unknown[] => Array.isArray(data);
