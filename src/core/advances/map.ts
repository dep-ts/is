/** Checks if data is a Map */
export const map = (data: unknown): data is Map<unknown, unknown> =>
  data instanceof Map;
