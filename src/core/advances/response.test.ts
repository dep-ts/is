import { assertEqual } from "@dep/assert";
import { response } from "./response.ts";

Deno.test("Response", () => {
  assertEqual(response(new Response()), true);
});
