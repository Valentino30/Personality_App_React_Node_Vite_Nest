// The line below is to prevent typescript from complaining about the test object not being recognized
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // The line below is to avoid having to import jest variables like “describe” or “expect”
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
  },
});