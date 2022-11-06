import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

type Props = {};

const SystemPage = (props: Props) => {
  const router = useRouter();
  const system = router.query.system;

  return (
    <Container>
      <Title>{system}</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2em;
  font-weight: 600;
  text-transform: capitalize;
  width: fit-content;
  background-image: var(--text-fade);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default SystemPage;
