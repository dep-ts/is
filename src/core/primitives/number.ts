/** Checks if data is a number (excluding NaN) */
export const isNumber = (data: unknown): data is number =>
  typeof data === 'number' && !Number.isNaN(data);
