import type { Configuration } from "lint-staged";

const lintStagedConfig: Configuration = {
  "*.{ts,tsx}": ["eslint", "prettier --write"],
};

export default lintStagedConfig;
