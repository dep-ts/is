import { assertEqual } from "@dep/assert";
import { promise } from "./promise.ts";

Deno.test("Promise", () => {
  assertEqual(promise(Promise.resolve()), true);
});
