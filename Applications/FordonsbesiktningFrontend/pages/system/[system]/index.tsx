import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { capitalize } from "../../../util/helpers";
import systems from "../../../util/systems.json";
import SystemDropdown from "../../../components/SystemDropdown/SystemDropdown";
import { ControlProgram } from "../../../util/types";

type Props = {
  data: ControlProgram[];
  systemName: string;
};

const SystemPage = ({ data, systemName }: Props) => {
  const titleText = capitalize(systemName) + " - Fordonsbesiktning";

  return (
    <Container>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Title>{systemName}</Title>
      <SystemDropdown data={data} />
    </Container>
  );
};

export async function getStaticPaths() {
  const params = [];
  systems.forEach((item, index) => (params[index] = { params: { system: item.name } }));

  return {
    paths: params,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const systemName = context.params.system;
  const systemId = systems.filter((item) => item.name === systemName)[0].id;

  const res = await fetch(`http://localhost:5125/api/subsystems/${systemId}`);
  const data = await res.json();

  return {
    props: {
      systemName,
      data,
    },
  };
}

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
