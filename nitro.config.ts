// @ts-expect-error - nitropack types are provided by TanStack Start internally
import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  preset: "netlify",
});
