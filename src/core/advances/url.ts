/** Checks if data is a URL object */
export const url = (data: unknown): data is URL => data instanceof URL;
