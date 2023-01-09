import { ReactNode } from "react";

type TextProps = {
  children: string | ReactNode;
};

export default function Text({ children }: TextProps) {
  return <p>{children}</p>;
}
