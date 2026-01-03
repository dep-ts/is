import { assertEqual } from "@dep/assert";
import { set } from "./set.ts";

Deno.test("Set", () => {
  assertEqual(set(new Set()), true);
});
