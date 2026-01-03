import { assertEqual } from "@dep/assert";
import { promiseLike } from "./promise-like.ts";

Deno.test("Promise-like", () => {
  assertEqual(promiseLike(Promise.resolve()), true);
});
