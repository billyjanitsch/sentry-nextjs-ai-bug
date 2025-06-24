"use server";

import { createStreamableValue } from "ai/rsc";

export async function isAiRscAvailable() {
  // this should always return true
  // but with the Sentry integration enabled, it returns false
  return typeof createStreamableValue === "function";
}
