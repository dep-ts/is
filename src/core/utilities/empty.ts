import { array } from '@/core/advances/array.ts';
import { map } from '@/core/advances/map.ts';
import { object } from '@/core/advances/object.ts';
import { set } from '@/core/advances/set.ts';
import { string } from '@/core/primitives/string.ts';

/**
 * Checks if data is empty (null, undefined, empty string/array/object/map/set)
 * @param data - The value to check
 * @returns `true` if data is empty
 */
export const empty = (data: unknown): boolean => {
  if (data === null || data === undefined) return true;
  if (string(data)) return data === '';
  if (array(data)) return data.length === 0;
  if (object(data)) return Object.keys(data).length === 0;
  if (map(data) || set(data)) return data.size === 0;
  return false;
};
