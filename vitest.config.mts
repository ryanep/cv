import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

const viteConfig = defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    globals: true,
    mockReset: true,
    setupFiles: ["./vitest-setup.mts"],
  },
});

export default viteConfig;
