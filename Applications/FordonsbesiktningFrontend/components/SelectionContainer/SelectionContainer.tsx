import React from "react";
import styled from "styled-components";

type Props = {
  children: JSX.Element[];
  show: boolean;
  right?: number;
};

/* Selection container for menu buttons, might be
 usable for other buttons to. */

const SelectionContainer = ({ show, right, children }: Props) => {
  return <>{show && <Container style={{ right }}>{children}</Container>}</>;
};

const Container = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  background: var(--background-fade);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  z-index: 1;
  box-shadow: var(--shadow-l);
`;

export default SelectionContainer;
