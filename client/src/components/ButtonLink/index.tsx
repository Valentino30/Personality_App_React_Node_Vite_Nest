import { Link } from "react-router-dom";
import Button from "../Button";

type ButtonLinkProps = {
  children: string;
  to: string;
};

export default function ButtonLink({ to, children }: ButtonLinkProps) {
  return (
    <Link to={to}>
      <Button>{children}</Button>
    </Link>
  );
}
