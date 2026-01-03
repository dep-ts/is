import { assertEqual } from "@dep/assert";
import { function as function_ } from "./function.ts";

Deno.test("Function", () => {
  assertEqual(
    function_(() => {}),
    true,
  );
});
