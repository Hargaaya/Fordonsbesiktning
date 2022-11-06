import React from "react";
import Header from "../components/Header/Header";
import styled from "styled-components";

type Props = {
  children: JSX.Element[];
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 100px;
`;

export default Layout;
