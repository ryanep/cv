import type { Config } from "@jest/types";

const jestConfig: Config.InitialOptions = {
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleNameMapper: {
    "^#/test-utils/(.+)$": "<rootDir>/test-utils/$1",
    // eslint-disable-next-line perfectionist/sort-objects -- Order matters.
    "^#/(.+)$": "<rootDir>/src/$1",
  },
  preset: "ts-jest",
  setupFiles: ["./test-utils/factory.ts"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
};

export default jestConfig;
