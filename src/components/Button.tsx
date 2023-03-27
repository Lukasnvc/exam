import React, { PropsWithChildren } from "react";

import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isBlue?: boolean;
}

const Button = ({ children, isBlue, ...rest }: PropsWithChildren<Props>) => {
  return (
    <StyledBtn isBlue={isBlue} {...rest}>
      {children}
    </StyledBtn>
  );
};

export default Button;

const StyledBtn = styled.button<{ isBlue?: boolean }>`
  padding: 10px 20px;
  color: white;
  background-color: ${(props) => (props.isBlue ? "#346ef4" : "#ccc")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: #76800b;
  }
`;
