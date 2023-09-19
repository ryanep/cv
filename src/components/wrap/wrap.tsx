import type { WrapProps } from "./types";

export const Wrap = ({ children }: WrapProps) => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col px-5">
      {children}
    </div>
  );
};
