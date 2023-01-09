import styled from "styled-components";

export const StyledDiv = styled("div")<{ align: string }>`
  text-align: ${(props) => props.align};
`;
