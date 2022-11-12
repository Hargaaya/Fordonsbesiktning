import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
};

/* Regular menu item that goes into-
SelectionsContainer, integrate link too? */

const MenuItem = ({ text }: Props) => {
  return <Item>{text}</Item>;
};

const Item = styled.div`
  font-family: montserrat;
  white-space: nowrap;
  font-size: 16px;
  padding: 4px 20px;
  text-transform: capitalize;
  border-radius: 10px;
  &:hover {
    background: rgba(240, 240, 240, 0.5);
    box-shadow: var(--shadow-s);
  }
`;

export default MenuItem;
