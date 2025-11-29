import { TypeName, TypeOf } from './types.ts';
import * as checkers from './checkers.ts';

/**
 * Returns `true` if the value matches **any** of the specified types.
 * Narrowings the type of `value` when used in a type guard context.
 *
 * @param value - The value to check.
 * @param types - One or more type names (e.g. `'string'`, `'number'`, `'regexp'`).
 * @returns `true` if the value is one of the given types.
 * @example
 * if (is.oneOf(input, 'string', 'number')) {
 *   console.log(input.toFixed?.(2) ?? input.toUpperCase());
 *   //  ^? string | number
 * }
 */
export const oneOf = <T extends TypeName[]>(
  value: unknown,
  ...types: T
): value is TypeOf<T[number]> => {
  const map = {
    regexp: 'regExp',
    arraybuffer: 'arrayBuffer',
    dataview: 'dataView',
    formdata: 'formData',
    websocket: 'webSocket',
  } as const;

  return types.some((type) => {
    const normalized = map[type.toLowerCase() as keyof typeof map] ?? type;
    const checker = checkers[normalized];
    return checker(value);
  });
};
