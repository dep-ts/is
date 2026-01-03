import { assertEqual } from "@dep/assert";
import { error } from "./error.ts";

Deno.test("Error", () => {
  assertEqual(error(new Error()), true);
});
