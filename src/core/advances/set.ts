/** Checks if data is a Set */
export const isSet = (data: unknown): data is Set<unknown> =>
  data instanceof Set;
