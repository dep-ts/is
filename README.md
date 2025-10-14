# @dep/is 🛠️

> A lightweight runtime type guard library for JavaScript & TypeScript

[![JSR version](https://jsr.io/badges/@dep/is)](https://jsr.io/@dep/is)

---

## Features ✨

- 🔍 **Type Guards**: Precise type checking for primitives, objects, arrays, and more.
- 🛡️ **TypeScript Support**: Fully typed with TypeScript for robust type narrowing.
- ⚡ **Lightweight**: Minimal footprint with no external dependencies.
- 🌐 **Cross-Platform**: Compatible with Deno, Node.js (18+), and browsers via JSR.
- 🧩 **Comprehensive**: Supports complex types like Promises, Maps, Sets, and Response objects.

---

## Installation 📦

`@dep/is` is published on [JSR.io](https://jsr.io/@dep/is) and is primarily designed for Deno. It can also be used in Node.js (18+) and browsers via JSR.

- **Deno**:
  ```typescript
  import { isArray, isString, typeOf } from 'jsr:@dep/is';
  ```
- **Node.js (18+) or Browsers**:
  Use JSR's Node.js compatibility layer:

  ```bash
  npx jsr add @dep/is
  ```

  Then import as an ES module:

  ```typescript
  import { isArray, isString, typeOf } from '@dep/is';
  ```

**Note**: The `isResponse` function requires the `Response` class, available in Deno, modern browsers, and Node.js 18+. It may not work in older Node.js versions.

---

## Usage 🎯

### API 🧩

`@dep/is` provides a collection of type guard functions to check the type of values at runtime, along with utility functions for common checks. Below are some examples:

#### Basic Type Checks

```typescript
import { isString, isNumber, isArray, isObject } from 'jsr:@dep/is';

console.log(isString('hello')); // true
console.log(isString(123)); // false
console.log(isNumber(42)); // true
console.log(isNumber(NaN)); // false
console.log(isArray([1, 2, 3])); // true
console.log(isArray({})); // false
console.log(isObject({ key: 'value' })); // true
console.log(isObject(null)); // false
```

#### Advanced Type Checks

```typescript
import { isPromise, isMap, isDate, isResponse } from 'jsr:@dep/is';

const promise = Promise.resolve('data');
console.log(isPromise(promise)); // true
console.log(isPromise({ then: () => {} })); // false (not a valid thenable)

const map = new Map();
console.log(isMap(map)); // true
console.log(isMap(new Set())); // false

const date = new Date();
console.log(isDate(date)); // true
console.log(isDate('2023-01-01')); // false

const response = new Response();
console.log(isResponse(response)); // true
console.log(isResponse({})); // false
```

#### Utility Functions

```typescript
import { isEmpty, isFalsy, isTruthy, typeOf } from 'jsr:@dep/is';

console.log(isEmpty('')); // true
console.log(isEmpty({})); // true
console.log(isEmpty([1, 2])); // false

console.log(isFalsy(0)); // true
console.log(isFalsy('hello')); // false

console.log(isTruthy({})); // true
console.log(isTruthy(null)); // false

console.log(typeOf(42)); // 'number'
console.log(typeOf(NaN)); // 'NaN'
console.log(typeOf(new Map())); // 'map'
console.log(typeOf(undefined)); // 'undefined'
```

#### Type Narrowing in TypeScript

```typescript
import { isString, isNumber } from 'jsr:@dep/is';

function processValue(value: unknown): string {
  if (isString(value)) {
    // TypeScript knows `value` is a string
    return value.toUpperCase();
  }
  if (isNumber(value)) {
    // TypeScript knows `value` is a number
    return value.toFixed(2);
  }
  throw new Error('Invalid value');
}
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R. ([estarlincito.com](https://estarlincito.com))
