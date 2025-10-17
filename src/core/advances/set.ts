/** Checks if data is a Set */
export const set = (data: unknown): data is Set<unknown> => data instanceof Set;
