/**
 * Creates a custom validator
 * @param regexp - Function that returns boolean when testing data
 * @returns Validator function that checks data
 */
export const custom =
  (regexp: (data: unknown) => boolean) =>
  (data: unknown): boolean =>
    regexp(data);
