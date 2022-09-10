import * as styled from "./styles";
import { RootProps } from "./types";

export const Root = ({ children }: RootProps) => {
  return (
    <div>
      <styled.Global />
      {children}
    </div>
  );
};
