import { isArray } from '@/core/advances/array.ts';
import { isMap } from '@/core/advances/map.ts';
import { isObject } from '@/core/advances/object.ts';
import { isSet } from '@/core/advances/set.ts';
import { isString } from '@/core/primitives/string.ts';

/** Checks if data is empty (null, undefined, empty string/array/object/map/set) */
export const isEmpty = (data: unknown): boolean => {
  if (data === null || data === undefined) return true;
  if (isString(data)) return data === '';
  if (isArray(data)) return data.length === 0;
  if (isObject(data)) return Object.keys(data).length === 0;
  if (isMap(data) || isSet(data)) return data.size === 0;
  return false;
};
