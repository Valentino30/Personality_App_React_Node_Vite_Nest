type ButtonProps = {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({ children, disabled, onClick }: ButtonProps) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
