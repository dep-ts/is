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

#### Primitive Type Checks

```typescript
import { is } from 'jsr:@dep/is';

console.log(is.bigint(10n)); // true
console.log(is.boolean(true)); // true
console.log(is.nan(NaN)); // true
console.log(is.null(null)); // true
console.log(is.number(42)); // true
console.log(is.number(Infinity)); // false
console.log(is.number(NaN)); // false
console.log(is.string('hola')); // true
console.log(is.symbol(Symbol('x'))); // true
console.log(is.undefined(undefined)); // true
```

#### Advanced Type Checks

```typescript
import { is } from 'jsr:@dep/is';

console.log(is.array([1, 2, 3])); // true
console.log(is.blob(new Blob(['hola']))); // true
console.log(is.arrayBuffer(new ArrayBuffer(16))); // true
console.log(is.dataView(new DataView(new ArrayBuffer(8)))); // true
console.log(is.date(new Date())); // true
console.log(is.error(new Error('boom'))); // true
console.log(is.file(new File(['abc'], 'x.txt'))); // true
console.log(is.formData(new FormData())); // true
console.log(is.function(() => 'hey')); // true
console.log(is.headers(new Headers({ 'x-test': '1' }))); // true
console.log(is.map(new Map([['a', 1]]))); // true
console.log(is.object({})); // true
console.log(is.record({ a: 1 })); // true
console.log(is.promise(Promise.resolve())); // true
console.log(is.promiseLike(Promise.resolve())); // true
console.log(is.thenable({ then: () => {} })); // true
console.log(is.regExp(/x/)); // true
console.log(is.request(new Request('/'))); // true
console.log(is.response(new Response())); // true
console.log(is.set(new Set())); // true
console.log(is.url(new URL('https://example.com'))); // true
console.log(is.webSocket(new WebSocket('wss://echo.websocket.org'))); // true
```

#### Utility Functions

```typescript
import { is } from 'jsr:@dep/is';

console.log(is.primitive('hola')); // true
console.log(is.primitive([])); // false

console.log(is.advance([])); // true
console.log(is.advance('hola')); // false

console.log(is.typeOf(42)); // 'number'
console.log(is.typeOf(NaN)); // 'NaN'
console.log(is.typeOf(new Map())); // 'map'
console.log(is.typeOf(undefined)); // 'undefined'
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R. ([estarlincito.com](https://estarlincito.com))
