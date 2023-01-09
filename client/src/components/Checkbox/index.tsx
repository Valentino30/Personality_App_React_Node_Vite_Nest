import { StyledInput } from "./styles";

type CheckBoxProps = {
  onChange?: () => void;
  checked?: boolean;
};

export default function CheckBox({ checked, onChange }: CheckBoxProps) {
  return <StyledInput type="checkbox" checked={checked} onChange={onChange} />;
}
