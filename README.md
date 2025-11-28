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
  import { is } from 'jsr:@dep/is';
  ```
- **Node.js (18+) or Browsers**:
  Use JSR's Node.js compatibility layer:

  ```bash
  npx jsr add @dep/is
  ```

  Then import as an ES module:

  ```typescript
  import { is } from '@dep/is';
  ```

---

## Usage 🎯

### API 🧩

`@dep/is` provides a collection of type guard functions to check the type of values at runtime, along with utility functions for common checks. Below are some examples:

#### Basic Type Checks

```typescript
import { is } from 'jsr:@dep/is';

const isDate = is.custom((data) => data instanceof Date);

console.log(isDate(new Date())); // true
console.log(is.string('hello')); // true
console.log(is.string(123)); // false
console.log(is.number(42)); // true
console.log(is.number(NaN)); // false
console.log(is.array([1, 2, 3])); // true
console.log(is.array({})); // false
console.log(is.record({ key: 'value' })); // true
console.log(is.object(null)); // false
```

#### Advanced Type Checks

```typescript
import { is } from 'jsr:@dep/is';

const promise = Promise.resolve('data');
console.log(is.promise(promise)); // true
console.log(is.promise({ then: () => {} })); // false (not a valid thenable)

const map = new Map();
console.log(is.map(map)); // true
console.log(is.map(new Set())); // false

const date = new Date();
console.log(is.date(date)); // true
console.log(is.date('2023-01-01')); // false

const response = new Response();
console.log(is.response(response)); // true
console.log(is.response({})); // false
```

#### Utility Functions

```typescript
import { is } from 'jsr:@dep/is';

console.log(is.empty('')); // true
console.log(is.empty({})); // true
console.log(is.empty([1, 2])); // false

console.log(is.falsy(0)); // true
console.log(is.falsy('hello')); // false

console.log(is.truthy({})); // true
console.log(is.truthy(null)); // false

console.log(typeOf(42)); // 'number'
console.log(typeOf(NaN)); // 'NaN'
console.log(typeOf(new Map())); // 'map'
console.log(typeOf(undefined)); // 'undefined'
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R. ([estarlincito.com](https://estarlincito.com))
