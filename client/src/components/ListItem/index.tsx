import { ReactNode } from "react";

type ListItemProps = {
  children: string | ReactNode;
};

export default function ListItem({ children }: ListItemProps) {
  return <li>{children}</li>;
}
