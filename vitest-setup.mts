import { expect } from "vitest";
import "vitest-axe/extend-expect";
import "@testing-library/jest-dom/vitest";
import "html-validate/vitest";
import * as axeMatchers from "vitest-axe/matchers";
import { AxeMatchers } from "vitest-axe/matchers";

expect.extend(axeMatchers);

declare module "vitest" {
  export interface Assertion extends AxeMatchers {}
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}
