import GlobalStyle from "../layout/GlobalStyle";
import Variables from "../layout/Variables";
import Layout from "../layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Variables />

        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
