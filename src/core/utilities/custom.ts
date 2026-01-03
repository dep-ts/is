/**
 * Creates a type guard from a custom predicate function.
 *
 * The returned function narrows the value to type `T` when the predicate
 * returns `true`.
 *
 * @param predicate - A function that checks the value
 * @returns A type guard based on the provided predicate
 * @example
 *   const isPositive = is.custom<number>((v) => typeof v === "number" && v > 0);
 *
 *   if (isPositive(x)) {
 *     // `x` is now known to be a positive number
 *     console.log(x);
 *   }
 */
export const custom =
  <T>(predicate: (value: unknown) => boolean) => (value: unknown): value is T =>
    predicate(value);
