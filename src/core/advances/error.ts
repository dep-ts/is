/** Checks if data is an Error object */
export const error = (data: unknown): data is Error => data instanceof Error;
