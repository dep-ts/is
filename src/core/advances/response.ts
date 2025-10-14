/** Checks if data is a Response object */
export const isResponse = (data: unknown): data is Response =>
  data instanceof Response;
