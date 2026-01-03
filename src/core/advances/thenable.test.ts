import { assertEqual } from "@dep/assert";
import { thenable } from "./thenable.ts";

Deno.test("Thenable", () => {
  assertEqual(thenable({ then: () => {} }), true);
});
