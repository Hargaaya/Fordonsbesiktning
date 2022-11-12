import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  // TODO: Remove title and implement a real front page. Maybe a guide?
  return (
    <div>
      <Head>
        <title>Fordonsbesiktning</title>
        <meta name="description" content="Web app that helps you with inspecting vehicles according to TSFS 2017:54" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Title>Front page</Title>
      </Container>
    </div>
  );
}

const Container = styled.div`
  height: 200vh;
`;

const Title = styled.h1`
  font-size: 200px;
  width: fit-content;
  background-image: var(--text-fade);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
