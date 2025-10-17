/** Checks if data is a Date object */
export const date = (data: unknown): data is Date => data instanceof Date;
