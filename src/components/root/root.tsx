import type { ReactNode } from "react";

interface RootProps {
  readonly children: ReactNode;
}

export const Root = ({ children }: RootProps) => {
  return <div className="text-gray-600">{children}</div>;
};
