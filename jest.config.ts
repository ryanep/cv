import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^#/(.+)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest/setup.ts"],
};

export default config;
