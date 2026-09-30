import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: [
      "./src/components/**/*.{test,spec}.ts(x)?",
      "./src/utils/**/*.{test,spec}.ts(x)?",
    ],
  },
});
