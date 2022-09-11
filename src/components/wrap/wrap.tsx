import type { WrapProps } from "./types";

export const Wrap = ({ children }: WrapProps) => {
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto px-5">
      {children}
    </div>
  );
};
