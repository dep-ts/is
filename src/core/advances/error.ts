/** Checks if data is an Error object */
export const isError = (data: unknown): data is Error => data instanceof Error;
