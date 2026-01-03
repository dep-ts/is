import { assertEqual } from "@dep/assert";
import { request } from "./request.ts";

Deno.test("Request", () => {
  assertEqual(request(new Request("htts://estarlincito.com")), true);
});
