import { assertEqual } from "@dep/assert";
import { url } from "./url.ts";

Deno.test("Url", () => {
  assertEqual(url(new URL("https://example.com")), true);
});
