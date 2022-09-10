import type { RootProps } from "./types";

export const Root = ({ children }: RootProps) => {
  return <div className="text-gray-600">{children}</div>;
};
