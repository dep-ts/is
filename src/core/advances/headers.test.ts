import { assertEqual } from "@dep/assert";
import { headers } from "./headers.ts";

Deno.test("Headers", () => {
  assertEqual(headers(new Headers()), true);
});
