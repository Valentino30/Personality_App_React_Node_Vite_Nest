import { ReactNode } from "react";
import { StyledDiv } from "./styles";

type ContainerProps = {
  children: ReactNode;
  align?: "left" | "center" | "right";
};

export default function Container({
  align = "center",
  children,
}: ContainerProps) {
  return <StyledDiv align={align}>{children}</StyledDiv>;
}
