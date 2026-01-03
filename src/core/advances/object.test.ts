import { assertEqual } from "@dep/assert";
import { object } from "./object.ts";

Deno.test("Object", () => {
  assertEqual(object(new Date()), true);
});
