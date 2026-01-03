import { assertEqual } from "@dep/assert";
import { bigint } from "./bigint.ts";

Deno.test("Bigint", () => {
  assertEqual(bigint(10n), true);
});
