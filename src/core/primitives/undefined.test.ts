import { assertEqual } from "@dep/assert";
import { undefined as undefined_ } from "./undefined.ts";

Deno.test("Undefined", () => {
  assertEqual(undefined_(undefined), true);
});
