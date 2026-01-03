import { assertEqual } from "@dep/assert";
import { array } from "./array.ts";

Deno.test("Array", () => {
  assertEqual(array([]), true);
});
