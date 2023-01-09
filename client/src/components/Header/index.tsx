type HeaderProps = {
  as?: "h1" | "h2" | "h3";
  children: string;
};

export default function Header({ as: Element = "h1", children }: HeaderProps) {
  return <Element>{children}</Element>;
}
